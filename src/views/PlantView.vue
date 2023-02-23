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
        plantheading: '',
        plantdescription: '',
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
      openModal(plant, plantdescription, description) {
        this.selectedPlant = plant
        this.plantheading = plantdescription
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
    <div class="plantDesc">
      <div class="plantPlace">
        <i
          @click="
            openModal(
              plant,
              plant.placement.plantdescription,
              plant.placement.description
            )
          "
          class="bi bi-brightness-high"
        />

        <p @click="toggleText">{{ plant.placement.short }}</p>
        <div>
          <!-- <p v-show="showText">{{ plant.placement }}</p> -->
        </div>

        <!-- <p v-if="showText">{{ plant.description }}</p> -->
      </div>
      <div class="plantTemp">
        <i
          @click="openModal(plant, plant.temperature.description)"
          class="bi bi-thermometer-low"
        />

        <div>
          <p @click="toggleText">{{ plant.temperature.short }}</p>
        </div>
      </div>
    </div>
    <div class="plantDescTwo">
      <div class="plantWater">
        <i
          @click="openModal(plant, plant.watering.description)"
          class="bi bi-moisture"
        />
        <p>{{ plant.watering.short }}</p>
      </div>
      <div class="plantFert">
        <i
          @click="openModal(plant, plant.fertilization.description)"
          class="bi bi-flower1"
        />
        <p>{{ plant.fertilization.short }}</p>
      </div>
    </div>
    <button class="button" @click="atAddPlant">
      Lägg till på fönsterbrädan
    </button>
    <ShowPlant
      v-if="selectedPlant"
      :selected-plant="selectedPlant"
      :plant-heading="plantheading"
      :long-description="longDescription"
      @close="closeModal"
    />
  </div>
  <div class="secondPlantBox">
    <h2>Mer information</h2>
    <p>{{ plant.description }}</p>
  </div>
</template>

<style>
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

  .plantPlace {
    display: flex;
  }

  .plantTemp {
    display: flex;
  }

  .plantWater {
    display: flex;
  }

  .plantFert {
    display: flex;
  }
</style>
