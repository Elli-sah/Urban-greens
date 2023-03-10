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
            return 'Det finns information om varje på dess specefika växtsida. Klickar du på ikonerna så kan du få ut en mer detaljerad beskrivning om specefik rubrik'
          case 4:
            return 'På din fönsterbräda kan du hitta samlad information om dina växter. här får du även notiser och påminelser som ska hjälpa dig att ta hand om dina växter på bästa sätt'
          case 5:
            return 'På din fönsterbräda kan du lista alla dina växter som du har hemma. Om något hemskt skulle hända kan du enkelt ta bort en växt genom att trycka på krysset'
          case 6:
            return 'Finns inte en växt med i vår växtgide kan du alltid lägga till din egen växt'
          case 7:
            return 'På din fönsterbräda hittar du även din växtkalender, hös kan du lägga till när du senast vattnade och även skapa egena händelser genom att klicka på det datumet du vill hantera. klicka på en händelse för att se mer information om den.'
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
        interval="6000"
        controls
        indicators
        ride="carousel"
      >
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/meny.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/vaxtguide.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/vaxt.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/brada.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/dina.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/egen.png"
        />
        <b-carousel-slide
          class="carouselImg"
          img-src="../../assets/step-by-step/kalender.png"
        />
      </b-carousel>
      <p>{{ slideText }}</p>
    </div>
  </div>
</template>

<style scoped>
  #carousel {
    width: 250px;
    height: 270px;
    margin: auto;
    padding-top: 30px;
  }
  .carouselImg {
    width: 250px;
    height: 270px;
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
