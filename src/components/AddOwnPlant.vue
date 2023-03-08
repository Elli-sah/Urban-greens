<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        plantName: null,
        plantTemp: null,
        plantPlacement: null,
        plantWatering: null,
        ownPlant: {}
      }
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
    },
    // Metoden gör om information från formuläret till ett object som sedan skickas via en mutation till store.js
    methods: {
      AddOwnPlant() {
        this.ownPlant = {
          name: this.plantName,
          placement: {
            short: this.plantPlacement
          },
          temperature: {
            short: this.plantTemp
          },
          watering: {
            short: this.plantWatering
          },
          image: ['/images/logo-secondary.png']
        }
        this.$store.commit('addPlant', {
          user: this.loggedInUser.user,
          addplant: this.ownPlant
        })
      }
    }
  }
</script>

<template>
  <div id="add-own-div">
    <h2>Lägg till egna växter</h2>
    <p>
      Har du någon växt hemma som saknas i vår Växtguide? Här kan du själv lägga
      till dina växter för att få en komplett fönsterbräda. Du kan även välja
      att lägga till växtråd.
    </p>
    <form id="plant-form" @submit.prevent="AddOwnPlant">
      <label id="name-label" for="input-name"><h3>Växtens namn</h3></label
      ><input
        id="input-name"
        v-model="plantName"
        type="text"
        placeholder="Växtnamn"
        required
      />
      <div id="form-div">
        <div class="radio-divs">
          <h3>Ljusbehov</h3>
          <label
            >Skugga<input type="radio" v-model="plantPlacement" value="Skugga"
          /></label>
          <label
            >Halvskugga
            <input type="radio" v-model="plantPlacement" value="Halvskugga"
          /></label>
          <label
            >Soligt <input type="radio" v-model="plantPlacement" value="Soligt"
          /></label>
          <label
            >Vet inte<input type="radio" v-model="plantTemp" value="Vet ej" />
          </label>
        </div>
        <div class="radio-divs">
          <h3>Temperatur</h3>
          <label
            >5-15°C<input type="radio" v-model="plantTemp" value="5-15°C" />
          </label>
          <label
            >15-25°C<input type="radio" v-model="plantTemp" value="15-25°C" />
          </label>
          <label
            >Vet inte<input type="radio" v-model="plantTemp" value="Vet ej" />
          </label>
        </div>
        <div class="radio-divs">
          <h3>Bevattning</h3>
          <label
            >Sparsamt<input
              type="radio"
              v-model="plantWatering"
              value="Sparsamt"
            />
          </label>
          <label
            >Måttligt<input
              type="radio"
              v-model="plantWatering"
              value="Måttligt"
            />
          </label>
          <label
            >Rikligt<input
              type="radio"
              v-model="plantWatering"
              value="Rikligt"
            />
          </label>
          <label
            >Vet inte<input type="radio" v-model="plantTemp" value="Vet ej" />
          </label>
        </div>
      </div>
      <button type="submit" class="button">Lägg till växt</button>
    </form>
  </div>
</template>

<style scoped>
  #add-own-div {
    background-color: #e1ba6b;
    border-radius: 30px;
    width: 90%;
    max-width: 700px;
    margin: auto;
    margin-top: 30px;
    padding: 20px;
  }

  p {
    width: 80%;
    margin: auto;
  }
  #plant-form {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 550px;
    margin: auto;
    padding: 20px;
  }

  #name-label {
    width: fit-content;
  }

  label {
    width: 150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
    margin: auto;
  }

  #input-name {
    width: 90%;
    margin: auto;
    border-radius: 30px;
    border-style: none;
    padding: 7px;
    margin-bottom: 5px;
  }

  input {
    margin-right: 10px;
  }

  #form-div {
    display: flex;
    flex-direction: row;
  }

  .radio-divs {
    padding: 10px;
  }

  @media (max-width: 750px) {
    #plant-form {
      width: 100%;
    }
    #input-name {
      width: 90%;
    }
    label {
      width: 200px;
    }

    #form-div {
      flex-direction: column;
    }
  }
</style>
