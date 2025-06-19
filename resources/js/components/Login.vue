<!-- Login.vue -->
<template>
  <div class="container mt-5">
    <form @submit.prevent="handleLogin" class="card p-4 shadow-sm">
      <h3 class="mb-3">Login</h3>

      <div class="mb-3">
        <label>Email</label>
        <input v-model="email" type="email" class="form-control" required />
      </div>

      <div class="mb-3">
        <label>Password</label>
        <input v-model="password" type="password" class="form-control" required />
      </div>

      <div class="text-end">
        <button class="btn btn-primary">Login</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../stores/authStore'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    await authStore.login({ email: email.value, password: password.value })
    router.push('/dashboard') // Redirect to dashboard or home
  } catch (err) {
    alert(err)
  }
}
</script>
