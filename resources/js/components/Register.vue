<template>
  <div class="container mt-5">
    <form @submit.prevent="handleRegister" class="card p-4 shadow-sm mx-auto" style="max-width: 500px">
      <h3 class="text-center text-primary mb-4">Create Account</h3>

      <!-- Name -->
      <div class="form-floating mb-3">
        <input v-model="name" type="text" class="form-control" id="name" placeholder="Full Name" required />
        <label for="name">Full Name</label>
      </div>

      <!-- Email -->
      <div class="form-floating mb-3">
        <input v-model="email" type="email" class="form-control" id="email" placeholder="Email Address" required />
        <label for="email">Email Address</label>
      </div>

      <!-- Password -->
      <div class="form-floating mb-3">
        <input v-model="password" type="password" class="form-control" id="password" placeholder="Password" required />
        <label for="password">Password</label>
      </div>

      <!-- Confirm Password -->
      <div class="form-floating mb-4">
        <input v-model="password_confirmation" type="password" class="form-control" id="password_confirmation" placeholder="Confirm Password" required />
        <label for="password_confirmation">Confirm Password</label>
      </div>

      <!-- Submit Button -->
      <div class="d-grid">
        <button type="submit" class="btn btn-success">
          <i class="bi bi-person-plus-fill me-2"></i> Register
        </button>
      </div>

      <div class="text-center mt-3">
        <router-link to="/login" class="text-decoration-none">Already have an account? Login</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/authStore'

const name = ref('')
const email = ref('')
const password = ref('')
const password_confirmation = ref('')
const router = useRouter()
const authStore = useAuthStore()

const handleRegister = async () => {
  try {
    const res = await axios.post('/api/register', {
      name: name.value,
      email: email.value,
      password: password.value,
      password_confirmation: password_confirmation.value,
    })

    // Auto-login after registration
    await authStore.login({ email: email.value, password: password.value })

    router.push('/dashboard')
  } catch (err) {
    console.error(err)
    alert(err.response?.data?.message || 'Registration failed')
  }
}
</script>
