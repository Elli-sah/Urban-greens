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
  <h1>hej</h1>
  <ul>
    <li>{{ plant.name }}</li>
  </ul>
</template>
