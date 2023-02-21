<script>
  import PlantCard from '../components/PlantCard.vue'
  export default {
    components: {
      PlantCard
    }
  }
</script>

<template>
  <div class="scrolling-wrapper">
    <button class="categoryLinks">
      <RouterLink id="plants" to="/plant/:name'"> Alla växter</RouterLink>
    </button>
    <button class="categoryLinks">
      <RouterLink id="plants" to="/plant/:name'"> Blommande växter</RouterLink>
    </button>
    <button class="categoryLinks">
      <RouterLink id="plants" to="/plant/:name'"> Suckulenter</RouterLink>
    </button>
    <button class="categoryLinks">
      <RouterLink id="plants" to="/plant/:name'"> Gröna växter</RouterLink>
    </button>
  </div>
  <PlantCard />
</template>

<style scoped>
  .scrolling-wrapper {
    overflow-y: hidden;
    white-space: nowrap;
    display: flex;
    justify-content: center;
  }

  .scrolling-wrapper-flexbox {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    justify-content: center;
  }
</style>
