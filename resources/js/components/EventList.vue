<template>
  <div class="container mt-5">
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h3 class="text-primary">All Events</h3>
      <router-link to="/events/create" class="btn btn-outline-primary">
        <i class="bi bi-plus-circle"></i> Add New Event
      </router-link>
    </div>

    <div v-if="events.length" class="row g-4">
      <div v-for="event in events" :key="event.id" class="col-md-6 col-lg-4">
        <div class="card shadow-sm h-100 border-0">
          <div class="card-body">
            <h5 class="card-title">{{ event.title }}</h5>
            <p class="card-text text-muted">{{ event.description }}</p>
            <p><strong>Date:</strong> {{ event.date }}</p>
            <p><strong>Location:</strong> {{ event.location }}</p>
            <span class="badge"
              :class="{
                'bg-success': event.status === 'completed',
                'bg-warning text-dark': event.status === 'ongoing',
                'bg-primary': event.status === 'upcoming',
              }"
            >{{ event.status }}</span>
          </div>
          <div class="card-footer bg-transparent d-flex justify-content-between">
            <button class="btn btn-sm btn-outline-secondary" @click="editEvent(event)">
              <i class="bi bi-pencil"></i> Edit
            </button>
            <button class="btn btn-sm btn-outline-danger" @click="deleteEvent(event.id)">
              <i class="bi bi-trash"></i> Delete
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="alert alert-info text-center mt-4">
      No events found. Add your first one!
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

const events = ref([])
const router = useRouter()

const fetchEvents = async () => {
  const res = await axios.get('/api/events')
  events.value = res.data
}

const deleteEvent = async (id) => {
  if (confirm('Are you sure you want to delete this event?')) {
    await axios.delete(`/api/events/${id}`)
    fetchEvents()
  }
}

const editEvent = (event) => {
 router.push({ name: 'EditEvent', params: { id: event.id } }) // for future edit support
}

onMounted(fetchEvents)
</script>
