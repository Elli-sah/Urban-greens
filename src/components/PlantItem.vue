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
  <b-link :to="`/plants/${plant.name}`" class="list-group-item">
    <p>{{ plant.name }}</p></b-link
  >
</template>
