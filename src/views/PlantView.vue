<script>
  import axios from 'axios'
  import { mapState } from 'vuex'

  export default {
    props: {
      name: { type: String, required: true }
    },
    data() {
      return {
        plant: null,
        showText: false,
        slide: 0
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
    },
    toggleText() {
      this.showText = !this.showText
    }
  }
</script>

<template>
  <h1>Om</h1>
  <div class="plantBox">
    <div id="ccc">
      <b-carousel class="carousel" v-model="slide" indicators>
        <b-carousel-slide
          v-for="(image, index) in plant.image"
          :key="index"
          :img-src="image"
        />
      </b-carousel>
    </div>

    <!-- <hr class="line" /> -->
    <!-- <hr style="height: 1px; background: #000; color: #000" /> -->

    <h1>{{ plant.name }}</h1>

    <h3>{{ plant.latin }}</h3>
    <hr class="line" />
    <div class="plantDesc">
      <!-- <i class="bi bi-brightness-high" />
      <p>Ljusbehov: {{ plant.placement.short }}</p> -->
      <!-- <i class="bi bi-thermometer-low" />
      <p>Temperatur: {{ plant.temperature.short }}</p> -->
    </div>
    <div class="plantDesc">
      <!-- <i class="bi bi-moisture" />
      <p>Vatten: {{ plant.watering.short }}</p> -->
      <!-- <i class="bi bi-flower1" />
      <p>Näring:{{ plant.fertilization.short }}</p> -->

      <div class="plantPlace">
        <button @click="toggleText" />
        <p v-if="showText">{{ plant.description }}</p>
        <i class="bi bi-brightness-high" />
        <p>Ljusbehov: {{ plant.placement.short }}</p>
      </div>
      <div class="plantTemp">
        <i class="bi bi-thermometer-low" />
        <p>Temperatur: {{ plant.temperature.short }}</p>
      </div>
    </div>
    <div class="plantDescTwo">
      <div class="plantWater">
        <i class="bi bi-moisture" />
        <p>Vatten: {{ plant.watering.short }}</p>
      </div>
      <div class="plantFert">
        <i class="bi bi-flower1" />
        <p>Näring:{{ plant.fertilization.short }}</p>
      </div>
    </div>
    <button class="button" @click="atAddPlant">
      Lägg till på fönsterbrädan
    </button>
  </div>
  <div class="secondPlantBox">
    <h2>Mer information</h2>
    <p>{{ plant.description }}</p>
  </div>
</template>

<style>
  .plantBox {
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
  }
  .secondPlantBox {
    width: 400px;
    /* height: 600px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
    padding: 20px;
  }

  #ccc {
    width: 200px;
    height: 200px;
  }

  img {
    object-fit: cover;
  }

  .plantDesc {
    display: flex;
    /* justify-content: flex-start; */
    flex-direction: row;
  }

  .plantDescTwo {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  .line {
    border-style: 1px solid rgba(0, 0, 0, 0.15);
  }

  .plantPlace {
    display: flex;
  }

  .plantTemp {
    display: flex;
  }

  .plantWater {
    display: flex;
  }

  .plantWater {
    display: flex;
  }
</style>
