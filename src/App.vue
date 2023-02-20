<script>
  import NavBar from './components/NavBar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>

<template>
  <nav>
    <ul>
      <li>
        <RouterLink to="/">Hem</RouterLink>
      </li>
      <li>
        <RouterLink to="/login">Logga in</RouterLink>
      </li>
      <li>
        <RouterLink to="/plantlist/all">Växtguide</RouterLink>
      </li>
    </ul>
  </nav>
  <!-- <HelloWorld msg="Hello World!" />
  <CitiesList />
  <CounterButton /> -->
  <main>
    <RouterView />
  </main>
</template>
