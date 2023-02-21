<script>
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    props: {
      name: { type: String, required: true }
    },
    data() {
      return {
        plant: null
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
      // selectedPlant() {
      //   return this.result.filter((plant) => plant.name === this.name)
      // }
    },
    methods: {
      axiosGetPlants() {
        axios.get('/plants.json').then((response) => {
          this.plant = response.data.filter(
            (plant) => plant.name === this.name
          )[0]
          console.log(this.plant)
        })
      },
      atAddPlant() {
        this.$store.commit('addPlant', {
          user: this.loggedInUser.user,
          addplant: this.plant
        })
        console.log(this.plant)
      }
    },
    created() {
      this.axiosGetPlants()
    }
  }
</script>

<template>
  <h1>Om</h1>
  <div class="plantBox">
    <img class="image" :src="plant.image" />
    <!-- <hr class="line" /> -->
    <!-- <hr style="height: 1px; background: #000; color: #000" /> -->

    <h1>{{ plant.name }}</h1>
    <h2>{{ plant.latin }}</h2>
    <hr />
    <div class="plantDesc">
      <p>Ljusbehov: {{ plant.placement.short }}</p>
      <p>Temperatur: {{ plant.temperature.short }}</p>
    </div>
    <div class="plantDesc">
      <p>Vatten: {{ plant.watering.short }}</p>
      <p>Näring:{{ plant.fertilization.short }}</p>
    </div>
    <button class="button" @click="atAddPlant">
      Lägg till på fönsterbrädan
    </button>
  </div>
</template>

<style>
  .plantBox {
    width: 500px;
    height: 700px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 10px;

    object-fit: cover;
  }

  .plantDesc {
    display: flex;
    justify-content: flex-start;
  }

  hr {
    border-style: 1px solid rgba(0, 0, 0, 0.15);
  }
</style>
