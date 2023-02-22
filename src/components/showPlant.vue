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

    <button @click="$emit('close')">close</button>
  </div>
</template>
