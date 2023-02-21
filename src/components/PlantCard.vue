<script>
  // import { RouterLink } from 'vue-router'

  export default {
    props: {
      plant: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {}
    },
    methods: {
      addPlant() {
        this.$store.dispatch('addPlant', {
          user: 'sannaa',
          addplant: this.plant
        })
      }
      // components: { RouterLink }
    }
  }
</script>

<template>
  <RouterLink :to="`/plant/${plant.name}`" class="plantBox">
    <i @click="addPlant" class="bi bi-heart-fill" />
    <img alt="" :src="plant.image" />
    <p>{{ plant.name }}</p>
  </RouterLink>
</template>

<style scoped>
  .plantBox {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: antiquewhite;
    margin: 10px;
  }
  img {
    width: 200px;
    height: 300px;

    object-fit: cover;
  }
  p {
    font-weight: bold;
  }
</style>
