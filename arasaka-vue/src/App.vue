<script setup lang="ts">
import Footer from './components/Footer.vue'
import BackTop from './components/BackTop.vue';
</script>

<template>
  <div id="app-container">
    <BackTop />
    <main class="main-content">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style lang="scss">
@use '@/styles/base' as *;
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  gap: 10vh;
}

.main-content {
  flex: 1;
  @media (max-width: 768px) {
    @include flex-style;
    flex-direction: column;
  }
}
</style>
