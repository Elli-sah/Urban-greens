<script>
  import axios from 'axios'
  export default {
    created() {
      this.axiosGetPlants()
    },

    data() {
      return {
        result: ''
      }
    },

    methods: {
      axiosGetPlants() {
        axios.get('/plants.json').then((response) => {
          this.result = response.data
        })
      }
    }
  }
</script>

<template>
  <h1>ProduktListan</h1>
  <ul v-for="plant in result" :key="plant">
    <li>{{ plant.name }}</li>
    <img :src="plant.image" alt="" />
  </ul>
</template>
