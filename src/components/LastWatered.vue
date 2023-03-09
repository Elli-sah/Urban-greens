<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        dateDiff: (state) => state.dateDiff
      })
    }
  }
</script>

<template>
  <div id="watered-div" v-if="dateDiff !== ''">
    <i class="bi bi-droplet-fill" />
    <p>
      Du vattnade för <strong> {{ dateDiff }} </strong> sedan
    </p>
  </div>
</template>

<style scoped>
  #watered-div {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 300px;
    background-color: white;
    border-radius: 20px;
    height: 100px;
  }

  i {
    font-size: 20px;
    margin-right: 10px;
  }

  p {
    margin: 0;
  }
</style>
