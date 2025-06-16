<script setup lang="ts">
defineProps<{
  card: {
    title: string
    description: string
    icon: string
  }
  reverse?: boolean
}>()
</script>

<template>
  <div class="linebreak"></div>
  <div :class="['large-card', { reverse }]" v-slide-in>
    <img :src="card.icon" alt="image" />
    <div class="content">
      <h1>{{ card.title }}</h1>
      <p>{{ card.description }}</p>
      <RouterLink to="">
        <button>
          Purchase business
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5rem" height="1.5rem" viewBox="0 0 48 48">
            <g fill="none">
              <path d="M39 32H13L8 12h36z"/>
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M3 6h3.5L8 12m0 0l5 20h26l5-20z"/>
              <circle cx="13" cy="39" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
              <circle cx="39" cy="39" r="3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"/>
            </g>
          </svg>
        </button>
      </RouterLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.linebreak {
  background-image: linear-gradient(96.18deg, rgba(215, 196, 255, 0) 10%, hsla(0, 0%, 78%, .24) 50%, rgba(215, 196, 255, 0) 90%);
  bottom: auto;
  height: 1px;
  left: 0;
  margin: 0 auto;
  position: relative;
  right: 0;
  top: 0;
  width: 100%;
}
.large-card {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 60vw;
  padding: 20px;
  @media (max-width: 768px) {
    flex-direction: column !important;
    width: 100%;
  }
}
.reverse {
  flex-direction: row-reverse;
}
img {
  width: 200px;
  height: 200px;
}
.content {
  @include flex-style;
  flex-direction: column;
  align-items: flex-start;
  max-width: 600px;
  gap: 25px;
  @media (max-width: 768px) {
    align-items: center;
  }
  p {
    font-size: 1.2rem;
  }
  button {
    @include flex-style;
    font-weight: 700;
    color: #fff;
    background-color: #ff003c;
    height: 45px;
    width: 200px;
    border-radius: 8px;
    outline: none;
    border: none;
    transition: all .2s;
    gap: 10px;
    &:hover {
      box-shadow: 0 0 20px rgba(255, 0, 60, 0.6);
    }
  }
}
</style>