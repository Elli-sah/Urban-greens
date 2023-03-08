<script>
  import LogIn from './LogIn.vue'

  export default {
    components: {
      LogIn
    },
    props: {
      selectedPlant: { required: true, type: Object },
      plantHeading: { required: true, type: String },
      longDescription: { required: true, type: String }
      // plantplacement: { required: true, type: String }
    },
    data() {
      return {}
    },
    emits: ['close'],

    methods: {},
    close() {
      this.$emit('close')
    }
  }
</script>

<template>
  <div class="modalContainer">
    <h1>Du måste logga in först!</h1>
    <LogIn />

    <button class="button" @click="$emit('close')">Stäng</button>
  </div>
</template>

<style scoped>
  .modalContainer {
    z-index: 1;
    position: relative;

    background-color: #ffffff;
    border-radius: 10px;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 10%;
  }
</style>
