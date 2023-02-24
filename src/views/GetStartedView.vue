<script>
  import StepByStep from '../components/StepByStep.vue'
  import MyWeather from '../components/MyWeather.vue'

  export default {
    components: {
      StepByStep,
      MyWeather
    }
  }
</script>

<template>
  <div class="view-divs">
    <MyWeather />
    <div id="info">
      <h1>Kom Igång</h1>
      <p class="dd">
        Få kontroll över ditt växtsamhälle! Ta hand om dina gröna vänner och se
        dem blomstra med hjälp av vår app. Kontakta oss om du behöver hjälp.
        Lycka till med dina växter!
      </p>
    </div>

    <div id="bb">
      <div class="cc">
        <p class="dd">
          I vår <strong>växtguide</strong> hittar du en stor samling av vackra
          växter som du kanske har hemma eller vill ha. I
          <strong>växtguide</strong> kan du ställa de växter som du har hemma på
          din virituella fönstebräda för att få kontroll på dina växter.
        </p>
        <p class="tt">01</p>
      </div>
      <div class="cc">
        <p class="tt">02</p>

        <p class="dd">
          Genom att klicka på en växt kan du se viktig information om dess behov
          och förutsättningar för att växa och frodas. Detta inkluderar detaljer
          om bevattning, temperatur, ljusbehov och annan relevant information.
          Att ta reda på sådana detaljer kan hjälpa dig att ta bättre hand om
          dina växter och se till att de trivs på bästa möjliga sätt.
        </p>
      </div>
      <div id="aa">
        <div class="cc">
          <p class="dd">
            Genom att lägga till dina växter i
            <strong>Min fönsterbräda</strong> kan du enkelt samla alla dina
            växter på ett ställe. På detta sätt kan du effektivt organisera dina
            växter och säkerställa att du ger dem rätt vård och uppmärksamhet.
            Detta gör det också lättare att övervaka deras tillstånd och se till
            att de fortsätter att trivas.
          </p>
          <p class="tt">03</p>
        </div>
        <img id="my-shelf" src="../../assets/shelf.png" alt="my shelf" />
      </div>
    </div>

    <StepByStep />
    <RouterLink to="/login">
      <button id="komIgang" class="button">Logga in</button>
    </RouterLink>
  </div>
</template>

<style scoped>
  #bb {
    margin: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    max-width: 600px;
    padding: 50px;

    border-radius: 20px;
    background-color: rgb(255, 255, 255);
  }
  .dd {
    font-size: 1.2em;
  }
  .cc {
    display: flex;
    margin-top: 40px;
  }
  .tt {
    font-size: 3em;
    margin: auto;
    padding: 20px;
  }
  #info {
    background-color: #577751;
    border-radius: 20px;
    padding: 10px;
    max-width: 500px;
    margin-top: 50px;
  }
  #my-shelf {
    width: 300px;
    height: 200px;
    right: -60px;
    position: absolute;
    bottom: -70px;
    object-fit: contain;
  }
  #aa {
    position: relative;
  }
</style>
