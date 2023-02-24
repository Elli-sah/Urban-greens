<script>
  import MyShelfInfo from '../components/MyShelfInfo.vue'

  export default {
    components: {
      MyShelfInfo
    }
  }
</script>

<template>
  <div class="view-divs">
    <div id="info">
      <h1>Kom Igång</h1>
      <p>
        Få kontroll över ditt växtsamhälle! Ta hand om dina gröna vänner och se
        dem blomstra med hjälp av vår app. Kontakta oss om du behöver hjälp.
        Lycka till med dina växter!
      </p>
    </div>
    <MyShelfInfo />
    <RouterLink to="/login">
      <button id="komIgang" class="button">Logga in</button>
    </RouterLink>
  </div>
</template>

<style scoped>
  #info {
    background-color: #577751;
    border-radius: 20px;
    padding: 10px;
  }
</style>
