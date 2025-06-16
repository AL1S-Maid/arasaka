<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import { ref, onMounted } from 'vue'
import axios from '@/api/index'

interface User {
  id: number
  email: string
  isAdmin: boolean
}

const userList = ref<User[]>([])

// 添加用户表单数据
const form = ref({
  email: '',
  password: '',
  isAdmin: false
})

// 获取用户列表
const fetchUsers = async () => {
  try {
    const res = await axios.get('/user') // ✅ 通过拦截器自动带 token
    userList.value = res.data
    console.log(res.data)
  } catch (err) {
    console.error('获取用户失败:', err)
  }
}

// 创建新用户
const createUser = async () => {
  if (!form.value.email || !form.value.password) return

  await axios.post('/user', form.value)
  await fetchUsers()

  // 重置表单
  form.value = { email: '', password: '', isAdmin: false }
}

// 删除用户
const deleteUser = async (id: number) => {
  if (confirm('确定要删除这个用户吗？')) {
    await axios.delete(`/user/${id}`)
    await fetchUsers()
  }
}

// 编辑管理员权限
const toggleAdmin = async (user: User) => {
  await axios.patch(`/user/${user.id}`, {
    isAdmin: !user.isAdmin
  })
  await fetchUsers()
}

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <Navbar />
  <div class="admin-container">
    <h1>用户管理面板</h1>
    <form @submit.prevent="createUser" class="user-form">
      <input v-model="form.email" type="email" placeholder="邮箱" required />
      <input v-model="form.password" type="password" placeholder="密码" required />
      <label>
        <input type="checkbox" v-model="form.isAdmin" />
        管理员权限
      </label>
      <button type="submit">添加用户</button>
    </form>
    <table class="user-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>邮箱</th>
          <th>权限</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userList" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>
            <button @click="toggleAdmin(user)">
              {{ user.isAdmin ? '管理员' : '普通用户' }}
            </button>
          </td>
          <td>
            <button @click="deleteUser(user.id)">删除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/base' as *;
.admin-container {
  padding: 2rem;
  font-family: Arial, sans-serif;
  color: #fff;
  min-height: 100vh;
  width: 100vw;
  @include flex-style;
  flex-direction: column;
  gap: 50px;
  .user-form {
    @include flex-style;
    gap: 1rem;
    width: 100%;
    input {
      width: 420px;
      border: 1px solid #ff003c;
      border-radius: 8px;
      height: 36px;
      outline: none;
      padding: 10px;
      font-size: 16px;
      color: #fff;
    }
    label {
      @include flex-style;
      gap: 25px;
      input {
        width: auto;
      }
    }
  }
  .user-table {
    width: 100%;
    border-collapse: collapse;
    th, td {
      padding: 0.5rem 1rem;
      border: 1px solid #ff003c;
      text-align: center;
    }
  }
}
</style>