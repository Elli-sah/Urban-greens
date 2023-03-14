<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      plant: { required: true, type: Object }
    },
    data() {
      return {
        tip: ''
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser,
        plantTips: (state) => state.plantTip,
        specifikPlant: (state) => state.plantTips,
        isAdmin: (state) => state.users[state.loggedInUser.user]?.isAdmin
      })
    },

    methods: {
      // Lägg till en kommentar
      onSubmit(event) {
        this.$store.commit('setPlantTip', {
          id: this.plant.id,
          tip: this.tip,
          user: this.loggedInUser.user,
          name: this.loggedInUser.name
        })
        event.preventDefault()
        this.tip = ''
      },
      // Ta bort en kommentar
      removePlantTip(id, index) {
        this.$store.commit('removePlantTip', {
          id,
          index
        })
      }
    },
    created() {
      console.log(this.specifikPlant)
    }
  }
</script>

<template>
  <div class="container">
    <div class="tip-box">
      <h2>Ge dina bästa tips för att ta hand om {{ plant.name }}</h2>

      <form>
        <textarea
          id="text"
          v-model="tip"
          style="text-align: left; vertical-align: top"
        />
        <input
          class="button"
          @click="onSubmit"
          :disabled="tip.length === 0"
          type="button"
          value="Skicka"
        />
      </form>
      <div id="scroll">
        <div v-if="specifikPlant[plant.id]">
          <h3 id="tip">Alla växttips</h3>
          <div
            class="tips-div"
            v-for="(plantTip, index) in specifikPlant[plant.id].tips"
            :key="plantTip"
          >
            <div>
              <h4 class="tips-heading">{{ plantTip.name }} säger:</h4>
              <p>
                {{ plantTip.tip }}
              </p>
            </div>

            <i
              v-if="isAdmin || plantTip.user === loggedInUser.user"
              @click="removePlantTip(plant.id, index)"
              id="remove-icon"
              class="bi bi-x-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  form {
    text-align: center;
    margin-top: 20px;
  }

  #tip {
    text-align: left;
  }
  .tips-div {
    background-color: #e8cac3c1;
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }

  .tips-heading {
    text-align: left;
  }

  #text {
    width: 80%;
    height: 100px;
    box-shadow: 0px 2px 4px rgba(38, 38, 38, 0.1);
    border: 2px solid grey;
    vertical-align: top;
  }
  #remove-icon {
    cursor: pointer;
  }

  input {
    margin: 20px;
  }

  #scroll {
    height: 350px;
    overflow-y: scroll;
    position: absolut;
    display: block;
  }

  .container {
    display: flex;
    justify-content: center;
    width: 80%;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 30px;
  }
  .tip-box {
    text-align: left;
    padding: 20px 20px 20px 20px;
  }
</style>
