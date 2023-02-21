<script>
  import { mapState } from 'vuex'

  export default {
    data() {
      return {
        visible: true,
        searchText: ''
      }
    },
    methods: {
      setText() {
        this.$store.commit('setSearchText', this.searchText)
      }
      // searchText(newValue) {
      //   console.log(newValue)
      //   this.$store.commit('setSearchText', newValue)
      // }
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
      <div class="d-flex justify-content-between navbar">
        <h1 class="p-2">Brand Name</h1>
        <b-navbar-toggle target="nav-collapse" is-nav />
      </div>

      <div class="d-flex justify-content-end navbar">
        <div>
          <b-collapse id="nav-collapse" is-nav>
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
                  to="/PlantList/all"
                  >Sök
                </b-button>
              </b-nav-form>

              <b-container>
                <b-row align="right">
                  <b-nav-item to="/">Hem</b-nav-item>
                  <b-nav-item to="/login">Logga in</b-nav-item>
                  <b-nav-item :to="`/profile/${loggedInUser.user}`"
                    >Min fönsterbräda</b-nav-item
                  >
                  <b-nav-item to="/plantlist/all">Växtguide</b-nav-item>
                </b-row>
              </b-container>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
    </b-navbar>
  </div>
</template>
