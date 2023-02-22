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
      setText() {
        this.$store.commit('setSearchText', this.searchText)
      },
      closeMenu() {
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

<style lang="scss"></style>

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
                  @click="setText"
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
                  <b-nav-item @click="closeMenu" to="/">Hem</b-nav-item>
                  <b-nav-item @click="closeMenu" to="/login"
                    >Logga in</b-nav-item
                  >
                  <b-nav-item
                    @click="closeMenu"
                    :to="`/profile/${loggedInUser.user}`"
                    >Min fönsterbräda</b-nav-item
                  >
                  <b-nav-item @click="closeMenu" to="/plantlist"
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
