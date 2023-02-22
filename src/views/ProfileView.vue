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
  <div class="view-divs">
    <h1>Här är din fönsterbräda, {{ loggedInUser.name }}!</h1>
    <MyShelf />
  </div>
</template>

<style lang="scss"></style>
