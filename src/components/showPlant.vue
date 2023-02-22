<script>
  export default {
    // emits: ['showPlant'],
    props: {
      // title: { required: true, type: String },
      // temperature: { required: true, type: String },
      selectedPlant: { required: true, type: Object }
    },
    data() {
      return {
        // showModal: false,
        // selectedPlant: null
      }
    },
    emits: ['close'],

    methods: {
      // viewPlant(plant) {
      //   this.$emit('showPlant', plant)
      // }
    },
    close() {
      this.$emit('close')
    }
  }
</script>

<style>
  .container {
    width: 200px;
    height: 200px;
    background-color: white;
  }
</style>

<template>
  <div class="container">
    <p>{{ selectedPlant.title }}</p>
    <p>{{ selectedPlant.temperature }}</p>
    <!-- <button @click="viewPlant({ title, temperature })">Test</button> -->
    <button @click="$emit('close')">close</button>
  </div>
</template>
