<script>
  import axios from 'axios'
  import PlantCard from '../components/PlantCard.vue'
  export default {
    components: {
      PlantCard
    },
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
  <div>
    <PlantCard v-for="plant in result" :key="plant" :plant="plant" />
  </div>
</template>

<style>
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    gap: 10px;
    width: 100%;
    justify-content: center;
  }
</style>
