<script>
  export default {
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
  <div class="container">
    <h3>{{ plantHeading }}</h3>

    <p>{{ longDescription }}</p>

    <button class="button" @click="$emit('close')">Stäng</button>
  </div>
</template>

<style scoped>
  .container {
    width: 300px;
    height: 250px;
    background-color: #fefffe;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    position: absolute;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 200px 10% 0 10%;
    text-align: center;
    padding: 3%;
    border-radius: 10px;
  }
  @media (min-width: 800px) {
    .container {
      width: 300px;
      height: 350px;
      background-color: #fefffe;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
      position: absolute;
      overflow-x: hidden;
      overflow-y: auto;
      margin: 200px 10% 0 10%;
      text-align: center;
      padding: 3%;
      border-radius: 10px;
    }
  }
</style>
