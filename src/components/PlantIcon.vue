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
      <div id="all-info">
        <i id="icons-hover" :class="cssIcon" style="font-size: 2em" />
        <div id="p-info">
          <p class="short-text title :hover">{{ iconTitle }}</p>
          <p id="short-text">{{ iconShort }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #all-info:hover {
    transform: scale(1.1);
    transition: transform 0.2s ease-in-out;
    cursor: pointer;
  }

  #all-info {
    display: flex;
  }

  p {
    cursor: pointer;
  }
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
    cursor: pointer;
  }
</style>
