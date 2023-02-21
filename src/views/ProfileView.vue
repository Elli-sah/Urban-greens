<script>
  import MyShelf from '../components/MyShelf.vue'
  import { mapState } from 'vuex'

  export default {
    data() {
      return { profile: null }
    },
    components: {
      MyShelf
    },
    computed: {
      ...mapState({
        myProfile: (state) => state.users[this.loggedInUser.user],
        loggedInUser: (state) => state.loggedInUser
      })
      this.profile = this.loggedInUser
    }
  }
</script>

<template>
  <h1>Här är din fönsterbräda, {{ loggedInUser.name }}!</h1>
  <MyShelf :profile="myProfile" />
</template>

<style></style>
