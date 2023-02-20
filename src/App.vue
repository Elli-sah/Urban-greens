<script>
  import NavBar from './components/NavBar.vue'

  export default {
    components: {
      NavBar
    }
  }
</script>

<template>
  <!-- <HelloWorld msg="Hello World!" />
  <CitiesList />
  <CounterButton /> -->
  <main>
    <RouterView />
  </main>
</template>
