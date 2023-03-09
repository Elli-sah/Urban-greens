<script>
  import MyShelf from '../components/MyShelf.vue'
  import MyWeather from '../components/MyWeather.vue'
  import AddOwnPlant from '../components/AddOwnPlant.vue'
  import CalendarComponent from '../components/CalendarComponent.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      MyShelf,
      MyWeather,
      AddOwnPlant,
      CalendarComponent
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
    <h1>{{ loggedInUser.name }}s fönsterbräda</h1>
    <div id="image-container">
      <img
        id="window-image"
        src="../../assets/annie-spratt-S7viz8JWxwY-unsplash.jpg"
        alt="Fönsterbräda"
      />
    </div>
    <MyWeather />
    <div id="my-shelf-view">
      <MyShelf />
      <AddOwnPlant />
    </div>
    <CalendarComponent />
  </div>
</template>

<style lang="scss">
  #image-container {
    display: flex;
    width: 100%;
    margin: auto;
    background-color: white;
    border-radius: 5px;
  }

  #window-image {
    margin: auto;
    padding: 10px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  #my-shelf-view {
    margin-top: 50px;
  }

  @media (min-width: 700px) {
    #image-container {
      display: none;
    }
  }
</style>
