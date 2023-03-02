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
        selectedIcon: null,
        Addedplant: false,
        NotLoggedIn: false,
        AlreadyAddedplant: false
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser,
        userFavorites: (state) => {
          if (state.loggedInUser) {
            return state.users[state.loggedInUser.user]?.favorites || []
          } else {
            return []
          }
        }
      })
    },
    methods: {
      axiosGetPlants() {
        axios.get('/plants.json').then((response) => {
          this.plant = response.data.filter(
            (plant) => plant.name === this.name
          )[0]
          console.log('rad 34', this.plant)
        })
      },
      // atAddPlant() {
      //   this.$store.commit('addPlant', {
      //     user: this.loggedInUser.user,
      //     addplant: this.plant
      //   })
      atAddPlant() {
        if (this.loggedInUser !== '') {
          if (
            this.userFavorites.find((plant) => plant.name === this.plant.name)
          ) {
            this.AlreadyAddedplant = true
            setTimeout(() => {
              this.AlreadyAddedplant = false
            }, 3000)
          } else {
            this.$store.commit('addPlant', {
              user: this.loggedInUser.user,
              addplant: this.plant
            })
            this.Addedplant = true
            setTimeout(() => {
              this.Addedplant = false
            }, 3000)
          }
        } else {
          this.NotLoggedIn = true
        }
      },
      onClick() {
        this.NotLoggedIn = false
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
    },

    watch: {
      '$route.params'() {
        this.axiosGetPlants()
      }
    }
  }

  // toggleText() {
  //   this.showText = !this.showText
  // }
</script>

<template>
  <div v-if="plant" class="view-divs">
    <!-- <div v-if="plant !== null" class="bigPlantBox"> -->
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
                  class="bi bi-brightness-high icons-hover"
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
                  class="bi bi-thermometer-low icons-hover"
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
                  class="bi bi-moisture iconsize icons-hover"
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
                  class="bi bi-flower1 icons-hover"
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
            <div class="popup-divs" v-show="Addedplant">
              <p class="paragraph added-paragraph">
                {{ plant.name }} är tillagd på din fönsterbräda!
              </p>
            </div>
            <div class="popup-divs" v-show="AlreadyAddedplant">
              <p class="paragraph added-paragraph">
                Du har redan lagt till {{ plant.name }} på din fönsterbräda!
              </p>
            </div>
            <div class="popup-divs" v-show="NotLoggedIn">
              <i @click="onClick" class="bi bi-x-lg" />
              <div id="login-div">
                <p>Du behöver logga in först</p>
                <b-button
                  variant="link"
                  to="/login"
                  type="button"
                  id="button-secondary"
                  class="btn btn-link"
                  >Logga in här!</b-button
                >
              </div>
            </div>
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
      <!-- <div class="boxes"> -->
      <div class="moreInfo">
        <h2 id="more-info-heading">Mer information</h2>
        <p id="more-info-text">{{ plant.description }}</p>
        <!-- </div> -->
      </div>
      <!-- <div class="boxes"> -->
      <div class="textBox">
        <div class="prunBugDesc">
          <div class="pruning">
            <h5 class="heading">Beskärning</h5>
            <i class="bi bi-scissors" />
          </div>

          <p>{{ plant.pruning }}</p>
        </div>
        <div class="prunBugDesc">
          <div class="bug">
            <h5 class="heading">Skadedjur</h5>
            <i class="bi bi-bug" />
          </div>
          <p>{{ plant.pests }}</p>
        </div>
      </div>
      <!-- </div> -->
    </div>
  </div>
  <!-- </div> -->
</template>

<style scoped>
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
  .popup-divs {
    background-color: #c8c8c8;
    border-radius: 10px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 200px;
    top: 60%;
    /* right: 10%; */
    /* right: 100px; */
  }

  i {
    align-self: flex-end;
  }

  .moreInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
    flex-direction: column;
    text-align: center;

    display: flex;
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
    /* display: flex;
    justify-content: center; */
    width: 300px;
    height: 300px;
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
    width: 50%;
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
  /* .pruningDesc {
    margin-top: 10px;
  } */

  @media (min-width: 600px) {
    .carouselImg {
      object-fit: cover;
      /* min-width: 350px; */
      width: 450px;
      height: 450px;
      /* height: 60vh; */
    }
    #ccc {
      width: 450px;
      height: 450px;
      display: flex;
      justify-content: center;
      /* height: 20vh; */
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
    .popup-divs {
      background-color: #c8c8c8;
      border-radius: 10px;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 200px;
      right: 25%;
      top: 70%;
    }
    .plantDesc {
      display: flex;
      flex-direction: row;
      margin: 10px;
    }
    .secondText {
      flex-direction: row;
      display: flex;
      justify-content: space-around;
    }
    .line {
      border-style: 1px solid rgba(0, 0, 0, 0.15);
      /* width: 90%; */
    }
    /* .heading {
      font-size: 16px;
    } */

    .moreInfo {
      display: flex;
      justify-content: center;
      width: 50%;
      align-items: center;
      flex-direction: column;
    }

    .textBox {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 40%;
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
    .prunBugDesc {
      text-align: center;
      max-width: 500px;
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
    /* #ccc {
      width: 600px;
      height: 600px;
    }
    .carouselImg {
      width: 600px;
      height: 600px;
    } */
    /* .heading {
      font-size: 16px;
    } */
  }
  @media only screen and (max-width: 1600px) and (min-width: 1200px) {
    /* .carouselImg {
      width: 500px;
      height: 500px;
    }
    #ccc {
      width: 500px;
      height: 500px;
    } */
    .line {
      border-style: 1px solid rgba(0, 0, 0, 0.15);
      /* width: 90%; */
    }

    #more-info-text {
      width: 300px;
    }
    #more-info-heading {
      width: 300px;
    }
    .pruning {
      margin-top: 20px;
    }

    /* .moreInfo {
      padding: 0;
      width: 50%;
    } */
    /* .textBox {
      display: flex;
      justify-content: center;
      width: 400px;
    } */
    .pruningDesc {
      width: 300px;
    }
    .bugDesc {
      width: 300px;
    }
    .secondPlantBox {
      display: flex;
    }
    .popup-divs {
      background-color: #c8c8c8;
      border-radius: 10px;
      position: absolute;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      top: 70%;
      right: 100px;
    }
  }
</style>
