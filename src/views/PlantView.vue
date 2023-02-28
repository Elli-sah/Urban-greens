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
    <div id="plantInfoContainer">
      <div class="plantShortInfo" v-if="!selectedPlant">
        <h1>{{ plant.name }}</h1>

        <h3>{{ plant.latin }}</h3>

        <hr class="line" />
        <div class="plantContainer">
          <div class="plantDesc">
            <!-- <p>Placering:</p> -->
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

              <div>
                <p class="shortText title">Placering</p>
                <p class="shortText">{{ plant.placement.short }}</p>
              </div>
            </div>
            <!-- <p>Temp:</p> -->
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

              <div>
                <p class="shortText title">Temperatur</p>
                <p class="shortText">{{ plant.temperature.short }}</p>
              </div>
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

              <div>
                <p class="shortText title">Bevattning</p>
                <p class="shortText">{{ plant.watering.short }}</p>
              </div>
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

              <div>
                <p class="shortText title">Näring</p>
                <p class="shortText">{{ plant.fertilization.short }}</p>
              </div>
            </div>
          </div>

          <button class="button" @click="atAddPlant">
            Ställ på fönsterbrädan
          </button>
          <!-- <ShowPlant
            v-if="selectedPlant"
            :selected-plant="selectedPlant"
            :plant-heading="plantHeading"
            :long-description="longDescription"
            @close="closeModal"
          /> -->
        </div>
      </div>
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
  .plantBox {
    width: 70%;
    padding: 20px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* justify-content: space-around; */
    background-color: white;
    margin: auto;
    border-radius: 10px;
    margin-top: 10%;
    /* max-width: 500px;
    min-width: 400px; */
  }
  .plantShortInfo {
    flex-direction: column;
    text-align: center;
    min-width: 300px;
    display: flex;
    justify-content: center;
  }

  /* .plantBoxText {
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
  } */
  .plantContainer {
    text-align: center;
  }
  .secondPlantBox {
    width: 70%;
    padding: 45px 20px 20px 20px;
    background-color: white;
    margin: auto;
    border-radius: 10px;
    margin-top: 10px;
    /* width: 500px; */
    padding: 50px;
    margin-bottom: 50px;
    justify-content: space-between;
    text-align: center;
  }
  /* #ccc {
      width: 40vw;
    }
    .carouselImg {
      object-fit: cover;
      width: 600px;
      height: 600px;
    } */
  #ccc {
    /* min-width: ; */
    width: 40vw;
    /* max-width: 300px;
    max-height: 300px; */
  }
  .carouselImg {
    object-fit: cover;
    /* min-width: 300px; */
    width: 250px;
    height: 250px;
  }
  .plantDesc {
    display: flex;
    /* justify-content: space-around; */
    flex-direction: column;
  }
  .plantDescTwo {
    display: flex;
    flex-direction: column;

    /* justify-content: space-around; */
  }
  .line {
    border-style: 1px solid rgba(0, 0, 0, 0.15);
    width: 300px;
  }
  .bi {
    margin: 10px;
  }
  .plantPlace {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  /* gör en gemensam klass för skötsel och media query för desctop 50% width */
  .plantTemp {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .plantWater {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .plantFert {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  #plantInfoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
  }
  .shortText {
    text-align: center;
    align-items: center;
    width: 100px;
    margin: 0;
    padding: 0;
  }

  .title {
    text-align: center;
  }

  p.title {
    font-weight: bold !important;
    font-size: 16px;
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

  /* .textBox {
    display: flex;
    justify-content: center;
    flex-direction: column;
  } */
  /* .heading {
    font-size: 15px;
  } */
  @media (min-width: 600px) {
    .carouselImg {
      object-fit: cover;
      min-width: 350px;
      height: 350px;
      /* height: 60vh; */
    }
    #ccc {
      width: 40vw;
      /* height: 20vh; */
    }
  }
  @media (min-width: 1000px) {
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

    .line {
      border-style: 1px solid rgba(0, 0, 0, 0.15);
      width: 400px;
    }
    .info {
      text-align: center;
      margin-bottom: 20px;
      display: flex;
      justify-content: left;
      flex-direction: column;
    }
    .moreInfo {
      max-width: 500px;
      text-align: center;
    }

    .textBox {
      display: flex;
      flex-direction: column;
      /* max-width: 400px; */
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
      width: 50%;
      margin: 10px;
    }
    .plantFert {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 50%;
      margin: 10px;
    }
    #ccc {
      width: 40vw;
    }
    .carouselImg {
      object-fit: cover;
      width: 700px;
      height: 700px;
    }
    .heading {
      font-size: 16px;
    }
    /* .carousel-inner {
      width: 50vw;
    } */
  }
  @media only screen and (max-width: 1300px) and (min-width: 1000px) {
    .carouselImg {
      object-fit: cover;
      width: 500px;
      height: 500px;
      /* height: 60vh; */
    }
    #ccc {
      width: 40vw;
      /* height: 20vh; */
    }
    .line {
      border-style: 1px solid rgba(0, 0, 0, 0.15);
      width: 300px;
    }
    .info {
      max-width: 50%;
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
