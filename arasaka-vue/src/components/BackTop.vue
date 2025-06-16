<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > window.innerHeight
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div v-if="isVisible" class="back-to-top" @click="scrollToTop">
    <svg xmlns="http://www.w3.org/2000/svg" width="2rem" height="12rem" viewBox="0 0 24 24"><path fill="currentColor" d="m5.84 15.41l5.66-5.66l5.66 5.66l-.71.7l-4.95-4.95l-4.95 4.95z"/></svg>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base' as *;
.back-to-top {
  @include flex-style;
  background-color: #fff;
  box-shadow: 0 0 8px #3d3d3da8;
  color: gray;
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.3s;
  z-index: 999;
}
</style>