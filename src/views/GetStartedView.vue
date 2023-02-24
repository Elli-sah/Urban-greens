<script>
  import MyShelfInfo from '../components/MyShelfInfo.vue'
  import StepByStep from '../components/StepByStep.vue'

  export default {
    components: {
      MyShelfInfo,
      StepByStep
    }
  }
</script>

<template>
  <div class="view-divs">
    <div id="info">
      <h1>Kom Igång</h1>
      <p class="dd">
        Få kontroll över ditt växtsamhälle! Ta hand om dina gröna vänner och se
        dem blomstra med hjälp av vår app. Kontakta oss om du behöver hjälp.
        Lycka till med dina växter!
      </p>
    </div>
    <MyShelfInfo />
    <div id="bb">
      <div class="cc">
        <p class="dd">
          Få kontroll över ditt växtsamhälle! Ta hand om dina gröna vänner och
          se dem blomstra med hjälp av vår app. Kontakta oss om du behöver
          hjälp. Lycka till med dina växter!
        </p>
        <p class="tt">01</p>
      </div>
      <div class="cc">
        <p class="tt">02</p>

        <p class="dd">
          Få kontroll över ditt växtsamhälle! Ta hand om dina gröna vänner och
          se dem blomstra med hjälp av vår app. Kontakta oss om du behöver
          hjälp. Lycka till med dina växter!
        </p>
      </div>
      <div class="cc">
        <p class="dd">
          Få kontroll över ditt växtsamhälle! Ta hand om dina gröna vänner och
          se dem blomstra med hjälp av vår app. Kontakta oss om du behöver
          hjälp. Lycka till med dina växter!
        </p>
        <p class="tt">03</p>
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
    max-width: 600px;
    padding: 50px;
    border-radius: 20px 0 20px 0;
    background-color: beige;
  }
  .dd {
    font-size: 1.2em;
  }
  .cc {
    display: flex;
  }
  .tt {
    font-size: 3em;
  }
  #info {
    background-color: #577751;
    border-radius: 20px;
    padding: 10px;
    max-width: 500px;
  }
</style>
