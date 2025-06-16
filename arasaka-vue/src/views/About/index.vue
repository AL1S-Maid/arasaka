<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import ScrollIcon from '@/components/Scroll-icon.vue'
import TimeLine from './components/TimeLine.vue'
import TeamGrid from './components/TeamGrid.vue'
</script>

<template>
  <Navbar />
  <div class="about-main">
    <section style="background-image: url(http://localhost:3000/static/wallpapersden.com_cyberpunk-2077-hd-gaming-22_2560x1440.jpg);">
      <header class="title" v-slide-in>
        <h1>ABOUT ARASAKA</h1>
        <p>Who We Are & What We Stand For</p>
        <ScrollIcon />
      </header>
    </section>
    <section>
      <div class="about-card" v-slide-in>
        <div class="left">
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <!-- 外边框 -->
            <polygon class="border outer" points="0,0 85,0 100,15 100,100 15,100 0,85" />
            <!-- 内边框（偏移）-->
            <polygon class="border inner" points="5,5 80,5 95,20 95,95 20,95 5,80" />
          </svg>
          <img src="http://localhost:3000/static/icons/Arasaka-logo.png" alt="" class="logo1">
          <img src="@/../public/Arasaka-Logo-RED.png" alt="" class="logo2">
        </div>
        <div class="right">
          <h2>About Arasaka Corporation</h2>
          <p>Arasaka Corporation is a global leader in security, technology, and innovation. Founded on the principles of integrity, excellence, 
            and customer-first service, we are committed to creating a safer, smarter future for individuals and enterprises worldwide. 
            With decades of experience and a relentless pursuit of technological advancement, Arasaka provides cutting-edge solutions in corporate protection, 
            cybersecurity, and medical innovation. Our mission is to empower our clients through trust, reliability, and forward-thinking strategies that drive progress and safeguard tomorrow.
          </p>
        </div>
      </div>
    </section>
    <n-divider title-placement="center">
      Enterprise Philosophy
    </n-divider>
    <section>
      <div class="idea">
        <TimeLine />
      </div>
    </section>
    <n-divider title-placement="center">
      Team Members
    </n-divider>
    <section>
      <TeamGrid />
    </section>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.about-main {
  @include flex-style;
  flex-direction: column;
  min-height: 100vh;
  @media (max-width: 768px) {
    gap: 25px;
  }
  section {
    @include flex-style;
    @include background-style;
    width: 100%;
    height: 100vh;
    position: relative;
    .title {
      @include flex-style;
      flex-direction: column;
      height: 100%;
      width: 100%;
      backdrop-filter: blur(8px);
      @media (max-width: 768px) {
        text-align: center;
      }
      h1 {
        font-size: 3rem;
      }
      p {
        color: #fff;
        font-weight: 700;
        font-size: 1.8rem;
      }
    }
    .idea {
      color: #fff;
      width: 70vw;
      height: 80vh;
      font-size: 1.2rem;
      @media (max-width: 768px) {
        height: auto;
        width: 90vw;
      }
    }
  }
  .about-card {
    @include flex-style;
    height: 80vh;
    width: 80vw;
    gap: 50px;
    @media (max-width: 768px) {
      flex-direction: column;
      width: 100vw;
      min-height: 100vh;
    }
    .left {
      @include flex-style;
      flex-direction: column;
      width: 50%;
      position: relative;
      height: 60vh;
      @media (max-width: 768px) {
        width: 100%;
      }
      svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        .border {
          fill: none;
          filter: drop-shadow(0 0 5px red);
          &.outer {
            stroke: red;
          }

          &.inner {
            stroke: orange;
          }
        }
      }
      img {
        filter: drop-shadow(0 0 8px red);
      }
      .logo1 {
        width: 250px;
        height: 250px;
      }
    }
    .right {
      @include flex-style;
      flex-direction: column;
      align-items: flex-start;
      color: #fff;
      font-weight: 700;
      width: 50%;
      gap: 25px;
      @media (max-width: 768px) {
        width: 100%;
        padding: 0 20px;
        align-items: center;
        text-align: center;
      }
      h2 {
        font-size: 2.5rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
  .n-divider {
    @include red-text;
    font-weight: 800 !important;
    font-size: 2.5rem;
    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
}
</style>