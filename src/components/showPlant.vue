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
    // closeModal() {
    //   this.showmodal = false
    // }
  }
</script>

<template>
  <!-- <div class="container"> -->
  <div class="newContainer">
    <h3>{{ plantHeading }}</h3>

    <p>{{ longDescription }}</p>

    <button class="button" @click="$emit('close')">Stäng</button>
  </div>
</template>

<style scoped>
  .newContainer {
    background-color: #577717;
    border-radius: 10px;
    color: white;
    text-align: center;
    padding: 10%;
  }

  @media (max-width: 1000px) {
    .newContainer {
      margin-top: 10%;
    }
  }
</style>
