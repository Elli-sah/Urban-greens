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
      return { Addedplant: false, NotLoggedIn: false }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
    },
    methods: {
      addPlant() {
        if (this.loggedInUser !== '') {
          this.$store.commit('addPlant', {
            user: this.loggedInUser.user,
            addplant: this.plant
          })
          this.Addedplant = true
        } else {
          this.NotLoggedIn = true
        }
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
    <div class="popup-divs" v-show="Addedplant">Tillagd på fönsterbrädan!</div>
    <div class="popup-divs" v-show="NotLoggedIn">
      <i class="bi bi-x" />
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
</template>

<style lang="scss" scoped>
  .plantBox {
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
    top: -4px;
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
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 10px;
    background-color: darkred;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.1);
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
