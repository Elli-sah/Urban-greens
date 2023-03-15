<script>
  import { mapState } from 'vuex'
  import LogIn from './LogIn.vue'
  export default {
    components: {
      LogIn
    },

    props: {
      addedPlant: { required: true, type: String },
      plant: { required: true, type: Object }
    },

    data() {
      return {
        Addedplant: false,
        AlreadyAddedplant: false,
        plantTip: '',
        modal: false
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
        console.log(this.plant)
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
          this.modal = true
        }
      }
    }
  }
</script>

<template>
  <button class="button" @click="atAddPlant">{{ addedPlant }}</button>

  <div id="popup.container">
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

    <div id="inlog-modal-div">
      <b-modal hide-footer v-model="modal">
        <h1>Du måste logga in först!</h1>
        <LogIn />
      </b-modal>
    </div>
  </div>
</template>

<style scoped>
  #popup-container {
    position: relative;
  }

  .popup-divs {
    background-color: #e8cac3;
    border-radius: 10px;
    bottom: 7px;
    left: 9px;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
</style>
