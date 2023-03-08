const { createApp } = Vue

  createApp({
    data() {
      return {
        user: 'Ben',
        count: 0,
        link: "https://www.malt.fr/profile/benjaminkielinski"
      }
    }
  }).mount('#app')