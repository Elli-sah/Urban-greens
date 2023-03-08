<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      plant: { required: true, type: Object },
      id: { required: true, type: Number },
      plantName: { required: true, type: String }
    },
    data() {
      return {
        tip: ''
      }
    },
    computed: {
      // ...mapState({ myState: (state) => state.plantTip })
      ...mapState({
        plantTips: (state) => state.plantTip,
        specifikPlant: (state) => state.plantTip
      })
    },

    methods: {
      // ...mapMutations(['setPlantTip']),
      onSubmit(event) {
        this.$store.commit('setPlantTip', {
          id: this.id,
          tip: this.tip
        })
        event.preventDefault()
        this.tip = ''
      },
      removePlantTip() {
        this.$store.commit('removePlantTip', this.tip)
      }
    }
  }
</script>

<template>
  <!-- {{ plantTips }} -->

  <div class="container">
    <div class="tipBox">
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
        <h3 id="tip" v-if="tip !== null">Tips:</h3>
        <p
          v-for="plantTip in specifikPlant.filter(
            (showSomeTip) => showSomeTip.id === id
          )"
          :key="plantTip"
        >
          {{ plantTip.tip }}

          <i
            @click="removePlantTip(index, tip)"
            id="remove-icon"
            class="bi bi-x-lg"
          />
        </p>
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
  #text {
    width: 80%;
    height: 100px;
    box-shadow: 0px 2px 4px rgba(38, 38, 38, 0.1);
    border: 2px solid grey;
    vertical-align: top;
  }
  #remove-icon {
    align-self: flex-start;
    cursor: pointer;
    margin-left: 15px;
  }
  input {
    margin: 20px;
  }
  #scroll {
    height: 200px;
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
  .tipBox {
    text-align: left;

    padding: 20px 20px 20px 20px;
  }
</style>
