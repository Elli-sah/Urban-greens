<script>
  export default {
    props: {
      selectedPlant: { required: true, type: Object },
      plantHeading: { required: true, type: String },
      longDescription: { required: true, type: String }
    },

    emits: ['close'],

    close() {
      this.$emit('close')
    }
  }
</script>

<template>
  <div id="new-container">
    <h3>{{ plantHeading }}</h3>

    <p>{{ longDescription }}</p>

    <button class="button" @click="$emit('close')">Stäng</button>
  </div>
</template>

<style scoped>
  #new-container {
    background-color: #4e7c4f;
    border-radius: 10px;
    color: white;
    text-align: center;
    padding: 10%;
    margin-top: 10px;
  }
</style>
