<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { onMounted, ref } from 'vue'
import SmallCard from './components/SmallCard.vue'
import LargeCard from './components/LargeCard.vue'
import ScrollIcon from '@/components/Scroll-icon.vue'
import { getSmallServiceCards, getLargeServiceCards } from '@/api/services'

const smallCards = ref<any[]>([])
const largeCards = ref<any[]>([])

onMounted(async () => {
  const smallRes = await getSmallServiceCards()
  const largeRes = await getLargeServiceCards()
  smallCards.value = smallRes.data
  largeCards.value = largeRes.data
})
</script>

<template>
  <Navbar />
  <div class="services-page">
    <ScrollIcon />
    <section class="hero">
      <h1>Arasaka Services</h1>
      <p>Empowering Corporations with Advanced Security & Tech</p>
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
    </section>
    <section class="service-list">
      <SmallCard v-for="card in smallCards" :key="card.id" :card="card" />
    </section>
    <section class="large-card-section">
      <LargeCard
        v-for="(card, index) in largeCards"
        :key="card.id"
        :card="card"
        :reverse="index % 2 !== 0"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base' as *;
.services-page {
  padding-top: 8vh;
  background-color: #0b0b0b;
  color: white;
  min-height: 100vh;
  @include flex-style;
  flex-direction: column;
  gap: 5vh;
  @media (max-width: 768px) {
    padding: 0 20px;
  }
  .hero {
    @include flex-style;
    flex-direction: column;
    gap: 25px;
    height: 30vh;
    @media (max-width: 768px) {
      height: 100vh;
      text-align: center;
    }
    h1 {
      font-size: 48px;
      color: #ff003c;
      text-shadow: 0 0 15px #ff003c;
    }
    p {
      font-size: 18px;
      margin-top: 10px;
      color: #ccc;
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
  .service-list {
    display: grid;
    width: 70vw;
    grid-template-columns: repeat(3, minmax(280px, 1fr));
    gap: 30px;
    padding: 40px;
    @media (max-width: 768px) {
      @include flex-style;
      flex-direction: column;
      width: 100%;
    }
  }
  .large-card-section {
    @include flex-style;
    flex-direction: column;
    gap: 10vh;
    width: 80vw;
    @media (max-width: 768px) {
      width: 100%;
      gap: 25px;
    }
  }
}
</style>