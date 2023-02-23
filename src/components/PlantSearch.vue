<script>
  import axios from 'axios'
  // import PlantCard from './PlantCard.vue'
  // import PlantItem from './PlantItem.vue'

  export default {
    components: {
      // PlantCard
      // PlantItem
      // PlantSearch
    },

    props: {
      // name: { type: String, required: true }
      // plant: {
      //   type: Object,
      //   default: () => ({})
      // }
    },
    data() {
      return {
        result: [],
        category: 'all',
        // message: '',
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

    computed: {
      filterdPlants() {
        const searchText = this.$route.query.search

        if (this.category === 'all') {
          return this.result.filter((plant) => {
            if (!searchText) {
              return true
            } else {
              const lowerCaseName = plant.name.toLowerCase()
              const lowerCaseSearchText = searchText.toLowerCase()
              return lowerCaseName.includes(lowerCaseSearchText)
            }
          })
        } else {
          return this.result.filter(
            (plant) =>
              plant.category === this.category &&
              plant.name.toLowerCase().includes(searchText.toLowerCase())
          )
        }
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
  <b-link :to="`/plants/${plant.name}`" class="list-group-item">
    <p>{{ plant.name }}</p></b-link
  >
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
