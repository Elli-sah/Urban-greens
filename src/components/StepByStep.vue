<script>
  export default {
    data() {
      return {
        slide: 1,
        number: ''
      }
    },
    computed: {
      slideText() {
        switch (this.slide + 1) {
          case 1:
            return 'Navigera dig runt på sidan med hjälp av menyn'
          case 2:
            return 'I menyn får du olika alternativ'
          case 3:
            return 'I växtguiden kan du se alla växter'
          default:
            return ''
        }
      }
    }
  }
</script>

<template>
  <div id="step-by-step">
    <h3>Steg för steg guide</h3>
    <div id="carousel">
      <b-carousel
        v-model="slide"
        interval="4000"
        controls
        indicators
        ride="carousel"
      >
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/sb9.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/sb8.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/sb7.png"
        />
      </b-carousel>
      <p>{{ slideText }}</p>
    </div>
  </div>
</template>

<style>
  #carousel {
    width: 250px;
    height: 300px;
    margin: auto;
    padding-top: 30px;
  }
  .carouselImg {
    width: 250px;
    height: 300px;
    object-fit: cover;
  }
  #step-by-step {
    margin: auto;
    max-width: 600px;
    height: 500px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    padding: 20px;
  }
  p {
    padding: 20px;
  }
</style>
