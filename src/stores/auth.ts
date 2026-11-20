import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

const AUTH_STORAGE_KEY = 'pulse-demo-authenticated'

export const useAuthStore = defineStore('auth', () => {
  const authenticated = ref(
    typeof window !== 'undefined' && window.localStorage.getItem(AUTH_STORAGE_KEY) === 'true',
  )

  const isAuthenticated = computed(() => authenticated.value)

  const login = () => {
    authenticated.value = true
    window.localStorage.setItem(AUTH_STORAGE_KEY, 'true')
  }

  const logout = () => {
    authenticated.value = false
    window.localStorage.removeItem(AUTH_STORAGE_KEY)
  }

  return { isAuthenticated, login, logout }
})
