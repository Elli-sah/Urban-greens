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
        myPlants: (state) => state.users[state.loggedInUser.user].favorites
      })
    }
  }
</script>

<template>
  <div v-if="myPlants.length !== 0">
    <div class="shelf-plants" :key="plant.name" v-for="plant in myPlants">
      <img :src="plant.image" :alt="plant.name" />
      <h2>{{ plant.name }}</h2>
      <p>{{ plant.placement.short }}</p>
      <p>{{ plant.watering.short }}</p>
      <p>{{ plant.temperature.short }}</p>
    </div>
  </div>
</template>

<style scoped>
  .shelf-plants {
    width: 50%;
    background-color: white;
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }
</style>
