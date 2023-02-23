<script>
  import { mapState } from 'vuex'
  import axios from 'axios'
  import PlantItem from '../components/PlantItem.vue'

  export default {
    components: {
      PlantItem
    },

    data() {
      return {
        visible: false,
        searchText: '',
        result: [],
        category: 'all',
        message: '',
        name: 'all'
      }
    },
    methods: {
      onClickPlants() {
        this.visible = true
        this.axiosGetPlants()
      },
      onClick() {
        this.visible = false
        // this.$store.commit('setSearchText', this.searchText)
      },
      axiosGetPlants() {
        axios.get('/plants.json').then((response) => {
          this.result = response.data
        })
      }
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
      },
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
    },
    watch: {
      searchText(newValue) {
        console.log(newValue)
      }
    }
  }
</script>

<style lang="scss">
  #navbar {
    background-color: rgba(225, 186, 107);
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    margin: none;
  }

  #nav-collapse {
    background-color: rgba(225, 186, 107, 0.9);
    padding: 20px;
    width: 100%;
    margin: none;
    box-sizing: border-box;
  }

  #secondarylogo {
    width: 40px;
    height: 40px;
  }
</style>

<template>
  <div>
    <b-navbar toggleable="lg" fixed="top">
      <div id="navbar" class="d-flex justify-content-between navbar" fluid>
        <img
          id="secondarylogo"
          src="../../assets/logo-secondary.png"
          alt="Primary logo"
        />
        <!-- <h1 class="p-2">Brand Name</h1> -->
        <b-navbar-toggle target="nav-collapse" is-nav />
      </div>
      <div class="d-flex justify-content-end navbar">
        <div>
          <b-collapse id="nav-collapse" is-nav v-model="visible">
            <b-navbar-nav>
              <b-nav-form>
                <div>
                  <b-form-input
                    @input="onClickPlants"
                    v-model="searchText"
                    size="sm"
                    class="mr-sm-2 d-flex justify-content-start"
                    placeholder="Sök..."
                  />
                  <PlantItem
                    v-model="visible"
                    @click="onClick"
                    v-for="plant in filterdPlants"
                    :key="plant.name"
                    :plant="plant"
                  />
                </div>
              </b-nav-form>

              <b-container>
                <b-row align="right">
                  <b-nav-item @click="onClick" to="/">Hem</b-nav-item>
                  <b-nav-item @click="onClick" to="/login">Logga in</b-nav-item>
                  <b-nav-item
                    @click="onClick"
                    :to="`/profile/${loggedInUser.user}`"
                    >Min fönsterbräda</b-nav-item
                  >
                  <b-nav-item @click="onClick" to="/plants"
                    >Växtguide</b-nav-item
                  >
                </b-row>
              </b-container>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
    </b-navbar>
  </div>
</template>
