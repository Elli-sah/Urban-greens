<script>
  import NavBar from './components/NavBar.vue'
  import MyFooter from './components/MyFooter.vue'
  import PageLoader from './components/PageLoader.vue'

  export default {
    components: {
      NavBar,
      MyFooter,
      PageLoader
    },
    data() {
      return {
        loading: true
      }
    },
    mounted() {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  }
</script>

<template>
  <div v-if="loading" class="overlay">
    <PageLoader />
  </div>
  <div v-else>
    <NavBar />
    <main>
      <RouterView />
    </main>
    <MyFooter />
  </div>
</template>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #e1ba6b;
    z-index: 9999;
  }
</style>
