<script setup lang="ts">
import Atom from '@/components/Three/ThreeAtom.vue'
import Splitter from 'primevue/splitter'
import SplitterPanel from 'primevue/splitterpanel'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from '@/api/index'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')
const userStore = useUserStore()

const handleSubmit = async () => {
  error.value = ''
  try {
    const res = await axios.post('/auth/login', {
      email: email.value,
      password: password.value
    })
    if (res.data && res.data.success) {
      userStore.setUser({
        email: res.data.email,
        token: res.data.token,
        isAdmin: res.data.isAdmin
      })
    }

    if (res.data && res.data.success) {
      userStore.setUser({
        email: res.data.email,
        token: res.data.token,
        isAdmin: res.data.isAdmin
      })
      router.push('/')
    } else {
      error.value = res.data.message || '登录失败'
    }
  } catch (err: any) {
    console.error('登录出错:', err)
    if (err.response) {
      console.error('响应错误:', err.response.data)
      error.value = err.response.data.message || '服务器错误'
    } else if (err.request) {
      console.error('请求无响应:', err.request)
      error.value = '无法连接到服务器'
    } else {
      console.error('配置错误:', err.message)
      error.value = '未知错误'
    }
  }
}
</script>

<template>
  <div class="login-container">
    <Splitter style="height: 80vh; width: 80vw;">
        <SplitterPanel class="flex items-center justify-center">
          <div class="left">
            <Atom />
          </div>
        </SplitterPanel>
        <SplitterPanel class="flex items-center justify-center">
          <form @submit.prevent="handleSubmit">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              <!-- 外边框 -->
              <polygon class="border outer" points="0,0 85,0 100,15 100,100 15,100 0,85" />
              <!-- 内边框（偏移）-->
              <polygon class="border inner" points="5,5 80,5 95,20 95,95 20,95 5,80" />
            </svg>
            <img src="@/../public/Arasaka-Logo-RED.png" alt="Arasaka Logo" />
            <div class="ipt-wrapper">
              <span>Enter Your Email</span>
              <input type="email" v-model="email" placeholder="Email" required />
            </div>
            <div class="ipt-wrapper">
              <span>Enter Your Password</span>
              <input type="password" v-model="password" placeholder="Password" required />
            </div>
            <button type="submit">Submit</button>
            <p v-if="error">{{ error }}</p>
          </form>
        </SplitterPanel>
    </Splitter>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.login-container {
  @include flex-style;
  height: 100vh;
  width: 100vw;
  background-color: #0f0f0f;
  color: white;
  gap: 5vh;
  .p-splitterpanel {
    @include flex-style;
    form {
      @include flex-style;
      flex-direction: column;
      gap: 50px;
      position: relative;
      padding: 20px;
      height: 75vh;
      width: 35vw;
      svg {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        .border {
          fill: none;
          filter: drop-shadow(0 0 5px #ff003c);
          &.outer {
            stroke: #ff003c;
          }

          &.inner {
            stroke: orange;
          }
        }
      }
      img {
        filter: drop-shadow(0 0 5px #ff003c);
      }
      input, button {
        padding: 10px;
        font-size: 16px;
        outline: none;
        border: none;
      }
      input {
        width: 380px;
        border-radius: 8px;
        color: #fff;
      }
      .ipt-wrapper {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 10px;
        z-index: 2;
        span {
          color: #ff003c;
          text-shadow: 0 0 15px #ff003c;
          font-weight: 700;
        }
      }
      button {
        z-index: 2;
        font-weight: 700;
        color: #fff;
        background-color: #ff003c;
        width: 120px;
        height: 45px;
        border-radius: 8px;
        box-shadow: 0 0 15px #ff003c;
        transition: all .2s;
        &:hover {
          box-shadow: 0 0 8px #ff003c;
        }
      }
    }
  }
}
</style>