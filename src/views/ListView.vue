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
      <Router-Link to="/plantlist/Alla_växter" class="categoryLinks button">
        Alla växter
      </Router-Link>

      <Router-Link to="/plantlist/Blommande" class="categoryLinks button">
        Blommande växter
      </Router-Link>
      <Router-Link to="/plantlist/Suckulent" class="categoryLinks button">
        Suckulenter
      </Router-Link>
      <Router-Link to="/plantlist/Gröna växter" class="categoryLinks button">
        Gröna växter
      </Router-Link>
      <Router-Link to="/plantlist/Giftiga_växter" class="categoryLinks button">
        Giftiga växter
      </Router-Link>
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

<style lang="scss" scoped>
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
    margin: auto;
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
    right: 10%;
    z-index: 6;
    padding: 10px;
  }

  .categoryLinks {
    display: inline-block;
    // flex: auto;
  }

  .scrolling-wrapper {
    overflow-y: hidden;
    white-space: nowrap;
    /* display: flex; */
    flex-wrap: nowrap;
    width: 100%;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 1000px) {
    i {
      right: 17%;
    }
    .input-div {
      width: 70%;
    }
  }
</style>
