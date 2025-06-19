<template>
  <div class="container mt-5">
    <div class="p-5 text-center bg-light rounded-3 shadow-sm">
      <h1 class="text-primary">Welcome to Event Manager</h1>
      <p class="lead mt-3">Create, manage, and keep track of your events with ease.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mt-4">
        <router-link to="/events" class="btn btn-outline-primary btn-lg px-4">
          <i class="bi bi-calendar-event"></i> View Events
        </router-link>
        <router-link to="/events/create" class="btn btn-primary btn-lg px-4">
          <i class="bi bi-plus-circle"></i> Create Event
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// no logic required for now
</script>
