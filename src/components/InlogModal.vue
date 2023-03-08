<script>
  import LogIn from './LogIn.vue'

  export default {
    components: {
      LogIn
    },
    // props: {
    // selectedPlant: { required: true, type: Object },
    // plantHeading: { required: true, type: String },
    // longDescription: { required: true, type: String }
    // plantplacement: { required: true, type: String }
    // },
    data() {
      return {
        // NotLoggedIn: false
      }
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
    <i @click="$emit('close')" class="bi bi-x-lg" />
  </div>
</template>

<style scoped>
  h1 {
    font-size: 25px;
  }
  .modalContainer {
    z-index: 2;
    left: 6.5px;
    top: -50px;
    position: relative;
    background-color: rgba(225, 186, 107, 0.9);
    border-radius: 10px;
    color: rgb(0, 0, 0);
    text-align: center;
    padding: 10%;
  }
</style>
