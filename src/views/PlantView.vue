<script>
  import axios from 'axios'

  import ShowPlant from '../components/ShowPlant.vue'
  import MyBestTips from '../components/MyBestTips.vue'
  // import LogIn from '../components/LogIn.vue'

  import PlantIcon from '../components/PlantIcon.vue'
  // import InlogModal from '../components/InlogModal.vue'
  import MoreInfoPlant from '../components/MoreInfoPlant.vue'
  import AddedPlant from '../components/AddedPlant.vue'

  export default {
    components: {
      ShowPlant,
      MyBestTips,

      // LogIn,

      PlantIcon,
      // InlogModal
      MoreInfoPlant,
      AddedPlant
    },
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
        selectedIcon: null,
        Addedplant: false,
        NotLoggedIn: false,
        AlreadyAddedplant: false,
        plantTip: '',
        isEasy: false,
        isMid: false,
        isHard: false,
        poisonist: false,
        noPoison: false,
        hover: false,
        modal: false
      }
    },

    methods: {
      axiosGetPlants() {
        axios.get('/plants.json').then((response) => {
          this.plant = response.data.filter(
            (plant) => plant.name === this.name
          )[0]
          console.log('rad 34', this.plant)
          // Funktion för att kontrollera svårighetsgrad
          if (this.plant.difficulty === 'Lätt') {
            this.isEasy = true
          } else if (this.plant.difficulty === 'Medel') {
            this.isMid = true
          } else {
            this.isHard = true
          }
          // Funktion för att visa om plantan är giftig
          if (this.plant.poison.short === true) {
            this.poisonist = true
          } else {
            this.noPoison = true
          }
          console.log(this.plant)
        })
      },

      openModal(modalInfo) {
        this.selectedPlant = this.plant
        this.plantHeading = this.plant[modalInfo].title
        this.longDescription = this.plant[modalInfo].description
        document.body.style.overflow = 'hidden'
      },
      closeModal() {
        this.selectedPlant = null
        this.NotLoggedIn = false
        document.body.style.overflow = 'auto'
      }
    },
    mounted() {
      this.axiosGetPlants()
    },

    watch: {
      '$route.params'() {
        this.axiosGetPlants()
      }
    }
  }
</script>

<template>
  <div v-if="plant" class="view-divs">
    x
    <div class="plantBox">
      <div id="ccc">
        <b-carousel
          v-model="slide"
          interval="3000"
          controls
          indicators
          ride="carousel"
        >
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
          <div
            id="poison-parent"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <p v-show="poisonist">Denna växt är giftig</p>

            <p class="description" v-if="hover" v-show="poisonist">
              {{ plant.poison.description }}
            </p>
          </div>
          <p v-show="noPoison">Denna växt är inte giftig</p>

          <p id="easy-p" v-show="isEasy">
            Svårighetsgrad: {{ plant.difficulty }}
            <span class="spans" style="background-color: green" />
          </p>
          <p id="mid-p" v-show="isMid">
            Svårighetsgrad: {{ plant.difficulty }}
            <span class="spans" style="background-color: orange" />
          </p>
          <p id="hard-p" v-show="isHard">
            Svårighetsgrad: {{ plant.difficulty }}
            <span class="spans" style="background-color: red" />
          </p>

          <hr class="line" />
          <div class="plantContainer">
            <div class="plantDesc">
              <PlantIcon
                css-icon="bi bi-brightness-high icons-hover"
                icon-title="Placering"
                :icon-short="plant.placement.short"
                modal-info="placement"
                @open="openModal"
              />

              <PlantIcon
                css-icon="bi bi-thermometer-low icons-hover"
                icon-title="Temperatur"
                :icon-short="plant.temperature.short"
                modal-info="temperature"
                @open="openModal"
              />
            </div>
            <div class="plantDescTwo">
              <PlantIcon
                css-icon="bi bi-moisture icons-hover"
                icon-title="Bevattning"
                :icon-short="plant.watering.short"
                modal-info="watering"
                @open="openModal"
              />
              <PlantIcon
                css-icon="bi bi-flower1 icons-hover"
                icon-title="Näring"
                :icon-short="plant.fertilization.short"
                modal-info="fertilization"
                @open="openModal"
              />
            </div>

            <AddedPlant
              added-plant="Ställ på fönsterbrädan"
              :plant-name="plant.name"
              logg-in="Du behöver logga in först"
              logg-in-here="Logga in här!"
            />
          </div>
        </div>
        <ShowPlant
          v-if="selectedPlant"
          :selected-plant="Placering"
          :plant-heading="plantHeading"
          :long-description="longDescription"
          @close="closeModal"
        />
      </div>
    </div>

    <div class="secondPlantBox">
      <MoreInfoPlant
        more-info="Mer information"
        :plant-description="plant.description"
        pruning-heading="Beskärning"
        :pruning-info="plant.pruning"
        bug-heading="Skadedjur"
        :bug-info="plant.pests"
      />
    </div>
  </div>
  <MyBestTips v-if="plant" :plant="plant" />
