<script>
  export default {
    props: {
      selectedPlant: { required: true, type: Object },
      plantHeading: { required: true, type: String },
      longDescription: { required: true, type: String }
      // plantplacement: { required: true, type: String }
    },
    data() {
      return {}
    },
    emits: ['close'],

    methods: {},
    close() {
      this.$emit('close')
    }
    // closeModal() {
    //   this.showmodal = false
    // }
  }
</script>

<template>
  <div class="container">
    <h3>{{ plantHeading }}</h3>

    <p>{{ longDescription }}</p>

    <button class="button" @click="$emit('close')">Stäng</button>
  </div>
</template>

<style scoped>
  .container {
    /* display: flex; */
    /* width: 300px;
    height: 250px;
    background-color: #fefffe;
    box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 50;
    right: 5;

    overflow-x: hidden;
    overflow-y: auto;
    /* margin: 200px 10% 0 10%; */
    text-align: center;
    border-radius: 10px;
    height: 500px;
    width: 340px;
    padding: 20px;
    position: absolute;
    top: 31%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    background-color: #577717;
    color: white;
    /* align-items: center; */
  }

  @media (min-width: 600px) {
    .container {
      height: 500px;
      width: 340px;
      padding: 40px;
      position: absolute;
      top: 23%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 999;
      background-color: #577717;
      color: white;
    }
  }

  @media (min-width: 1000px) {
    .container {
      /* width: 300px;
      height: 350px;
      background-color: #fefffe;
      box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
      position: fixed;
      overflow-x: hidden;
      overflow-y: auto;
      top: 40%;
      left: 60%;
      transform: translate(-50%, -50%);


      text-align: center;
      padding: 3%;
      border-radius: 10px; */
      /* display: flex; */
      height: 600px;
      width: 480px;
      padding: 40px;
      position: absolute;
      top: 12%;
      left: 72%;
      transform: translate(-50%, -50%);
      z-index: 999;
      background-color: #577717;
      color: white;
      /* align-items: center; */
    }
    @media only screen and (max-width: 1300px) and (min-width: 1000px) {
      .container {
        /* display: flex; */
        /* flex-direction: column; */
        height: 440px;
        width: 400px;
        padding: 40px;
        position: absolute;
        top: 9.5%;
        left: 70%;
        transform: translate(-50%, -50%);
        z-index: 999;
        background-color: #577717;
        color: white;
        /* align-items: center; */
      }
    }
  }
</style>
