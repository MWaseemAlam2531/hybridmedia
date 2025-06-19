import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import EventForm from '../components/EventForm.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import EventList from '../components/EventList.vue'
import EventEditForm from '../components/EventEditForm.vue'

const routes = [
  { path: '/login', name: 'login', component: Login },
  { path: '/register', name: 'register', component: Register },    
  { path: '/dashboard', name: 'dashboard', component: Dashboard },
  { path: '/events', name: 'event.list', component: EventList },
  { path: '/events/create', name: 'event.create', component: EventForm },
  { path: '/events/edit/:id',name: 'EditEvent', component: EventEditForm },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
