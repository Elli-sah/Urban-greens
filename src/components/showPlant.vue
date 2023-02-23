<script>
  export default {
    props: {
      selectedPlant: { required: true, type: Object }
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

<style scoped>
  .container {
    width: 100px;
    height: 100px;
    background-color: white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    width: 50%;
    height: 200px;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 200px 10% 0 10%;
    text-align: center;
  }
  /* .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 250px;
    overflow-x: hidden;
    overflow-y: auto;
    margin: 200px 10% 0 10%;
    text-align: center;
  } */
</style>

<template>
  <div class="container">
    <!-- <div class="modal"> -->
    <!-- <h3>Ljusbehov</h3> -->
    <p>{{ selectedPlant.title }}</p>
    <p>{{ selectedPlant.temperature }}</p>

    <button class="button" @click="$emit('close')">close</button>
  </div>
  <!-- </div> -->
</template>
