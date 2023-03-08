<script>
  import LogIn from '../components/LogIn.vue'

  export default {
    components: {
      LogIn
    }
  }
</script>

<template>
  <div id="login-divs">
    <div id="login-texts">
      <h1>Logga in</h1>
      <p>
        Att logga in på Urban Greens ger dig tillgång till en mer personlig
        upplevelse med skräddarsydda funktioner. Skapa din egen fönsterbräda med
        dina växter för att få en översikt över hur dina växter ska tas omhand.
      </p>
    </div>
  </div>
  <div id="view-divs">
    <LogIn />
  </div>
</template>

<style>
  main {
    margin-top: 6%;
  }

  #login-divs {
    width: 90%;
    margin: auto;
    max-width: 560px;
    padding: 20px;
  }

  #login-text {
    position: absolute;
  }
</style>
