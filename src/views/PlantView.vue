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
  <!-- <div v-if="plant !== null" class="bigPlantBox"> -->
  <div v-if="plant !== null" class="plantBox">
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
    <div class="plantName">
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
      <button class="button" @click="atAddPlant">Ställ på fönsterbrädan</button>
      <ShowPlant
        v-if="selectedPlant"
        :selected-plant="selectedPlant"
        :plant-heading="plantHeading"
        :long-description="longDescription"
        @close="closeModal"
      />
    </div>
  </div>
  <!-- </div> -->
  <div class="secondPlantBox">
    <div class="info">
      <h2>Mer information</h2>
      <div class="moreInfo">
        <p>{{ plant.description }}</p>
      </div>
    </div>
    <div class="textBox">
      <div class="pruningDesc">
        <div class="pruning">
          <p class="heading">Beskärning</p>
          <i class="bi bi-scissors" />
        </div>

        <p>{{ plant.pruning }}</p>
      </div>
      <div class="bugDesc">
        <div class="bug">
          <p class="heading">Skadedjur</p>
          <i class="bi bi-bug" />
        </div>
        <p>{{ plant.pests }}</p>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
  /* .bigPlantBox {
    display: flex;
    justify-content: center;
  } */
  .plantBox {
    width: 90%;
    padding: 20px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* justify-content: space-around; */
    background-color: white;
    margin: auto;
    border-radius: 10px;
    width: 350px;
    margin-top: 10px;
  }
  .plantName {
    flex-direction: column;
    text-align: center;
  }

  .plantBoxText {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  }

  .plantContainer {
    display: flex;
    flex-direction: column;
  }
  .secondPlantBox {
    width: 90%;
    padding: 45px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    margin: auto;
    border-radius: 10px;
    margin-top: 10px;
    width: 350px;
    padding: 80px;
    margin-bottom: 10px;
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
    width: 400px;
  }

  .bi {
    margin: 10px;
  }
  .plantPlace {
    display: flex;
    flex-direction: row;
    align-items: center;
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
    display: flex;
    text-align: center;
  }

  .pruning {
    text-align: center;
  }
  .bug {
    text-align: center;
  }
  .pruningDesc {
    margin-top: 10px;
  }
  /* .heading {
    font-size: 15px;
  } */

  @media (min-width: 950px) {
    /* .plantBoxText {
      display: flex;
      justify-content: row;
      width: 100%;
    } */
    .plantDesc {
      display: flex;
      flex-direction: row;
      margin: 10px;
    }
    .info {
      text-align: center;
      margin-bottom: 20px;
      /* display: flex;
      justify-content: center; */
    }
    .moreInfo {
      max-width: 500px;
      text-align: center;
    }
    .carouselImg {
      object-fit: cover;
      width: 600px;
      height: 600px;
    }

    .textBox {
      display: flex;
      flex-direction: row;
    }

    .plantDescTwo {
      display: flex;
      flex-direction: row;
      margin: 10px;
    }
    .plantBox {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      width: 80%;
    }

    .bugDesc {
      /* width: 500px; */
      text-align: center;
      margin: 10px;
      max-width: 500px;
    }
    .pruningDesc {
      max-width: 500px;
      text-align: center;
      margin: 10px;
    }

    .bigPlantBox {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
    }
    .secondPlantBox {
      height: 50%;
      width: 80%;
      display: flex;
      /* justify-content: flex-end; */
      /* max-width: 500px; */
    }
    .plantPlace {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 10px;
    }

    .plantTemp {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 10px;
    }

    .plantWater {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 10px;
    }

    .plantFert {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 10px;
    }

    #ccc {
      width: 600px;
      height: 600px;
    }
    .heading {
      font-size: 16px;
    }
  }
  @media only screen and (max-width: 1200px) and (min-width: 950px) {
    .carouselImg {
      object-fit: cover;
      width: 400px;
      height: 400px;
    }
    #ccc {
      width: 400px;
      height: 400px;
    }
  }
  /* @media (min-width: 1200px) {
    #ccc {
      width: 400px;
      height: 400px;
    }

    .carouselImg {
      object-fit: cover;
      width: 400px;
      height: 400px;
    }
  } */
</style>
