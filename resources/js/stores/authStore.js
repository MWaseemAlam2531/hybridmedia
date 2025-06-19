import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null
  }),
  actions: {
    async login({ email, password }) {
        try {
            const res = await axios.post('/api/sanctum/token', {
              email,
              password
            })
    
            this.token = res.data.token
            this.user = res.data.user
    
            localStorage.setItem('token', this.token)
          } catch (error) {
            throw error.response?.data?.message || 'Login failed'
          }
    },
    async fetchUser() {
      if (!this.token) return
      const res = await axios.get('/api/user', {
        headers: {
          Authorization: `Bearer ${this.token}`
        }
      })
      this.user = res.data
    },
    logout() {
      this.user = null
      this.token = null
      localStorage.removeItem('token')
    }
  }
})
