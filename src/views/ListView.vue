<script>
  import axios from 'axios'
  import PlantCard from '../components/PlantCard.vue'
  export default {
    components: {
      PlantCard
    },

    computed: {
      filterdPlants() {
        if (this.category === 'Alla växter') {
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
        category: 'Alla växter',
        message: '',

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
        this.name = newValue
      }
    }
  }
</script>

<template>
  <div class="view-divs">
    <h1>Växtguide</h1>
    <div class="input-div">
      <input type="text" v-model="searchText" />
      <i @click="submit" class="bi bi-search" />
    </div>
    <div class="scrolling-wrapper">
      <button class="categoryLinks button" @click="category = 'Alla växter'">
        Alla växter
      </button>
      <button class="categoryLinks button" @click="category = 'Blommande'">
        Blommande växter
      </button>
      <button class="categoryLinks button" @click="category = 'Suckulent'">
        Succulenter
      </button>
      <button class="categoryLinks button" @click="category = 'Gröna växter'">
        Gröna växter
      </button>
      <button class="categoryLinks button" @click="category = 'Giftiga växter'">
        Giftiga växter
      </button>
    </div>
    <h2>{{ category }}</h2>
    <div id="filteredPlants">
      <PlantCard
        v-for="plant in filterdPlants"
        :key="plant.name"
        :plant="plant"
      />
    </div>
  </div>
</template>

<style scoped>
  #filteredPlants {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    gap: 10px;
    width: 100%;
    justify-content: center;
  }

  .input-div i {
    position: absolute;
  }

  .input-div {
    width: 90%;
    margin: auto;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 30px;
    border: none;
  }

  i {
    position: relative;
    right: 45px;
    z-index: 6;
    padding: 10px;
  }

  .categoryLinks {
    display: inline-block;
    /* flex: auto; */
  }

  .scrolling-wrapper {
    overflow-y: hidden;
    white-space: nowrap;
    /* display: flex; */
    flex-wrap: nowrap;
  }
</style>
