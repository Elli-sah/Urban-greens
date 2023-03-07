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
      <h1>Ge dina bästa tips för att ta hand om {{ plant.name }}</h1>

      <form>
        <input v-model="tip" />
        <input
          if
          class="button"
          @click="onSubmit"
          :disabled="tip.length === 0"
          type="button"
          value="Skicka"
        />
      </form>
      <div id="scroll">
        <h2 v-if="tip !== null">Tips:</h2>
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
  #remove-icon {
    align-self: flex-start;
    cursor: pointer;
    margin-left: 15px;
  }
  input {
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.1);
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
  }
  .tipBox {
    background-color: white;
    width: 50%;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 20px 20px 20px 20px;
  }
</style>
