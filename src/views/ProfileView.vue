<script>
  import MyShelf from '../components/MyShelf.vue'
  import MyWeather from '../components/MyWeather.vue'
  import AddOwnPlant from '../components/AddOwnPlant.vue'
  import LastWatered from '../components/LastWatered.vue'
  import CalendarComponent from '../components/CalendarComponent.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      MyShelf,
      MyWeather,
      AddOwnPlant,
      CalendarComponent,
      LastWatered
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
    <div id="wather-weather">
      <LastWatered />
      <MyWeather />
    </div>
    <div id="image-container">
      <img
        id="window-image"
        src="../../assets/annie-spratt-S7viz8JWxwY-unsplash.jpg"
        alt="Fönsterbräda"
      />
    </div>

    <div id="my-shelf-view">
      <MyShelf />
      <AddOwnPlant />
    </div>
    <CalendarComponent />
  </div>
</template>

<style lang="scss">
  #wather-weather {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 700px;
    height: 220px;
    margin: auto;
  }
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
