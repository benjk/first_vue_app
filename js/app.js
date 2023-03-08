const { createApp } = Vue

  createApp({
    data() {
      return {
        user: 'Ben',
        count: 0
      }
    }
  }).mount('#app')