<template>
  <div class="container mt-5">
    <div class="card shadow-sm border-0">
      <div class="card-header bg-primary text-white">
        <h4 class="mb-0">Create New Event</h4>
      </div>
      <div class="card-body">
        <form @submit.prevent="submitForm">
          <div class="row g-3">
            <!-- Title -->
            <div class="col-md-6">
              <div class="form-floating">
                <input v-model="form.title" type="text" class="form-control" id="title" placeholder="Event Title" required>
                <label for="title">Event Title</label>
              </div>
            </div>

            <!-- Date -->
            <div class="col-md-6">
              <div class="form-floating">
                <input v-model="form.date" type="date" class="form-control" id="date" required>
                <label for="date">Event Date</label>
              </div>
            </div>

            <!-- Location -->
            <div class="col-md-6">
              <div class="form-floating">
                <input v-model="form.location" type="text" class="form-control" id="location" placeholder="Location" required>
                <label for="location">Location</label>
              </div>
            </div>

            <!-- Status -->
            <div class="col-md-6">
              <div class="form-floating">
                <select v-model="form.status" class="form-select" id="status" required>
                  <option value="upcoming">Upcoming</option>
                  <option value="ongoing">Ongoing</option>
                  <option value="completed">Completed</option>
                </select>
                <label for="status">Status</label>
              </div>
            </div>

            <!-- Description -->
            <div class="col-12">
              <div class="form-floating">
                <textarea v-model="form.description" class="form-control" placeholder="Event Description" id="description" style="height: 150px" required></textarea>
                <label for="description">Event Description</label>
              </div>
            </div>

            <!-- Submit -->
            <div class="col-12 text-end">
              <button type="submit" class="btn btn-success px-4">
                <i class="bi bi-plus-circle me-2"></i> Create Event
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useEventStore } from '../stores/eventStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const form = ref({
  title: '',
  description: '',
  date: '',
  location: '',
  status: 'upcoming',
})

const eventStore = useEventStore()

const submitForm = async () => {
  try {
    await eventStore.createEvent(form.value)
    alert('Event created successfully!')
    router.push('/events')
  } catch (error) {
    console.error(error)
    alert('Something went wrong while creating the event.')
  }
}
</script>

<style scoped>
.card {
  border-radius: 1rem;
}
</style>
