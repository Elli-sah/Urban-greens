<script>
  import axios from 'axios'
  import PlantCard from '../components/PlantCard.vue'
  export default {
    components: {
      PlantCard
    },

    computed: {
      filterdPlants() {
        if (this.category === 'all') {
          return this.result.filter((plant) => {
            if (!this.searchText) {
              return true
            } else {
              const lowerCaseName = plant.name.toLowerCase()
              const lowerCaseSearchText = this.searchText.toLowerCase()
              return lowerCaseName.includes(lowerCaseSearchText)
            }
          })
        } else {
          return this.result.filter(
            (plant) =>
              plant.category === this.category &&
              plant.name.toLowerCase().includes(this.searchText.toLowerCase())
          )
        }
      }
    },

    created() {
      this.axiosGetPlants()
    },

    data() {
      return {
        result: [],
        category: 'all',
        message: '',
        name: 'all',
        searchText: ''
      }
    },

    methods: {
      axiosGetPlants() {
        axios.get('/plants.json').then((response) => {
          this.result = response.data
        })
      }
    },

    watch: {
      searchText(newValue) {
        console.log(newValue)
      }
    }
  }
</script>

<template>
  <h1>TEST SÖK</h1>
  <input type="text" v-model="searchText" placeholder="Sök..." />

  <ul>
    <li @click="category = 'all'">Alla växter</li>
    <li @click="category = 'Gröna växter'">Gröna växter</li>
    <li @click="category = 'Blommande'">Blommande</li>
    <li @click="category = 'Suckulent'">Suckulenter</li>
  </ul>
  <div>
    <PlantCard
      v-for="plant in filterdPlants"
      :key="plant.name"
      :plant="plant"
    />
  </div>
</template>

<style scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    gap: 10px;
    width: 100%;
    justify-content: center;
  }
  li {
    cursor: pointer;
  }
</style>
