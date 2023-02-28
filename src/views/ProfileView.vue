<script>
  import MyShelf from '../components/MyShelf.vue'
  import MyWeather from '../components/MyWeather.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      MyShelf,
      MyWeather
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
    <MyWeather />
    <div id="my-shelf-view">
      <h1>{{ loggedInUser.name }}s fönsterbräda</h1>
      <MyShelf />
    </div>
  </div>
</template>

<style lang="scss">
  #my-shelf-view {
    margin-top: 50px;
  }
</style>
