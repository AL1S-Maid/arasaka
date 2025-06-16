<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Chart from './components/Chart.vue'
import VuetifyCard from './components/VuetifyCard.vue'
import Article from './components/Article.vue'
</script>

<template>
  <Navbar />
  <div class="news-main">
    <section>
      <Chart />
      <VuetifyCard />
    </section>
    <n-divider title-placement="center">
      Articles
    </n-divider>
    <Article />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.news-main {
  @include flex-style;
  flex-direction: column;
  min-height: 100vh;
  gap: 25px;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  section {
    min-height: 100vh;
    width: 100vw;
    @include flex-style;
    flex-direction: column;
    gap: 25px;
  }
  .n-divider {
    @include red-text;
    font-weight: 800 !important;
    font-size: 2.5rem;
  }
}
</style>