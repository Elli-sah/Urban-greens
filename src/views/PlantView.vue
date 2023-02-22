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
    <h3>{{ plant.latin }}</h3>
    <hr />
    <div class="plantDesc">
      <i class="bi bi-brightness-high" />
      <p>Ljusbehov: {{ plant.placement.short }}</p>
      <i class="bi bi-thermometer-low" />
      <p>Temperatur: {{ plant.temperature.short }}</p>
    </div>
    <div class="plantDesc">
      <i class="bi bi-moisture" />
      <p>Vatten: {{ plant.watering.short }}</p>
      <i class="bi bi-flower1" />
      <p>Näring:{{ plant.fertilization.short }}</p>
    </div>
    <button class="button" @click="atAddPlant">
      Lägg till på fönsterbrädan
    </button>
  </div>
</template>

<style>
  .plantBox {
    width: 300px;
    height: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
  }

  img {
    width: 200px;
    height: 200px;
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
