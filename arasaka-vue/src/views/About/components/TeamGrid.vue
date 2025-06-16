<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Member {
  id: number
  name: string
  description: string
  avatar: string
}

const members = ref<Member[]>([])

onMounted(async () => {
  const res = await axios.get('http://localhost:3000/team-members')
  members.value = res.data
})
</script>

<template>
  <div class="grid-container" v-slide-in>
    <div
      v-for="member in members"
      :key="member.id"
      class="card"
    >
      <img :src="member.avatar" alt="Avatar" />
      <h3>{{ member.name }}</h3>
      <p>{{ member.description }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, minmax(400px, 1fr));
  grid-template-rows: repeat(3, 250px);
  gap: 50px;
  @media (max-width: 768px) {
    @include flex-style;
    flex-direction: column;
  }
  .card {
    @include flex-style;
    flex-direction: column;
    border: 1px solid #ff003c;
    border-radius: 12px;
    background: #1b1b1b;
    color: #fff;
    transition: all 0.2s;
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 0 20px rgba(255, 0, 60, 0.6);
    }
    @media (max-width: 768px) {
      width: 320px;
    }
    img {
      width: 150px;
      height: 150px;
      object-fit: contain;
      margin-bottom: 10px;
      filter: drop-shadow(0 0 10px red);
    }
  }
}
</style>