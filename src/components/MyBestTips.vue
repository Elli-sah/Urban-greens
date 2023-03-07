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
        event.preventDefault
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
          @click="onSubmit"
          :disabled="tip.length === 0"
          type="button"
          value="Skicka tipset"
        />
      </form>
      <p v-if="plantTip !== null">Dina tips:<p v-for="tip in plantTips" :key="tip">{{ tip }}</p></p>
    </div>
  </div>
</template>

<style scoped>
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
