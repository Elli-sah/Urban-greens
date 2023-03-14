<script>
  import axios from 'axios'
  import PlantCard from '../components/PlantCard.vue'
  import PageLoader from '../components/PageLoader.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      PlantCard,
      PageLoader
    },
    created() {
      this.axiosGetPlants()
      console.log(this.category)
    },

    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      }),
      filteredPlants() {
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
              plant.category.includes(category) &&
              plant.name.toLowerCase().includes(this.searchText.toLowerCase())
          )
        }
      }
    },

    data() {
      return {
        category: 'all',

        result: [],
        searchText: '',
        notFound: false,
        isLoading: true
      }
    },

    mounted() {
      setTimeout(() => {
        this.isLoading = false
      })
    },
    methods: {
      axiosGetPlants() {
        axios.get('/plants.json').then((response) => {
          //Sorterar planterna alfabetiskt
          this.result = response.data.sort((a, b) => {
            if (a.name < b.name) {
              return -1
            } else if (a.name > b.name) {
              return 1
            } else {
              return 0
            }
          })
        })
      }
    },

    watch: {
      searchText(newValue) {
        console.log(newValue)
        this.name = newValue

        //Errormeddelande om searchText inte matchar resultatet
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

      <span v-if="notFound">
        <p>"{{ searchText }}" hittades inte.</p>
        <p>
          Men på
          <RouterLink class="links" :to="`/profile/${loggedInUser.user}`"
            >fönsterbrädan</RouterLink
          >
          kan du lägga till dina egna växter!
        </p>
      </span>
    </div>

    <div class="scrolling-wrapper">
      <RouterLink to="/plantlist/Alla_växter" class="categoryLinks">
        <button class="button">Alla växter</button>
      </RouterLink>

      <RouterLink to="/plantlist/Blommande" class="categoryLinks">
        <button class="button">Blommande växter</button>
      </RouterLink>
      <RouterLink to="/plantlist/Suckulent" class="categoryLinks">
        <button class="button">Suckulenter</button>
      </RouterLink>
      <RouterLink to="/plantlist/Gröna växter" class="categoryLinks">
        <button class="button">Gröna växter</button>
      </RouterLink>
      <Router-Link to="/plantlist/Örter" class="categoryLinks">
        <button class="button">Örter</button>
      </Router-Link>
    </div>
    <!-- <h2>{{ category }}</h2> -->
    <div>
      <div v-if="isLoading" class="overlay">
        <PageLoader />
      </div>
      <div v-else id="filtered-plants">
        <PlantCard
          v-for="plant in filteredPlants"
          :key="plant.name"
          :plant="plant"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #filtered-plants {
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    gap: 10px;
    width: 100%;
    justify-content: center;
  }

  a:hover {
    color: inherit;
    font-weight: 600;
  }

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
  .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
  }

  @media screen and (min-width: 800px) {
    .scrolling-wrapper {
      justify-content: center;
    }
  }
</style>
