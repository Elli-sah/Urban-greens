<script>
  import LogIn from '../components/LogIn.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      LogIn
    },

    props: {
      plant: {
        type: Object,
        default: () => ({})
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
        },
        filteredPlants() {
          return this.wishlist.filter((p) => this.isInWishlist(p))
        },
        wishlist: (state) => state.wishlist
      })
    },

    mounted() {
      this.logImageUrls()
    },

    methods: {
      logImageUrls() {
        this.filteredPlants.forEach((plant) => {
          console.log(plant.image)
        })
      },
      addPlant(plant) {
        if (this.loggedInUser !== '') {
          if (this.userFavorites.find((p) => p.name === this.plant.name)) {
            this.alreadyAddedPlant = plant
            this.alreadyAddedplant = true
            setTimeout(() => {
              this.alreadyAddedplant = false
            }, 3000)
          } else {
            this.$store.commit('addPlant', {
              user: this.loggedInUser.user,
              addplant: plant
            })
            this.addedPlant = plant
            this.addedplant = true
            setTimeout(() => {
              this.addedplant = false
            }, 3000)
          }
        } else {
          this.modal = true
        }
      },
      onClick() {
        this.notLoggedIn = false
      },
      closeModal() {
        this.notLoggedIn = false
      },

      removeFromWishlist(plant) {
        this.$store.commit('removeFromWishlist', plant)
      },
      isInWishlist(plant) {
        return this.wishlist.some((p) => p.id === plant.id)
      },
      showDescriptions(plant) {
        this.hoveredCards.push(plant.id)
      },

      hideDescription(plant) {
        const index = this.hoveredCards.indexOf(plant.id)
        if (index !== -1) {
          this.hoveredCards.splice(index, 1)
        }
      },

      isDescriptionVisible(plant) {
        return this.hoveredCards.includes(plant.id)
      },

      routeClick(plant) {
        console.log(plant.id)
        if (plant.id !== undefined) {
          this.$router.push(`/plants/${plant.name}`)
        }
      }
    },
    data() {
      return {
        showModal: false,
        addedPlant: false,
        notLoggedIn: false,
        alreadyAddedPlant: false,
        showDescription: false,
        modal: false,
        hoveredCards: []
      }
    }
  }
</script>

<template>
  <div class="view-divs">
    <div id="header">
      <h1>Önskelista</h1>
    </div>
    <div class="wishlist-box">
      <div
        v-for="wishlistPlant in filteredPlants"
        :key="wishlistPlant.id"
        class="plant-box"
      >
        <div
          id="remove-icon"
          v-if="isInWishlist(wishlistPlant)"
          @click="removeFromWishlist(wishlistPlant)"
        >
          <i id="remove-icon" class="bi bi-x-lg" />
        </div>
        <RouterLink
          :to="`/plants/${wishlistPlant.name}`"
          class="plant-container"
        >
          <img
            v-if="wishlistPlant.image && wishlistPlant.image.length > 0"
            :src="wishlistPlant.image[0]"
            :alt="wishlistPlant.name"
          />
          <h2>{{ wishlistPlant.name }}</h2>
        </RouterLink>

        <img
          class="icon-image"
          @mouseout="hideDescription(wishlistPlant)"
          @mouseover="showDescriptions(wishlistPlant)"
          @click="addPlant(wishlistPlant)"
          src="../../assets/icons8/icons8-potted-plant-100.png"
          alt="potted-plant"
        />
        <p class="description" v-show="isDescriptionVisible(wishlistPlant)">
          Ställ på fönsterbrädan
        </p>

        <div
          class="popup-divs"
          v-show="addedPlant && wishlistPlant.id === addedPlant.id"
        >
          <p class="paragraph added-paragraph">
            {{ wishlistPlant.name }} är tillagd på din fönsterbräda!
          </p>
        </div>
        <div
          class="popup-divs"
          v-show="
            alreadyAddedPlant && wishlistPlant.id === alreadyAddedPlant.id
          "
        >
          <p class="paragraph added-paragraph">
            Du har redan lagt till {{ wishlistPlant.name }} på din fönsterbräda!
          </p>
        </div>

        <div>
          <div id="login-div">
            <div id="inlog-modal-div">
              <b-modal hide-footer v-model="modal">
                <h1>Du måste logga in först!</h1>
                <LogIn />
              </b-modal>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  /* note: navbar behöver justeras för responsivitet eftersom en till sida tillkommit,hamburger tidigare */
  /* hamnar inte i linje med andra h1, men hamnar iaf inte under navbar, tillfällig lösning  */
  #header {
    margin-top: 5px;
  }
  #remove-icon {
    align-self: flex-end;
    cursor: pointer;
    width: max-content;
    margin-right: 5px;
    margin-top: 5px;
  }
  .wishlist-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .plant-box {
    position: relative;
    width: 270px;
    height: 320px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
  }

  .plant-box:hover {
    transition: all 0.3s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.1);
    top: -1px;
  }
  .plant-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    /* margin-top: 20px; */
  }

  .icon-image {
    width: 25px;
    height: 25px;
    object-fit: contain;
    align-self: end;
    margin-right: 8px;
    cursor: pointer;
  }

  .description {
    position: absolute;
    top: 70%;
    left: 80%;
    padding: 10px;
    font-size: 0.6rem;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.1);
  }

  i {
    align-self: flex-end;
  }

  h2 {
    margin-top: 5px;
  }

  .popup-divs {
    width: 95%;
    height: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    background-color: rgba(255, 255, 255, 0.776);
    border-radius: 10px;
    position: absolute;
    top: 5px;
    z-index: 1;
  }

  #login-div {
    padding: 40px;
    position: absolute;
    /* object-fit: cover; */
  }

  #inlog-modal-div {
    /* position: absolute; */
    object-fit: contain;
  }

  .added-paragraph {
    text-align: center;
    margin: auto;
    padding: 40px;
  }

  #button-secondary {
    padding: 0;
  }

  p {
    margin: 0;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: inherit;
  }
</style>
