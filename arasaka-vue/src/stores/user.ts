import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as null | { email: string; token: string; isAdmin: boolean },
    email: '',
    token: '',
    isAdmin: false
  }),
  actions: {
    setUser(payload: { email: string; token: string; isAdmin: boolean }) {
      this.email = payload.email
      this.token = payload.token
      this.isAdmin = payload.isAdmin
      this.user = payload
      localStorage.setItem('user', JSON.stringify(this.$state))
    },
    logout() {
      this.email = ''
      this.token = ''
      this.isAdmin = false
      this.user = null
      localStorage.removeItem('user')
    },
    loadUser() {
      const saved = localStorage.getItem('user')
      if (saved) {
        const parsed = JSON.parse(saved)
        this.email = parsed.email
        this.token = parsed.token
        this.isAdmin = parsed.isAdmin
        this.user = parsed.user
      }
    }
  }
})