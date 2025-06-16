<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { ref } from 'vue'
import axios from 'axios'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

const handleSubmit = async () => {
  try {
    await axios.post('http://localhost:3000/contact', {
      name: name.value,
      email: email.value,
      message: message.value
    })
    submitted.value = true
    name.value = ''
    email.value = ''
    message.value = ''
  } catch (error) {
    console.error('Contact form submission failed:', error)
  }
}
</script>

<template>
  <Navbar />
  <div class="contact-page">
    <div class="wrapper" v-slide-in>
      <img src="@/../public/Arasaka-Logo-RED.png" alt="">
      <h1 class="page-title">Contact Arasaka</h1>
      <div class="contact-info">
        <p><strong>Address:</strong> Night City HQ , Arasaka Tower</p>
        <p><strong>Phone:</strong> +81 45-000-0000</p>
        <p><strong>Email:</strong> contact@arasaka.co.jp</p>
      </div>
      <form class="contact-form" @submit.prevent="handleSubmit">
        <input type="text" v-model="name" placeholder="Your Name" required />
        <input type="email" v-model="email" placeholder="Your Email" required />
        <textarea v-model="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p v-if="submitted" class="success-msg">Your message has been sent. Thank you!</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.contact-page {
  background: #0a0a0a;
  color: white;
  width: 100vw;
  min-height: 100vh;
  @include flex-style;
  flex-direction: column;
  .wrapper {
    @include flex-style;
    flex-direction: column;
    width: 1080px;
    height: 860px;
    position: relative;
    @media (max-width: 768px) {
      width: 90%;
      top: 10vw;
    }
    img {
      filter: drop-shadow(0 0 5px red);
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    .page-title {
      font-size: 3rem;
      text-align: center;
      margin-bottom: 2rem;
      color: #ff003c;
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
    .contact-info {
      margin-bottom: 2rem;
      font-size: 1rem;
      line-height: 2;
      background-color: #111;
      padding: 1rem;
      border-left: 4px solid red;
      border-radius: 8px;
      width: 600px;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
    .contact-form {
      display: flex;
      flex-direction: column;
      gap: 32px;
      width: 600px;
      @media (max-width: 768px) {
        width: 100%;
      }
      input,
      textarea {
        padding: 0.75rem;
        border: none;
        border-radius: 10px;
        background-color: #222;
        color: white;
        font-size: 1rem;
        outline: none;
        border: 1px solid red;
      }
      button {
        background-color: #ff003c;
        color: white;
        padding: 0.75rem;
        border: none;
        border-radius: 10px;
        font-size: 1rem;
        cursor: pointer;
        transition: 0.3s ease;

        &:hover {
          background-color: #ff3366;
        }
      }
    }
    .success-msg {
      margin-top: 1rem;
      color: #fff;
      text-align: center;
    }
  }
}
</style>