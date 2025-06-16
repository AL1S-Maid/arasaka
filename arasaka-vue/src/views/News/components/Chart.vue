<script setup lang="ts">
const years = [1915, 1949, 1978, 1999, 2010, 2019, 2026, 2042, 2058, 2076]
const values = [100, 300, 800, 1600, 2800, 3600, 5100, 6700, 7900, 8900]

// 图表宽高与偏移量
const chartWidth = 840
const chartHeight = 440
const offsetX = 60
const offsetY = 100
const xStep = chartWidth / (years.length - 1)

const maxValue = 9000
const minValue = 0

// 坐标计算
const coords = values.map((value, index) => {
  const x = offsetX + index * xStep
  const y = offsetY + chartHeight * (1 - (value - minValue) / (maxValue - minValue))
  return { x, y }
})

const points = coords.map(p => `${p.x},${p.y}`).join(' ')
</script>

<template>
  <div class="chart-container">
    <svg
      width="960"
      height="576" 
      viewBox="0 0 960 576" 
      xmlns="http://www.w3.org/2000/svg">
      v-slide-in
      <!-- 网格线 -->
      <!-- <g stroke="#333" stroke-width="1">
        <line v-for="i in 9" :key="i" :y1="i * 60" :y2="i * 60" x1="60" x2="680" />
      </g> -->
      <!-- 坐标轴 -->
      <line x1="60" y1="60" x2="60" y2="520" stroke="#555" stroke-width="2" />
      <line x1="60" y1="520" x2="960" y2="520" stroke="#555" stroke-width="2" />
      <!-- 折线 -->
      <polyline
        :points="points"
        fill="none"
        stroke="#ff003c"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <!-- 红点 + 市值文字 -->
      <g v-for="(point, index) in coords" :key="index">
        <circle :cx="point.x" :cy="point.y" r="4" fill="red" />
        <text :x="point.x" :y="point.y - 12" fill="red" font-size="14" text-anchor="middle">
          {{ values[index] }}
        </text>
      </g>

      <!-- 横轴年份 -->
      <g>
        <text
          v-for="(year, index) in years"
          :key="year"
          :x="offsetX + index * xStep"
          y="560"
          fill="#fff"
          font-size="14"
          text-anchor="middle"
        >
          {{ year }}
        </text>
      </g>

      <!-- 图表标题 -->
      <text x="480" y="40" fill="#ff003c" font-size="2.5rem" font-weight="bold" text-anchor="middle">
        Arasaka Market Value（1915 - 2076）
      </text>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
svg {
  height: auto;
  width: 100%;
}
</style>