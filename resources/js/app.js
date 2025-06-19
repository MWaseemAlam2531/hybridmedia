import './bootstrap';
import { createApp } from 'vue';
 import App from './App.vue'
 import router from './router'
 import { createPinia } from 'pinia'
 import axios from 'axios'

 const token = localStorage.getItem('token')
 if (token) {
   axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
 }
 // axios.defaults.baseURL = '/api'
 axios.defaults.headers.common['Accept'] = 'application/json'
 
// axios.defaults.baseURL = '/api'
// axios.defaults.withCredentials = true

 const app = createApp(App)
 app.use(createPinia())
 app.use(router)
 app.mount('#app')
 
