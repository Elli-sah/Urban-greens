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
  <div class="plantBox">
    <img alt="" :src="plant.image" />
    <p>{{ plant.name }}</p>
  </div>
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
