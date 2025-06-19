import { defineStore } from 'pinia'
import axios from 'axios'
import { useAuthStore } from './authStore'

export const useEventStore = defineStore('event', {
  state: () => ({
    events: []
  }),
  actions: {
    // async fetchEvents() {
    //   const auth = useAuthStore()
    //   const res = await axios.get('/api/events', {
    //     headers: {
    //       'Authorization': `Bearer ${auth.token}`,
    //       'Content-Type': 'application/json',
    //       'Accept': 'application/json'
    //     }
    //   })
    //   this.events = res.data
    // },
    async fetchEvents({ page = 1, status = '', search = '' } = {}) {
      try {
        const auth = useAuthStore()
        const response = await axios.get('/events', {
          params: { page, status, search }
        },{
          headers: {
            Authorization: `Bearer ${auth.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        })

        this.events = response.data.data
        this.pagination = {
          current_page: response.data.current_page,
          last_page: response.data.last_page,
        }
      } catch (error) {
        console.error('Error fetching events:', error)
      }
    },
    async fetchEvent(id) {
      try {
        const auth = useAuthStore()
        const response = await axios.get(`/api/events/${id}`,{
          headers: {
            Authorization: `Bearer ${auth.token}`,
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }
        })
        this.event = response.data
      } catch (error) {
        console.error('Failed to fetch event:', error)
      }
    },
    async createEvent(eventData) {
      const auth = useAuthStore()
      await axios.post('/api/events', eventData, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
      await this.fetchEvents()
    },
    async updateEvent(id, updatedData) {
      const auth = useAuthStore()
      const response = await axios.put(`/api/events/${id}`, updatedData,
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      })
      // Optionally re-fetch events after update
      await this.fetchEvents()
      return response.data
    },
    async deleteEvent(id) {
      const auth = useAuthStore()
      await axios.delete(`/api/events/${id}`, {
        headers: {
          'Authorization': `Bearer ${auth.token}`,
          'Content-Type': 'application/json',
          'Accept': 'application/json'

        }
      })
      await this.fetchEvents()
    }
  }
})
