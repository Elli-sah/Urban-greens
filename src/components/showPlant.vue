<script>
  export default {
    props: {
      selectedPlant: { required: true, type: Object },
      longDescription: { required: true, type: String }
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
</style>

<template>
  <div class="container">
    <p>{{ selectedPlant.title }}</p>
    <p>{{ longDescription }}</p>

    <button class="button" @click="$emit('close')">close</button>
  </div>
</template>
