<script>
  import { mapState } from 'vuex'
  import PlantSearch from './PlantSearch.vue'

  export default {
    components: {
      PlantSearch
    },
    data() {
      return {
        visible: false
      }
    },
    methods: {
      onLogoutClick() {
        this.visible = false
        this.$store.commit('logutUser')
      },

      onClick() {
        this.visible = false
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
    }
  }
</script>

<style lang="scss" scoped>
  #navbar-container {
    padding: 10px;
    width: 100%;
    background-color: rgba(225, 186, 107);
  }

  #navbar {
    width: 100%;
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
  <!-- <div> -->
  <b-navbar id="navbar-container" toggleable="lg" fixed="top">
    <div id="navbar" class="d-flex justify-content-between navbar" fluid>
      <RouterLink to="/"
        ><img
          id="secondarylogo"
          src="../../assets/logo-secondary.png"
          alt="Primary logo"
      /></RouterLink>
      <!-- <h1 class="p-2">Brand Name</h1> -->
      <b-navbar-toggle target="nav-collapse" is-nav />
    </div>
    <div class="d-flex justify-content-end navbar">
      <div>
        <b-collapse id="nav-collapse" is-nav v-model="visible">
          <b-navbar-nav>
            <b-nav-form>
              <div>
                <PlantSearch />
              </div>
            </b-nav-form>

            <b-container>
              <b-row align="right">
                <b-nav-item @click="onClick" to="/">Hem</b-nav-item>
                <b-nav-item @click="onClick" to="/plantlist/Alla_växter"
                  >Växtguide</b-nav-item
                >

                <b-nav-item
                  @click="onClick"
                  :to="`/profile/${loggedInUser.user}`"
                  >Min fönsterbräda</b-nav-item
                >
                <b-nav-item @click="onLogoutClick">Logga ut</b-nav-item>
              </b-row>
            </b-container>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </div>
  </b-navbar>
  <!-- </div> -->
</template>
