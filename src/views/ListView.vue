<script>
  import axios from 'axios'
  import PlantCard from '../components/PlantCard.vue'

  export default {
    components: {
      PlantCard
    },
    created() {
      this.axiosGetPlants()
      console.log(this.category)
    },

    // props: {
    //   category: {
    //     type: String,
    //     default: 'Alla_väter'
    //   }
    // },

    computed: {
      filterdPlants() {
        const category = this.$route.params.category
        if (category === 'Alla_växter') {
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
              plant.category === category &&
              plant.name.toLowerCase().includes(this.searchText.toLowerCase())
          )
        }
      }
    },

    data() {
      return {
        result: [],
        // category: 'Alla växter',
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
      <b-button to="/plants/Alla_växter" class="categoryLinks button">
        Alla växter
      </b-button>

      <b-button to="/plants/Blommande" class="categoryLinks button">
        Blommande växter
      </b-button>
      <b-button to="/plants/Suckulent" class="categoryLinks button">
        Suckulenter
      </b-button>
      <b-button to="/plants/Gröna växter" class="categoryLinks button">
        Gröna växter
      </b-button>
      <b-button to="/plants/Giftiga_växter" class="categoryLinks button">
        Giftiga växter
      </b-button>
    </div>
    <!-- <h2>{{ category }}</h2> -->
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
