<script>
  import axios from 'axios'
  import { mapState } from 'vuex'
  import ShowPlant from '../components/ShowPlant.vue'

  export default {
    components: { ShowPlant },
    props: {
      name: { type: String, required: true }
    },
    data() {
      return {
        plant: null,
        longDescription: '',
        plantHeading: '',
        plantdescription: '',
        plantplacement: '',
        showText: false,
        slide: 0,
        selectedPlant: null,
        selectedIcon: null
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
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
      },
      openModal(plant, plantHeading, description) {
        this.selectedPlant = plant
        this.plantHeading = plantHeading
        this.longDescription = description

        document.body.style.overflow = 'hidden'
      },
      closeModal() {
        this.selectedPlant = null
        document.body.style.overflow = 'auto'
      }
    },

    created() {
      this.axiosGetPlants()
    }
    // toggleText() {
    //   this.showText = !this.showText
    // }
  }
</script>

<template>
  <div class="plantBox">
    <div id="ccc">
      <b-carousel v-model="slide" indicators>
        <b-carousel-slide
          class="carouselImg"
          v-for="(image, index) in plant.image"
          :key="index"
          :img-src="image"
        />
      </b-carousel>
    </div>

    <h1>{{ plant.name }}</h1>

    <h3>{{ plant.latin }}</h3>
    <hr class="line" />
    <div class="plantContainer">
      <div class="plantDesc">
        <div class="plantPlace">
          <i
            @click="
              openModal(
                plant,
                plant.placement.plantHeading,
                plant.placement.description
              )
            "
            class="bi bi-brightness-high"
            style="font-size: 2em"
          />

          <p class="shortText">{{ plant.placement.short }}</p>
          <div>
            <!-- <p v-show="showText">{{ plant.placement }}</p> -->
          </div>

          <!-- <p v-if="showText">{{ plant.description }}</p> -->
        </div>
        <div class="plantTemp">
          <i
            @click="
              openModal(
                plant,
                plant.temperature.plantHeading,
                plant.temperature.description
              )
            "
            class="bi bi-thermometer-low"
            style="font-size: 2em"
          />

          <p class="shortText">{{ plant.temperature.short }}</p>
        </div>
      </div>
      <div class="plantDescTwo">
        <div class="plantWater">
          <i
            @click="
              openModal(
                plant,
                plant.watering.plantHeading,
                plant.watering.description
              )
            "
            class="bi bi-moisture iconsize"
            style="font-size: 2em"
          />
          <p class="shortText">{{ plant.watering.short }}</p>
        </div>
        <div class="plantFert">
          <i
            @click="
              openModal(
                plant,
                plant.fertilization.plantHeading,
                plant.fertilization.description
              )
            "
            class="bi bi-flower1"
            style="font-size: 2em"
          />

          <p class="shortText">{{ plant.fertilization.short }}</p>
        </div>
      </div>
    </div>
    <button class="button" @click="atAddPlant">
      Lägg till på fönsterbrädan
    </button>
    <ShowPlant
      v-if="selectedPlant"
      :selected-plant="selectedPlant"
      :plant-heading="plantHeading"
      :long-description="longDescription"
      @close="closeModal"
    />
  </div>
  <div class="secondPlantBox">
    <h2>Mer information</h2>

    <p>{{ plant.description }}</p>
    <p class="heading">Beskärning</p>
    <p>{{ plant.pruning }}</p>
    <p class="heading">Skadedjur</p>
    <p class="heading">{{ plant.pests }}</p>
  </div>
</template>

<style scoped>
  .plantBox {
    width: 90%;
    padding: 45px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    margin: auto;
    border-radius: 10px;
  }

  .plantContainer {
    display: flex;
    flex-direction: column;
  }
  .secondPlantBox {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    margin: auto;
    margin-top: 20px;
    border-radius: 10px;
    padding: 20px;
  }

  #ccc {
    width: 300px;
    height: 300px;
  }

  .carouselImg {
    object-fit: cover;
    width: 300px;
    height: 300px;
  }

  .plantDesc {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .plantDescTwo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .line {
    border-style: 1px solid rgba(0, 0, 0, 0.15);
    width: 300px;
  }

  .bi {
    margin: 5px;
  }
  .plantPlace {
    display: flex;
    flex-direction: row;
    align-items: center;
    /* justify-content: space-around; */
  }

  .plantTemp {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .plantWater {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .plantFert {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .shortText {
    margin-left: 50px;
  }

  .heading {
    font-weight: bold;
  }

  /* .iconsize {
    width: 20%;
    height: 20%;
  } */ ;
</style>