</template>

<style scoped>
  #poison-parent {
    position: relative;
    cursor: pointer;
  }
  .description {
    position: absolute;
    padding: 10px;
    font-size: 0.8rem;
    background-color: #f0e8e2;
    z-index: 1;
    /* box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.1); */
  }
  .icons-hover {
    font-size: 10rem;
    transition: transform 0.2s ease-in-out;
  }
  .icons-hover:hover {
    transform: scale(1.5);
  }
  #login-div {
    margin: 5px;
  }

  i {
    align-self: flex-end;
  }

  .plantBox {
    width: 100%;
    padding: 20px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* justify-content: space-around; */
    background-color: white;
    margin: auto;
    border-radius: 10px;
    margin-top: 50px;
  }
  .plantShortInfo {
    /* flex-direction: column; */
    text-align: center;

    /* display: flex; */
    justify-content: center;
  }

  .plantContainer {
    text-align: center;
    position: relative;
  }
  .secondPlantBox {
    width: 100%;
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

  #ccc {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
  }
  .carouselImg {
    object-fit: cover;

    width: 300px;
    height: 300px;
  }

  .spans {
    margin-left: 5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
  }
  .plantDesc {
    display: flex;
    flex-direction: column;
  }
  .plantDescTwo {
    display: flex;
    flex-direction: column;
  }
  .line {
    border-style: 1px solid rgba(0, 0, 0, 0.15);
    width: 100%;
  }

  #plantInfoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  @media (min-width: 600px) {
    .carouselImg {
      object-fit: cover;
      width: 450px;
      height: 450px;
    }
    #ccc {
      width: 450px;
      height: 450px;
      display: flex;
      justify-content: center;
    }
  }
  /* @media (min-width: 900px) {
    .plantBox {
      display: flex;

      flex-direction: row;
      width: 80%;
    }
    #ccc {
      width: 70vw;
    }
    .carouselImg {
      object-fit: cover;
      width: 400px;
      height: 350px;
    }
    .secondPlantBox {
      height: 50%;
      width: 80%;
      display: flex;
    }
  } */

  @media (min-width: 1200px) {
    .plantDesc {
      display: flex;
      flex-direction: row;
      margin: 10px;
    }

    .line {
      border-style: 1px solid rgba(0, 0, 0, 0.15);
    }

    .plantDescTwo {
      display: flex;
      flex-direction: row;
      margin: 10px;
    }
    .plantBox {
      display: flex;
      justify-content: space-between;
      flex-direction: row;
      width: 80%;
    }

    .secondPlantBox {
      height: 50%;
      width: 80%;
      display: flex;
    }
  }
  @media only screen and (max-width: 1600px) and (min-width: 1200px) {
    .line {
      border-style: 1px solid rgba(0, 0, 0, 0.15);
      /* width: 90%; */
    }

    .secondPlantBox {
      display: flex;
    }
  }
</style>
