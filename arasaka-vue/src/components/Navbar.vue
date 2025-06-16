<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

const user = useUserStore()
const logout = () => user.logout()

const drawer = ref(false)
const isVisible = () => {
  drawer.value = ! drawer.value
}
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to='/'>
        <img src="@/../public/Arasaka-Logo.png" alt="Arasaka Logo" />
      </RouterLink>
    </div>
    <ul class="nav-links">
      <li><RouterLink to="/news">News</RouterLink></li>
      <li><RouterLink to="/services">Services</RouterLink></li>
      <li><RouterLink to="/csr">CSR</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
      <li v-if="user.isAdmin"><RouterLink to="/admin">Admin</RouterLink></li>
      <button v-if="!user.email">
        <RouterLink to="/login">Login / Sign in</RouterLink>
      </button>
      <li v-else class="user-box">
        <img class="avatar" src="http://localhost:3000/static/icons/Arasaka-Logo-mini.png" alt="avatar" />
        <span>{{ user.email }}</span>
        <button @click="logout">Log out</button>
      </li>
    </ul>
    <ul class="nav-links-dropdown" v-show="drawer">
      <li><RouterLink to="/news">News</RouterLink></li>
      <div class="linebreak"></div>
      <li><RouterLink to="/services">Services</RouterLink></li>
      <div class="linebreak"></div>
      <li><RouterLink to="/csr">CSR</RouterLink></li>
      <div class="linebreak"></div>
      <li><RouterLink to="/about">About</RouterLink></li>
      <div class="linebreak"></div>
      <li><RouterLink to="/contact">Contact</RouterLink></li>
      <div class="linebreak"></div>
      <li v-if="user.isAdmin"><RouterLink to="/admin">Admin</RouterLink></li>
      <div class="linebreak"></div>
      <button v-if="!user.email">
        <RouterLink to="/login">Login / Sign in</RouterLink>
      </button>
      <li v-else class="user-box">
        <div class="user">
          <img class="avatar" src="http://localhost:3000/static/icons/Arasaka-Logo-mini.png" alt="avatar" />
          <span>{{ user.email }}</span>
        </div>
        <div class="linebreak"></div>
        <button @click="logout">Log out</button>
      </li>
    </ul>
    <div class="toggle" @click="isVisible()">
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" v-show="!drawer">
        <path fill="currentColor" d="M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2m0 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2"/>
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" v-show="drawer">
        <path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/>
      </svg>
    </div>
  </nav>
</template>



<style lang="scss" scoped>
@use '@/styles/base' as *;
.navbar {
  top: 0;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  z-index: 9999;
  width: 100vw;
  @media (max-width: 768px) {
    justify-content: space-between;
    padding: 0 25px;
  }
  .logo {
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: 30vw;
    a {
      @include flex-style;
      img {
        width: 70%;
        filter: drop-shadow(0 0 5px red);
        @media (max-width: 768px) {
          width: 200px;
        }
      }
    }
  }
  .nav-links {
    list-style: none;
    display: flex;
    gap: 30px;
    min-width: 30vw;
    @include flex-style;
    transition: all 0.15s;
    @media (max-width: 768px) {
      display: none;
    }
    li {
      a {
        font-weight: bold;
        position: relative;

        &:hover {
          color: #ff003c;
          text-shadow: 0 0 10px #ff003c;
        }

        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #ff003c;
          transition: 0.3s;
        }

        &:hover::after {
          width: 100%;
        }
      }
    }
    button {
      font-weight: 700;
      color: #fff;
      background-color: #ff003c;
      width: 120px;
      height: 45px;
      border-radius: 8px;
      outline: none;
      border: none;
      &:hover {
        box-shadow: 0 0 20px rgba(255, 0, 60, 0.6);
      }
    }
    .user-box {
      display: flex;
      align-items: center;
      gap: 10px;
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
      span {
        color: #fff;
        font-weight: 700;
      }
    }
  }
  .nav-links-dropdown {
    list-style: none;
    gap: 15px;
    min-width: 30vw;
    @include flex-style;
    transition: all 0.15s;
    animation: slideIn 0.15s ease-out forwards;
    background-color: #1b1b1b;
    border-radius: 8px;
    padding: 25px;
    @keyframes slideIn {
      0% {
        transform: translateY(-80%);
        opacity: 0;
      }
      100% {
        transform: translateY(0);
        opacity: 1;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
      position: fixed;
      width: 90vw;
      top: 70px;
    }
    li {
      a {
        font-weight: bold;
        position: relative;
        &:hover {
          color: #ff003c;
          text-shadow: 0 0 10px #ff003c;
        }
        &::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0%;
          height: 2px;
          background-color: #ff003c;
          transition: 0.3s;
        }
        &:hover::after {
          width: 100%;
        }
      }
    }
    button {
      font-weight: 700;
      color: #fff;
      background-color: #ff003c;
      width: 120px;
      height: 45px;
      border-radius: 8px;
      outline: none;
      border: none;
      &:hover {
        box-shadow: 0 0 20px rgba(255, 0, 60, 0.6);
      }
    }
    .user-box {
      @include flex-style;
      flex-direction: column;
      gap: 10px;
      .user {
        @include flex-style;
        gap: 10px;
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
        span {
          color: #fff;
          font-weight: 700;
        }
      }
    }
  }
  .toggle {
    @include flex-style;
    width: 36px;
    height: 36px;
    display: none;
    @media screen and (max-width: 960px) {
      display: flex;
    }
    svg {
      transition: all 0.15s;
      path {
        fill: #fff;
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