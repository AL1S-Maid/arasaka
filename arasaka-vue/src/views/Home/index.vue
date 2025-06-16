<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ScrollIcon from '@/components/Scroll-icon.vue'
import Triangle from '@/components/Three/Triangle3D.vue'
import axios from 'axios'

interface Service {
  id: number
  title: string
  description: string
  image: string
}

// 响应式服务数据
const services = ref<Service[]>([])

// 页面加载时获取数据
onMounted(async () => {
  try {
    const res = await axios.get('http://localhost:3000/core-services')
    services.value = res.data
  } catch (err) {
    console.error('获取核心服务失败：', err)
  }
})

const fullText = 'ARASAKA CORPORATION'
const typedText = ref('')
let index = 0
let intervalId: number

const startTyping = () => {
  intervalId = window.setInterval(() => {
    if (index < fullText.length) {
      typedText.value += fullText[index]
      index++
    } else {
      clearInterval(intervalId)
      // 等待一段时间再重新开始
      setTimeout(() => {
        typedText.value = ''
        index = 0
        startTyping()
      }, 2000) // 等待2秒后重新开始打字
    }
  }, 100)
}

onMounted(() => {
  startTyping()
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <Navbar />
  <div class="home-container">
    <header class="banner">
      <Triangle />
      <div class="wrapper">
        <h1 class="typewriter">{{ typedText }}<span class="cursor">|</span></h1>
        <p>Guarding The Future · Technology As A Shield</p>
        <p>Connnect The World With Technology And Glory</p>
      </div>
      <ScrollIcon />
    </header>
    <div class="linebreak"></div>
    <section class="services">
      <div class="service-card" v-for="service in services" :key="service.id" v-slide-in>
        <img :src="service.image" :alt="service.title" />
        <div class="text">
          <h1>{{ service.title }}</h1>
          <n-divider />
          <p>{{ service.description }}</p>
          <RouterLink to="/services">
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
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@use '@/styles/base' as *;
.home-container {
  @include flex-style;
  flex-direction: column;
  position: relative;
  width: 100%;
  min-height: 100vh;
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  gap: 25px;
  .banner {
    @include flex-style;
    flex-direction: column;
    position: relative;
    width: 100vw;
    min-height: 100vh;
    .wrapper {
      position: absolute;
      @include flex-style;
      flex-direction: column;
      z-index: 2;
      overflow: auto;
      @media (max-width: 768px) {
        padding: 0 20px;
      }
      .typewriter {
        font-family: 'Orbitron', sans-serif;
        font-size: 5rem;
        white-space: nowrap;
        overflow: hidden;
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        @media (max-width: 768px) {
          white-space: inherit;
          font-size: 2.8rem;
          text-align: center;
        }
        .cursor {
          display: inline-block;
          width: 1ch;
          animation: blink 0.8s step-end infinite;
          color: #ff003c;
        }
      }
      p {
        margin-top: 10px;
        font-size: 1.2rem;
        color: #ccc;
        text-shadow: 0 0 6px #0ff4;
        @media (max-width: 768px) {
          text-align: center;
        }
      }
    }
  }
  .services {
    width: 100vw;
    @include flex-style;
    flex-direction: column;
    min-height: 100vh;
    @media (max-width: 768px) {
      gap: 25px;
    }
    .service-card {
      @include flex-style;
      width: 80vw;
      height: 70vh;
      justify-content: space-around;
      gap: 5vw;
      @media (max-width: 768px) {
        flex-direction: column !important;
        height: auto;
        width: 90vw;
        gap: 25px;
      }
      &:nth-child(odd) {
        flex-direction: row-reverse;
      }
      img {
        width: 720px;
        height: 480px;
        object-fit: cover;
        border-radius: 8px;
        @media (max-width: 768px) {
          width: 100%;
          height: auto;
        }
      }
      .text {
        @include flex-style;
        align-items: flex-start;
        flex-direction: column;
        width: 70vw;
        height: 100vh;
        gap: 20px;
        @media (max-width: 768px) {
          width: 100%;
          height: auto;
          align-items: center;
        }
        h1 {
          font-size: 2rem;
        }
        p {
          font-size: 1.5rem;
          @media (max-width: 768px) {
            font-size: 1.2rem;
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
          gap: 5px;
          &:hover {
            box-shadow: 0 0 20px rgba(255, 0, 60, 0.6);
          }
        }
      }
    }
  }
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
}
</style>