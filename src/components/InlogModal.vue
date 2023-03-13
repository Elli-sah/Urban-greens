<script>
  import LogIn from './LogIn.vue'

  export default {
    components: {
      LogIn
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

  b-modal {
    background-color: rgba(225, 186, 107, 0.9);
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
