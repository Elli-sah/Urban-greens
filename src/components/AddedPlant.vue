<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      addedPlant: { required: true, type: String },
      plant: { required: true, type: Object },
      loggIn: { required: true, type: String },
      loggInHere: { required: true, type: String }
    },

    data() {
      return {
        Addedplant: false,
        NotLoggedIn: false,
        AlreadyAddedplant: false,
        plantTip: ''
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
      atAddPlant() {
        console.log('hej')
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
      }
    }
  }
</script>

<template>
  <button class="button" @click="atAddPlant">{{ addedPlant }}</button>

  <div id="popup.container">
    <div class="popup-divs" v-show="Addedplant">
      <p class="paragraph added-paragraph">
        {{ plantName }} är tillagd på din fönsterbräda!
      </p>
    </div>
    <div class="popup-divs" v-show="AlreadyAddedplant">
      <p class="paragraph added-paragraph">
        Du har redan lagt till {{ plantName }} på din fönsterbräda!
      </p>
    </div>
    <div class="popup-divs" v-show="NotLoggedIn">
      <i @click="onClick" class="bi bi-x-lg" />
      <div id="login-div">
        <p>{{ loggIn }}</p>
        <b-button
          variant="link"
          to="/login"
          type="button"
          id="button-secondary"
          class="btn btn-link"
          >{{ loggInHere }}</b-button
        >
      </div>

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
          <p>{{ loggIn }}</p>
          <b-button
            variant="link"
            to="/login"
            type="button"
            id="button-secondary"
            class="btn btn-link"
            >{{ loggInHere }}</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  #popup-container {
    position: relative;
  }

  .popup-divs {
    background-color: #c8c8c8;
    border-radius: 10px;
    bottom: 15px;
    left: 40px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
</style>
