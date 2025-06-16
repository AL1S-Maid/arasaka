<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { ref } from 'vue'

interface CsrItem {
  id: number
  title: string
  content: string
  image: string
}

const csrList = ref<CsrItem[]>([
  {
    id: 1,
    title: 'Environmental Protection',
    content: 'We continuously invest in renewable energy and sustainable production systems to reduce environmental impact.',
    image: 'http://localhost:3000/static/night-city.jpg',
  },
  {
    id: 2,
    title: 'Education Sponsorship',
    content: 'Arasaka funds scholarships for outstanding students in engineering and biotech across the globe.',
    image: 'http://localhost:3000/static/classroom.jpg',
  },
  {
    id: 3,
    title: 'Society',
    content: 'Provide more job opportunities and more resources.',
    image: 'http://localhost:3000/static/cyberpunk.jpg',
  },
])
</script>

<template>
  <Navbar />
  <div class="csr-page">
    <div class="banner">
      <h1 class="page-title" v-slide-in>Corporate Social Responsibility</h1>
      <p v-slide-in>Adhering to the principle of putting people first and promoting technology for good, Arasaka is committed to promoting sustainable environmental development, solving social problems and enhancing the transparency of corporate governance through technological innovation</p>
    </div>
    <div class="csr-container">
      <div class="csr-card" v-for="item in csrList" :key="item.id">
        <div class="csr-img" :style="{ backgroundImage: 'url( '+ item.image + ' )' }">
          <div class="wrapper">
            <div class="text" v-slide-in>
              <h2 class="csr-title">{{ item.title }}</h2>
              <p class="csr-content">{{ item.content }}</p>
              <button>
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                  <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                    <path stroke-dasharray="48" stroke-dashoffset="48" d="M11 5h-6v14h14v-6">
                      <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"/>
                    </path>
                    <path stroke-dasharray="12" stroke-dashoffset="12" d="M13 11l7 -7">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"/>
                    </path>
                    <path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3h-6M21 3v6">
                      <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"/>
                    </path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.csr-page {
  @include flex-style;
  flex-direction: column;
  position: relative;
  color: #fff;
  min-height: 100vh;
  width: 100vw;
  gap: 10vh;
  .banner {
    @include flex-style;
    @include background-style;
    background-image: url(http://localhost:3000/static/cyberpunk-2077-image-2.jpeg);
    flex-direction: column;
    height: 542px;
    width: 100vw;
    @media (max-width: 768px) {
      min-height: 100vh;
    }
    .page-title {
      font-size: 3rem;
      text-align: center;
      margin-right: 35vw;
      @media (max-width: 768px) {
        margin: 0;
      }
    }
    p {
      margin-right: 5vw;
      width: 70vw;
      font-size: 1.5rem;
      font-weight: 700;
      @media (max-width: 768px) {
        margin: 0;
        text-align: center;
        font-size: 1.2rem;
        width: 90vw;
      }
    }
  }
  .csr-container {
    @include flex-style;
    flex-direction: column;
    gap: 15vh;
    .csr-card {
      background: #1a1a1a;
      text-align: center;
      transition: transform 0.3s ease;
      .csr-img {
        width: 1200px;
        height: 544px;
        overflow: hidden;
        background-position: center;
        background-size: cover;
        @media (max-width: 768px) {
          background-attachment: fixed;
        }
        .wrapper {
          box-shadow: inset 20vw -10vw 18vw 6vw rgba(0, 0, 0, 0.7);
          width: 1200px;
          height: 544px;
          @include flex-style;
          flex-direction: column;
          @media (max-width: 768px) {
            box-shadow: inset -7vw 1vw 20vw 20vw rgba(0, 0, 0, 0.7);
          }
          .text {
            @include flex-style;
            flex-direction: column;
            gap: 20px;
            .csr-title {
              font-size: 1.8rem;
              @include red-text;
            }
            .csr-content {
              font-size: 1.5rem;
              color: #ffffff;
              width: 25vw;
              @media (max-width: 768px) {
                width: 90vw;
              }
            }
            button {
              @include flex-style;
              font-weight: 700;
              color: #fff;
              background-color: #ff003c;
              width: 120px;
              height: 45px;
              border-radius: 8px;
              outline: none;
              border: none;
              transition: all .2s;
              &:hover {
                box-shadow: 0 0 20px rgba(255, 0, 60, 0.6);
              }
            }
          }
        }
      }
    }
  }
}
</style>