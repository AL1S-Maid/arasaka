import axios from 'axios'
import { useUserStore } from '@/stores/user'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// 请求拦截器：添加 token
instance.interceptors.request.use(config => {
  const saved = localStorage.getItem('user')
  if (saved) {
    const { token } = JSON.parse(saved)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  }
  return config
})

export default instance