<script></script>

<template>
  <h1>Logga in</h1>
  <form>
    <label>Användarnamn <input :v-model="userName" /></label>
    <label>Lösenord<input type="password" :v-model="password" /></label>
    <button type="submit">Logga in</button>
  </form>
</template>

<style></style>
