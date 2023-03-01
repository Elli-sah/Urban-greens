<script>
  import NavBar from './components/NavBar.vue'
  import MyFooter from './components/MyFooter.vue'
  export default {
    components: {
      NavBar,
      MyFooter
    }
  }
</script>

<template>
  <NavBar />
  <main>
    <RouterView />
  </main>
  <MyFooter />
</template>

<style lang="scss"></style>
