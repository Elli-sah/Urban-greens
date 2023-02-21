<script>
  import axios from 'axios'

  export default {
    props: {
      name: { type: String, required: true }
    },
    data() {
      return {
        plant: null
      }
    },
    computed: {
      // selectedPlant() {
      //   return this.result.filter((plant) => plant.name === this.name)
      // }
    },
    methods: {
      axiosGetPlants() {
        axios.get('/plants.json').then((response) => {
          this.plant = response.data.filter(
            (plant) => plant.name === this.name
          )[0]
          console.log(this.plant)
        })
      }
    },
    created() {
      this.axiosGetPlants()
    }
  }
</script>

<template>
  <h1>Om</h1>
  <div>
    <img class="image" :src="plant.image" />
    <h2>{{ plant.name }}</h2>
    <p>{{ plant.placement.short }}</p>
    <p>{{ plant.temperature.short }}</p>
    <p>{{ plant.watering.short }}</p>
  </div>
</template>
