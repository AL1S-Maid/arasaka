<script setup lang="ts">
defineProps<{
  card: {
    title: string
    description: string
    icon: string
  }
}>()
</script>

<template>
  <div class="service-card" v-slide-in>
    <div class="icon">
      <img :src="card.icon" alt="">
    </div>
    <h2>{{ card.title }}</h2>
    <p>{{ card.description }}</p>
  </div>
</template>

<style scoped lang="scss">
.service-card {
  border: 2px solid #ff003c;
  border-radius: 12px;
  padding: 20px;
  transition: all 0.3s ease;
  background: rgba(255, 0, 60, 0.05);
  box-shadow: 0 0 15px rgba(255, 0, 60, 0.3);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 20px rgba(255, 0, 60, 0.6);
  }
  @media (max-width: 768px) {
    width: 320px;
  }
}
</style>