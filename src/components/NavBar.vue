<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        visible: false,
        searchText: ''
      }
    },
    methods: {
      onClick() {
        this.visible = false

        this.$store.commit('setSearchText', this.searchText)
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
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
</style>

<template>
  <div>
    <b-navbar toggleable="lg" fixed="top">
      <div id="navbar" class="d-flex justify-content-between navbar" fluid>
        <h1 class="p-2">Brand Name</h1>
        <b-navbar-toggle target="nav-collapse" is-nav />
      </div>
      <div class="d-flex justify-content-end navbar">
        <div>
          <b-collapse id="nav-collapse" is-nav v-model="visible">
            <b-navbar-nav>
              <b-nav-form>
                <b-form-input
                  v-model="searchText"
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Sök..."
                />

                <b-button
                  @click="onClick"
                  variant=""
                  size="m"
                  class="my-2 my-sm-0"
                  type="submit"
                  to="/plantList"
                  >Sök
                </b-button>
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
                  <b-nav-item @click="onClick" to="/plantlist"
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
