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
    padding: 10px;
    width: 100%;
    background-color: rgba(225, 186, 107, 0.9);
  }

  #navbar {
    width: 100px;
    box-sizing: border-box;
    margin: none;
  }

  #nav-collapse {
    // background-color: red;
    padding: 20px;
    width: 100%;
    margin: none;
    justify-content: flex-end;
  }

  #nav-collapse-container {
    width: 100%;
  }

  #links {
    display: flex;
    align-items: end;
    margin-left: 80px;
    // flex-direction: column;
  }

  #secondarylogo {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 992px) {
    // #links {
    //   display: flex;
    //   flex-direction: column;
    // }
    // #nav-collapse {
    //   width: 100%;
    // }
    #navbar {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .navbar-items {
      width: 100%;

      display: flex;
      flex-direction: row;
      align-items: center;

      margin-right: 20px;
    }
  }

  @media (min-width: 600px) {
    #secondarylogo {
      display: flex;
      width: 60px;
      height: 60px;
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

      <b-navbar-toggle target="nav-collapse" />
    </div>
    <div id="nav-collapse-container">
      <b-collapse id="nav-collapse" is-nav v-model="visible">
        <b-navbar-nav>
          <b-nav-form>
            <div>
              <PlantSearch />
            </div>
          </b-nav-form>

          <b-container>
            <b-nav id="links" justify="end">
              <b-nav-item to="/">Hem</b-nav-item>
              <b-nav-item to="/plantlist/Alla_växter">Växtguide</b-nav-item>

              <b-nav-item :to="`/profile/${loggedInUser.user}`"
                >Min fönsterbräda</b-nav-item
              >
              <b-nav-item @click="onLogoutClick">Logga ut</b-nav-item>
            </b-nav>
          </b-container>
        </b-navbar-nav></b-collapse
      >
    </div>
  </b-navbar>
</template>
