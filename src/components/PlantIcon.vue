<script>
  export default {
    props: {
      cssIcon: { required: true, type: String },
      iconTitle: { required: true, type: String },
      iconShort: { required: true, type: String },
      modalInfo: { required: true, type: String }
    },
    emits: ['open']
  }
</script>
<template>
  <div class="plantShortInfo">
    <i
      @click="$emit('open', modalInfo)"
      class="icons-hover"
      :class="cssIcon"
      style="font-size: 2em"
    />

    <div>
      <p class="shortText title">{{ iconTitle }}</p>
      <p class="shortText">{{ iconShort }}</p>
    </div>
  </div>
  <!-- <p>Temp:</p> -->
</template>

<style scoped>
  .plantShortInfo {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  .shortText {
    text-align: center;
    align-items: center;
    width: 100px;
    margin: 0;
    padding: 0;
  }
  .icons-hover {
    font-size: 10rem;
    transition: transform 0.2s ease-in-out;
  }
  .icons-hover:hover {
    transform: scale(1.5);
  }
</style>
