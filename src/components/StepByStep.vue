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
            return 'I växtguiden kan du se alla växter. Här kan du enkelt lägga till växter på din fönsterbräda genom att klicka på den lilla krukan. Se mer information om växten genom att klicka på den'
          case 3:
            return 'Det finns information om varje på dess specefika växtsida'
          case 4:
            return 'På din fönsterbräda kan du lista alla dina växter som du har hemma. Om något hemskt skulle hända kan du enkelt ta bort en växt genom att trycka på krysset'
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
        interval="5000"
        controls
        indicators
        ride="carousel"
      >
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/sb-13.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/sb-15.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/sb-11.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/sb-16.png"
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
    height: 600px;
    background-color: rgb(255, 255, 255);
    border-radius: 20px;
    padding: 20px;
  }
  p {
    padding: 20px;
  }
</style>
