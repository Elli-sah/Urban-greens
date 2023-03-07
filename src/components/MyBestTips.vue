<script>
  import { mapState } from 'vuex'
  export default {
    props: {
      message: { required: true, type: String }
    },
    data() {
      return {
        tip: ''
      }
    },
    computed: {
      // ...mapState({ myState: (state) => state.plantTip })
      ...mapState({
        plantTips: (state) => state.plantTip
      })
    },
    methods: {
      // ...mapMutations(['setPlantTip']),
      onSubmit(event) {
        this.$store.commit('setPlantTip', this.tip)
        event.preventDefault()
      },
      removePlantTip() {
        this.$store.commit('removePlantTip', this.tip)
      }
    }
  }
</script>

<template>
  <div class="container">
    <div class="tipBox">
      <h1>Ge dina bästa råd för att ta hand om denna växt</h1>

      <form>
        <input v-model="tip" />
        <input
          class="button"
          @click="onSubmit"
          :disabled="tip.length === 0"
          type="button"
          value="Skicka tipset"
        />
      </form>
      <div id="scroll">
        <h2 v-if="plantTip !== null">Tips:</h2>
        <p v-for="tip in plantTips" :key="tip">
          {{ tip }}

          <button class="button" @click="removePlantTip(index, tip)">
            Remove
          </button>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
    width: 90%;
    text-align: center;
    border-radius: 10px;
    margin-bottom: 10px;
    padding: 20px 20px 20px 20px;
  }
</style>
