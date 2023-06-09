<script>
  import { mapState } from 'vuex'
  import LogIn from './LogIn.vue'
  import { mapActions } from 'vuex'

  export default {
    components: {
      LogIn
    },
    //Hämtar "plant" från ListView
    props: {
      plant: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {
        showModal: false,
        addedPlant: false,
        notLoggedIn: false,
        alreadyAddedPlant: false,
        showDescription: false,
        showDescriptionWish: false,
        modal: false,
        addToWishlist: false,
        alreadyAddedToWishlist: false,
        isInWishlist: false
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
      addPlant() {
        if (this.loggedInUser !== '') {
          if (
            this.userFavorites.find((plant) => plant.name === this.plant.name)
          ) {
            this.alreadyAddedPlant = true
            setTimeout(() => {
              this.alreadyAddedPlant = false
            }, 3000)
          } else {
            this.$store.commit('addPlant', {
              user: this.loggedInUser.user,
              addplant: this.plant
            })
            this.addedPlant = true
            setTimeout(() => {
              this.addedPlant = false
            }, 3000)
          }
        } else {
          this.notLoggedIn = true
        }
      },

      addPlantToWishlistFunc() {
        if (this.loggedInUser !== '') {
          if (
            this.userFavorites.find((plant) => plant.name === this.plant.name)
          ) {
            this.alreadyAddedToWishlist = true
            setTimeout(() => {
              this.alreadyAddedToWishlist = false
            }, 3000)
          } else {
            this.$store.commit('addToWishlist', {
              user: this.loggedInUser.user,
              plant: this.plant
            })
            this.addToWishlist = true
            setTimeout(() => {
              this.addToWishlist = false
            }, 3000)
          }
        } else {
          this.showLoginModal()
        }
      },

      // onClick() {
      //   this.notLoggedIn = false
      // },

      // closeModal() {
      //   this.notLoggedIn = false
      // },

      showLoginModal() {
        this.notLoggedIn = true
      },

      hideLoginModal() {
        this.notLoggedIn = false
      },

      addPlantToWishlist(plant) {
        this.addToWishlistAction(plant)
      },

      removePlantFromWishlist(plant) {
        this.removeFromWishlist(plant)
      },

      ...mapActions(['addToWishlistAction', 'removeFromWishlist'])
    }
  }
</script>

<template>
  <div class="plant-box">
    <RouterLink :to="`/plants/${plant.name}`" class="plant-container">
      <img alt="plant.name" :src="plant.image[0]" />
      <h2>{{ plant.name }}</h2>
    </RouterLink>
    <div class="icon-box-card">
      <button v-if="isInWishlist" @click="removePlantFromWishlist(plant)">
        Remove from Wishlist
      </button>
      <div class="wishlist-icon" v-else @click="addPlantToWishlist(plant)">
        <i
          class="bi bi-bookmark-heart"
          @mouseout="showDescriptionWish = false"
          @mouseover="showDescriptionWish = true"
          @click="addPlantToWishlistFunc"
        />
        <p class="description2" v-show="showDescriptionWish">
          Lägg till i önskelistan
        </p>
      </div>
      <div class="popup-divs" v-show="addToWishlist">
        <p class="paragraph added-paragraph">
          {{ plant.name }} är tillagd på din Önskelista!
        </p>
      </div>
      <div class="popup-divs" v-show="alreadyAddedToWishlist">
        <p class="paragraph added-paragraph">
          Du har redan lagt till {{ plant.name }} i din önskelista!
        </p>
      </div>

      <img
        class="icon-image"
        @mouseout="showDescription = false"
        @mouseover="showDescription = true"
        @click="addPlant"
        src="../../assets/icons8/icons8-potted-plant-100.png"
        alt="potted-plant"
      />
      <p class="description" v-show="showDescription">Ställ på fönsterbrädan</p>

      <div class="popup-divs" v-show="addedPlant">
        <p class="paragraph added-paragraph">
          {{ plant.name }} är tillagd på din fönsterbräda!
        </p>
      </div>
      <div class="popup-divs" v-show="alreadyAddedPlant">
        <p class="paragraph added-paragraph">
          Du har redan lagt till {{ plant.name }} på din fönsterbräda!
        </p>
      </div>
      <div>
        <div id="login-div">
          <div id="inlog-modal-div">
            <b-modal hide-footer v-model="notLoggedIn" @hide="hideLoginModal">
              <h1>Du måste logga in först!</h1>
              <LogIn />
            </b-modal>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .icon-box-card {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .wishlist-icon {
    width: 25px;
    height: 25px;
    margin-right: 200px;
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
    margin-top: 20px;
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

  .description2 {
    position: absolute;
    top: 70%;
    right: 80%;
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
    // object-fit: cover;
  }

  #inlog-modal-div {
    // position: absolute;
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
