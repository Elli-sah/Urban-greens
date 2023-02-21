<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      profile: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser,
        myPlants: (state) => state.users[this.loggedInUser.user].favorites
      })
    }
  }
</script>

<template>
  <h1>hej</h1>
  <!-- <ul v-if="myPlants.length !== 0">
    <li :key="plant.name" v-for="plants in myPlants" />
  </ul> -->
</template>

<style></style>
