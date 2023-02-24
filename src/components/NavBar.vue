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
        this.$store.commit('logutUser')
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
    },

    watch: {
      '$route.params'() {
        this.visible = false
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    background-color: rgba(225, 186, 107, 0.1);
  }
  #navbar-container {
    display: flex;
    padding: 10px;
    width: 100%;
    background-color: rgba(225, 186, 107, 0.9);
  }

  #navbar {
    width: 100%;
    box-sizing: border-box;
    margin: none;
  }

  #nav-collapse {
    background-color: white;

    padding: 20px;
    // width: 100%;

    // box-sizing: border-box;
  }

  #secondarylogo {
    width: 40px;
    height: 40px;
  }
  @media screen and (min-width: 600px) {
    #secondarylogo {
      width: 80px;
      height: 80px;
    }
    #nav-collapse-container {
      display: flex;
      align-items: end;
    }
    #nav-collapse {
      display: flex;
      align-items: end;
    }
  }
</style>

<template>
  <!-- <div> -->
  <b-navbar id="navbar-container" toggleable="lg" fixed="top">
    <div id="navbar" class="d-flex justify-content-between navbar">
      <RouterLink to="/"
        ><img
          id="secondarylogo"
          src="../../assets/logo-secondary.png"
          alt="Primary logo"
      /></RouterLink>

      <b-navbar-toggle target="nav-collapse" is-nav />
    </div>
    <div>
      <div>
        <div id="nav-collapse-container">
          <b-collapse
            class="d-flex justify-content-end"
            id="nav-collapse"
            is-nav
            v-model="visible"
          >
            <b-navbar-nav>
              <b-nav-form>
                <div>
                  <PlantSearch />
                </div>
              </b-nav-form>

              <b-container>
                <b-row id="links" align="right">
                  <b-nav-item to="/">Hem</b-nav-item>
                  <b-nav-item to="/plantlist/Alla_växter">Växtguide</b-nav-item>

                  <b-nav-item :to="`/profile/${loggedInUser.user}`"
                    >Min fönsterbräda</b-nav-item
                  >
                  <b-nav-item @click="onLogoutClick">Logga ut</b-nav-item>
                </b-row>
              </b-container>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
    </div>
  </b-navbar>
</template>
