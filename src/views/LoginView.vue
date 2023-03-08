<script>
  import LogIn from '../components/LogIn.vue'

  export default {
    components: {
      LogIn
    }
  }
</script>

<template>
  <div class="login-divs">
    <h1>Logga in</h1>
    <p>
      Att logga in på Urban Greens ger dig tillgång till en mer personlig
      upplevelse med skräddarsydda funktioner. Skapa din egen fönsterbräda med
      dina växter för att få en översikt över hur dina växter ska tas omhand.
    </p>
  </div>
  <div class="view-divs">
    <LogIn />
  </div>
</template>

<style>
  .login-divs {
    width: 90%;
    max-width: 560px;
    margin: auto;
    padding: 20px;
  }
</style>
