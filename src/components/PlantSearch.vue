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
      plant: {
        type: Object,
        default: () => ({})
      }
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
      },
      onClickPlants() {
        this.axiosGetPlants()
      }
    },

    computed: {
      filterdPlants() {
        if (this.category === 'all') {
          return this.result.filter((plant) => {
            if (this.searchText) {
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

    watch: {
      searchText(newValue) {
        console.log(newValue)
      }
    }
  }
</script>

<template>
  <h1>TEST SÖK</h1>

  <input
    @input="onClickPlants"
    type="text"
    v-model="searchText"
    placeholder="Sök..."
  />
  <div>
    <b-link
      v-for="plantan in filterdPlants"
      :key="plantan.name"
      :to="`/plants/${plantan.name}`"
      class="list-group-item"
    >
      {{ plantan.name }}</b-link
    >
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
