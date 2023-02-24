<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      plant: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return { Addedplant: false, NotLoggedIn: false, AlreadyAddedplant: false }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser,
        userFavorites: (state) => state.users[state.loggedInUser.user].favorites
      })
    },
    methods: {
      addPlant() {
        if (
          this.loggedInUser !== '' &&
          this.userFavorites !== undefined &&
          this.userFavorites.some((plant) => plant.name !== this.plant.name)
        ) {
          this.$store.commit('addPlant', {
            user: this.loggedInUser.user,
            addplant: this.plant
          })
          this.Addedplant = true
          setTimeout(() => {
            this.Addedplant = false
          }, 3000)
        } else if (
          this.userFavorites.some((plant) => plant.name === this.plant.name)
        ) {
          this.AlreadyAddedplant = true
          setTimeout(() => {
            this.AlreadyAddedplant = false
          }, 3000)
        } else {
          this.NotLoggedIn = true
        }
      },
      onClick() {
        this.NotLoggedIn = false
      }
    }
  }
</script>

<template>
  <div class="plantBox">
    <RouterLink :to="`/plants/${plant.name}`" class="plant-container">
      <img alt="plant.name" :src="plant.image[0]" />
      <h2>{{ plant.name }}</h2>
    </RouterLink>
    <i @click="addPlant" class="bi bi-suit-heart-fill" />
    <div class="popup-divs" v-show="Addedplant">
      <p class="added-paragraph">Tillagd på din fönsterbräda!</p>
    </div>
    <div class="popup-divs" v-show="AlreadyAddedplant">
      <p class="added-paragraph">Redan tillagd på din fönsterbräda!</p>
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
</template>

<style lang="scss" scoped>
  .plantBox {
    position: relative;
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
  }

  .plantBox:hover {
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
    // margin-top: 10px;
  }

  i {
    align-self: end;
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
    bottom: 4px;
  }

  #login-div {
    padding: 40px;
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
