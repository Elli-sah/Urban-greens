<script>
  export default {
    data() {
      return {
        slide: 0
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
        interval="2000"
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
    max-width: 600px;
    height: 600px;
    background-color: white;
    border-radius: 0 20px 0 20px;
    padding: 20px;
  }
</style>
