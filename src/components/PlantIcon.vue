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
  <div>
    <div id="plant-short-info" @click="$emit('open', modalInfo)">
      <i id="icons-hover" :class="cssIcon" style="font-size: 2em" />

      <div>
        <p class="short-text title :hover">{{ iconTitle }}</p>
        <p id="short-text">{{ iconShort }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #plant-short-info {
    display: flex;
    flex-direction: row;
    /* align-items: center; */
    justify-content: center;
    width: 100%;
    margin: 10px;
  }
  .short-text {
    text-align: center;
    align-items: center;
    width: 100px;
    margin: 0;
    padding: 0;
  }
  #icons-hover {
    font-size: 10rem;
    transition: transform 0.2s ease-in-out;
  }
  #icons-hover:hover {
    transform: scale(1.5);
  }
  .short-text title :hover {
    font-size: 10rem;
    transition: transform 0.2s ease-in-out;
    transform: scale(1.5);
  }
  .short-text.title:hover {
    font-size: 1.2em;
    cursor: pointer;
  }
</style>
