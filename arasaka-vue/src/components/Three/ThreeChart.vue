<script setup lang="ts">
import { onMounted, ref } from 'vue'
import * as THREE from 'three'
import { CSS2DRenderer, CSS2DObject } from 'three/examples/jsm/renderers/CSS2DRenderer'
// 创建一个 ref 引用，用于获取 DOM 元素
const chartContainer = ref<HTMLDivElement | null>(null)
// 当组件挂载后执行的函数
onMounted(() => {
  // 确保 chartContainer 引用不为空
  if (!chartContainer.value) return
  
  // 创建一个 Three.js 场景
  const scene = new THREE.Scene()
  
  // 设置相机，视角为 45 度
  const camera = new THREE.PerspectiveCamera(45, chartContainer.value.clientWidth / chartContainer.value.clientHeight, 1, 1000)
  camera.position.set(0, 50, 120) // 设置相机位置
  // 创建 WebGL 渲染器
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(chartContainer.value.clientWidth, chartContainer.value.clientHeight) // 设置渲染器大小
  chartContainer.value.appendChild(renderer.domElement) // 将渲染器的 DOM 元素添加到容器中
  // 创建 CSS2D 渲染器，用于渲染 HTML 标签
  const labelRenderer = new CSS2DRenderer()
  labelRenderer.setSize(chartContainer.value.clientWidth, chartContainer.value.clientHeight) // 设置标签渲染器大小
  labelRenderer.domElement.style.position = 'absolute' // 设置标签渲染器的样式
  labelRenderer.domElement.style.top = '-40px'
  chartContainer.value.appendChild(labelRenderer.domElement) // 将标签渲染器的 DOM 元素添加到容器中
  // 创建一个网格辅助器，用于可视化坐标系
  const gridHelper = new THREE.GridHelper(200, 10)
  scene.add(gridHelper) // 将网格辅助器添加到场景中
  // 定义数据点
  const points = [
    [0, 1],
    [1, 1.5],
    [2, 2.8],
    [3, 3.5],
    [4, 4.2],
    [5, 5.0],
    [6, 6.3],
    [7, 7.2],
    [8, 8.0],
    [9, 8.9],
  ]
  
  // 创建几何体并设置顶点
  const geometry = new THREE.BufferGeometry()
  const vertices: number[] = []
  points.forEach(([x, y]) => {
    vertices.push(x * 10 - 45, y * 10, 0) // 将数据点转换为 Three.js 的坐标系
  })
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3)) // 设置几何体的位置属性
  // 创建线材质并生成线条
  const material = new THREE.LineBasicMaterial({ color: '#ff003c' })
  const line = new THREE.Line(geometry, material)
  scene.add(line) // 将线条添加到场景中
  // 定义年份标签
  const years = ['1915', '1949', '1978', '1999', '2010', '2019', '2026', '2042', '2058', '2076']
  years.forEach((year, i) => {
    const div = document.createElement('div')
    div.className = 'label' // 设置标签样式
    div.textContent = year // 设置标签内容
    div.style.color = 'white' // 设置标签颜色
    const label = new CSS2DObject(div) // 创建 CSS2DObject
    label.position.set(i * 10 - 45, -2, 0) // 设置标签位置
    scene.add(label) // 将标签添加到场景中
  })
  // 定义数值标签
  const values = ['10,000', '89,456', '384,456', '1,876,945', '9,547,369', '299,329,654', '1,789,574,396', '98,879,745,639',  '483,635,120,000', '890,000,634,822']
  values.forEach((val, i) => {
    const div = document.createElement('div')
    div.className = 'label' // 设置标签样式
    div.textContent = val // 设置标签内容
    div.style.color = '#ff003c' // 设置标签颜色
    div.style.overflow = 'none'
    const label = new CSS2DObject(div) // 创建 CSS2DObject
    label.position.set(i * 10 - 45, points[i][1] * 10 + 1, 0) // 设置标签位置
    scene.add(label) // 将标签添加到场景中
  })
  // 动画循环函数
  const animate = () => {
    requestAnimationFrame(animate) // 请求下一帧动画
    renderer.render(scene, camera) // 渲染场景
    labelRenderer.render(scene, camera) // 渲染标签
  }
  animate() // 开始动画循环
})
</script>

<template>
  <div ref="chartContainer" class="chart-container"></div>
</template>

<style scoped lang="scss">
.chart-container {
  width: 100%;
  height: 800px;
  position: relative;
  background: #0b0b0b;
  color: #fff;
}
.label {
  font-size: 12px;
  pointer-events: none;
  user-select: none;
}
div {
  overflow: none;
}
</style>