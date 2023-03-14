<script>
  import { mapState } from 'vuex'
  import AWN from 'awesome-notifications'

  export default {
    data() {
      return {
        notifier: new AWN()
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser,
        myPlants: (state) => {
          if (state.loggedInUser) {
            return state.users[state.loggedInUser.user]?.favorites || []
          } else {
            return []
          }
        },
        dateDiff: (state) => state.dateDiff
      })
    },
    methods: {
      removePlant(plant, index) {
        // notifikation för att säkerställa att användaren vill gå vidare.
        let onOK = () => {
          this.notifier.success(
            `${plant.name} är borttagen från fönsterbrädan.`
          )
          this.$store.commit('removePlant', {
            user: this.loggedInUser.user,
            index: index
          })
        }
        let onCancel
        this.notifier.confirm(
          `Är du säker på att du vill ta bort ${plant.name}?`,
          onOK,
          onCancel,
          {
            labels: {
              confirm: 'Varning!'
            }
          }
        )
        console.log(index)
        console.log(plant)
        console.log(this.myPlants)
      },
      routeClick(plant) {
        console.log(plant.id)
        if (plant.id !== undefined) {
          this.$router.push(`/plants/${plant.name}`)
        }
      }
    }
  }
</script>

<template>
  <h2>Dina växter</h2>
  <div id="plantshelf-box" v-if="myPlants.length !== 0">
    <div
      class="shelf-plants"
      :key="plant.name"
      v-for="(plant, index) in myPlants"
    >
      <div class="img-desc-container" @click="routeClick(plant)">
        <img :src="plant.image[0]" :alt="plant.name" />
        <div class="description-box">
          <h3>{{ plant.name }}</h3>
          <div class="description-divs">
            <i class="bi bi-brightness-high" style="font-size: 0.7em" />
            <p class="description-p">{{ plant.placement.short }}</p>
          </div>
          <div class="description-divs">
            <i class="bi bi-thermometer-low" style="font-size: 0.7em" />
            <p class="description-p">{{ plant.temperature.short }}</p>
          </div>
          <div class="description-divs">
            <i class="bi bi-moisture iconsize" style="font-size: 0.7em" />
            <p class="description-p">{{ plant.watering.short }}</p>
          </div>
        </div>
      </div>
      <i
        @click="removePlant(plant, index)"
        id="remove-icon"
        class="bi bi-x-lg"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #plantshelf-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    width: 100%;
  }
  .shelf-plants {
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    margin-bottom: 20px;
    width: 100%;
    max-width: 600px;
    background-color: white;
  }

  img {
    aspect-ratio: 1 / 1;
    width: 50%;
    object-fit: cover;
    border-radius: 5px;
  }

  .description-box {
    margin-left: 10px;
    width: 40%;
  }

  .img-desc-container {
    display: flex;
    cursor: pointer;
  }

  .description-divs {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    padding-top: 5px;
  }

  .description-p {
    font-size: 0.7rem;
    padding: 0;
    padding-left: 10px;
  }

  #remove-icon {
    align-self: flex-start;
    cursor: pointer;
    margin-left: 15px;
  }

  @media (min-width: 500px) {
    .description-box {
      margin-top: 30px;
      margin-left: 30px;
    }
  }
  @media (min-width: 900px) {
    #my-shelf-view {
      margin-top: 0;
    }
    .shelf-plants {
      margin-right: 20px;
      width: 400px;
    }

    .description-box {
      margin-top: 20px;
      margin-left: 20px;
    }
  }
</style>
