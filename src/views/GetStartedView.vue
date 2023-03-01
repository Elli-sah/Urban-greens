<script>
  import { mapState } from 'vuex'
  import StepByStep from '../components/StepByStep.vue'

  export default {
    components: {
      StepByStep
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      }),
      isLoggedIn() {
        return !!this.loggedInUser
      }
    }
  }
</script>

<template>
  <div class="view-divs">
    <h1>Kom Igång</h1>
    <div id="box">
      <div id="info">
        <StepByStep />
        <!-- <p class="text">
        Få kontroll över ditt växtsamhälle! Ta hand om dina gröna vänner och se
        dem blomstra med hjälp av vår app. Kontakta oss om du behöver hjälp.
        Lycka till med dina växter!
      </p> -->
        <RouterLink v-if="isLoggedIn" to="/login">
          <button id="komIgang" class="button">Logga in</button>
        </RouterLink>
      </div>

      <div id="container">
        <div class="text-number-container">
          <p class="text">
            I vår <strong>växtguide</strong> hittar du en stor samling av vackra
            växter som du kanske har hemma eller vill ha. I
            <strong>växtguide</strong> kan du ställa de växter som du har hemma
            på din virituella fönstebräda för att få kontroll på dina växter.
          </p>
          <p class="number">01</p>
        </div>
        <div class="text-number-container">
          <p class="number">02</p>

          <p class="text">
            Genom att klicka på en växt kan du se viktig information om dess
            behov och förutsättningar för att växa och frodas. Detta inkluderar
            detaljer om bevattning, temperatur, ljusbehov och annan relevant
            information. Att ta reda på sådana detaljer kan hjälpa dig att ta
            bättre hand om dina växter och se till att de trivs på bästa möjliga
            sätt.
          </p>
        </div>

        <div class="text-number-container">
          <p class="text">
            Genom att lägga till dina växter i
            <strong>Min fönsterbräda</strong> kan du enkelt samla alla dina
            växter på ett ställe. På detta sätt kan du effektivt organisera dina
            växter och säkerställa att du ger dem rätt vård och uppmärksamhet.
            Detta gör det också lättare att övervaka deras tillstånd och se till
            att de fortsätter att trivas.
          </p>
          <p class="number">03</p>
        </div>
        <!-- <img id="my-shelf" src="../../assets/shelf.png" alt="my shelf" /> -->
      </div>
    </div>
  </div>
</template>

<style scoped>
  #box {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 450px;
    margin: auto;
  }
  #container {
    width: 100%;
    padding: 10px;
    border-radius: 20px;

    color: white;
    background-color: #577751;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.1);
    margin: 10px;
  }

  #info {
    width: 100%;
    padding: 10px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.1);
    border-radius: 20px;
    margin: 10px;
  }
  .text-number-container {
    display: flex;
    margin-top: 40px;
  }
  .number {
    font-size: 3em;

    margin: auto;
    padding: 20px;
  }
  /* #info {
    background-color: #577751;
    border-radius: 20px;
    padding: 10px;
    max-width: 600px;
    margin: auto;
    margin-top: 30px;
  } */
  #my-shelf {
    width: 300px;
    height: 200px;
    right: -60px;
    position: absolute;
    bottom: -70px;
    object-fit: contain;
  }

  @media (min-width: 800px) {
    #box {
      flex-direction: row;
      align-items: start;
      justify-content: center;
      max-width: 1000px;
    }
    #container {
      height: 700px;
      overflow: auto;
    }
    #info {
      height: 700px;
    }
  }
</style>
