<script>
  import MyShelf from '../components/MyShelf.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      MyShelf
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
    }
  }
</script>

<template>
  <h1>Här är din fönsterbräda, {{ loggedInUser.name }}!</h1>
  <MyShelf />
</template>

<style lang="scss"></style>
