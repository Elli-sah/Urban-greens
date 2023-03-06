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
        searchText: '',
        notFound: false
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

        this.notFound = !this.result.some((plant) =>
          plant.name.toLowerCase().includes(this.searchText.toLowerCase())
        )
      }
    }
  }
</script>

<template>
  <div class="view-divs">
    <h1 id="list-view-heading">Växtguide</h1>
    <div class="input-div">
      <input type="text" v-model="searchText" />
      <i @click="submit" class="bi bi-search" />

      <span class="error-message" v-if="notFound">
        <p>"{{ searchText }}" hittades inte.</p>
        <p>
          Saknar du en planta? Här i Växtguiden kan du lägga till vilken du
          vill!
        </p>
      </span>
    </div>

    <div class="scrolling-wrapper">
      <Router-Link to="/plantlist/Alla_växter" class="categoryLinks">
        <button class="button">Alla växter</button>
      </Router-Link>

      <Router-Link to="/plantlist/Blommande" class="categoryLinks">
        <button class="button">Blommande växter</button>
      </Router-Link>
      <Router-Link to="/plantlist/Suckulent" class="categoryLinks">
        <button class="button">Suckulenter</button>
      </Router-Link>
      <Router-Link to="/plantlist/Gröna växter" class="categoryLinks">
        <button class="button">Gröna växter</button>
      </Router-Link>
      <!-- <Router-Link to="/plantlist/Giftiga_växter" class="categoryLinks">
        <button class="button">Giftiga växter</button>
      </Router-Link> -->
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

  // #list-view-heading {
  //   text-align: center;
  //   margin: 20px 0 60px 0;
  // }

  .input-div i {
    position: absolute;
    margin: auto;
  }

  .input-div {
    max-width: 720px;
    padding-left: 25px;
    margin: auto;
    position: relative;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 30px;
    border: none;
  }

  i {
    right: 20px;
    top: 10px;
    z-index: 6;
  }

  .scrolling-wrapper {
    margin: 10px;
    overflow-y: hidden;
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  @media screen and (min-width: 800px) {
    .scrolling-wrapper {
      justify-content: center;
    }
  }
</style>
