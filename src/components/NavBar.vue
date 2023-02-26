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
    width: 100%;
    background-color: rgba(225, 186, 107, 0.1);
  }
  #navbar-container {
    background-color: red;
    padding: 10px;
    width: 100%;
    background-color: rgba(225, 186, 107, 0.9);
  }

  #navbar {
    // background-color: blue;

    width: 100px;
    box-sizing: border-box;
    margin: none;
  }

  #nav-collapse {
    // background-color: white;
    padding: 20px;
    width: 100%;
    margin: none;
    // box-sizing: border-box;
  }

  #secondarylogo {
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 992px) {
    #nav-collapse {
      width: 100%;
    }
    #navbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      // margin-right: 20px;
    }
    .navbar-items {
      width: 100%;

      display: flex;
      flex-direction: row;
      // justify-content: flex-end;
      align-items: center;

      margin-right: 20px;
    }
  }

  @media screen and (max-width: 800px) {
    .navbar-items {
      align-items: end;

      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      // align-items: center;
      margin-right: 20px;
    }

    #links {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: end;
      margin-right: 20px;
    }
  }
  @media screen and (min-width: 600px) {
    #secondarylogo {
      display: flex;

      width: 80px;
      height: 80px;
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
        <b-collapse id="nav-collapse" is-nav v-model="visible">
          <b-navbar-nav>
            <b-nav-form>
              <div>
                <PlantSearch />
              </div>
            </b-nav-form>

            <b-container class="navbar-items">
              <b-nav id="links" align="right">
                <b-nav-item to="/">Hem</b-nav-item>
                <b-nav-item to="/plantlist/Alla_växter">Växtguide</b-nav-item>

                <b-nav-item :to="`/profile/${loggedInUser.user}`"
                  >Min fönsterbräda</b-nav-item
                >
                <b-nav-item @click="onLogoutClick">Logga ut</b-nav-item>
              </b-nav>
            </b-container>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </div>
  </b-navbar>
</template>
