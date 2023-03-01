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
      handleLinkClicked() {
        this.visible = false
      },
      onLogoutClick() {
        this.$store.commit('logutUser')
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      }),
      isLoggedIn() {
        return !!this.loggedInUser
      },
      isPlantList() {
        return this.$route.path.startsWith('/plantlist')
      }
    },

    watch: {
      '$route.params': {
        handler() {
          this.$route.path === '/plantlist'
          this.visible = false
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
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

  #navbar {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  #nav-collapse {
    padding: 20px;
    width: 100%;
    margin: none;
    justify-content: flex-end;
  }

  #nav-collapse-container {
    width: 100%;
  }

  #links {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: end;
  }

  #secondarylogo {
    width: 40px;
    height: 40px;
  }

  @media (min-width: 992px) {
    #navbar {
      width: 10px;
    }
    #secondarylogo {
      display: flex;
      width: 60px;
      height: 60px;
    }
    #navbar-desktop {
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
      align-items: stretch;
      align-content: space-between;
    }
    ul {
      display: flex;
      justify-content: space-around;
      width: 60%;
    }
    #nav-collapse {
      display: flex;
      width: 100%;
      flex-direction: row-reverse;
    }

    #links {
      display: flex;
      flex-direction: row;
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
        <b-navbar-nav id="navbar-desktop">
          <b-nav-form>
            <PlantSearch
              v-if="!isPlantList"
              @link-clicked="handleLinkClicked"
            />
          </b-nav-form>
          <!-- vrf funkar b-nav-item inte som routerlink??? -->
          <b-container>
            <b-nav id="links" justify="end">
              <b-nav-item @click="handleLinkClicked" to="/">Hem</b-nav-item>
              <b-nav-item @click="handleLinkClicked" to="/plantlist/Alla_växter"
                >Växtguide</b-nav-item
              >

              <b-nav-item
                @click="handleLinkClicked"
                v-if="isLoggedIn"
                :to="`/profile/${loggedInUser.user}`"
                >Min fönsterbräda</b-nav-item
              >
              <b-nav-item v-if="isLoggedIn" @click="onLogoutClick"
                >Logga ut</b-nav-item
              >
              <b-nav-item v-else to="/login">Logga in / Skapa konto</b-nav-item>
            </b-nav>
          </b-container>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>
