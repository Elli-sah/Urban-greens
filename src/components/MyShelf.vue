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
  <div id="plantShelfBox" v-if="myPlants.length !== 0">
    <div class="shelf-plants" :key="plant.name" v-for="plant in myPlants">
      <img :src="plant.image" :alt="plant.name" />
      <div class="descriptionBox">
        <h2>{{ plant.name }}</h2>
        <p>* {{ plant.placement.short }}</p>
        <p>* {{ plant.watering.short }}</p>
        <p>* {{ plant.temperature.short }}</p>
      </div>
      <button>X</button>
    </div>
  </div>
</template>

<style scoped>
  #plantShelfBox {
    display: flex;
    flex-direction: column;
    margin: auto;
    width: 95%;
  }
  .shelf-plants {
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    margin-bottom: 20px;
    background-color: white;
  }
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
  }

  .descriptionBox {
    margin-left: 10px;
  }

  button {
    align-self: flex-end;
    height: 40px;
    width: 40px;
  }
</style>
