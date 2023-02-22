<script>
  export default {
    props: {
      plant: {
        type: Object,
        default: () => ({})
      }
    }
  }
</script>

<template>
  <RouterLink :to="`/plant/${plant.name}`" class="plant-container" />
  <p>{{ plant.name }}</p>
</template>
