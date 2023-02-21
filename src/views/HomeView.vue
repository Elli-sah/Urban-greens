<script>
  // import axios from 'axios'
  // export default {
  //   created() {
  //     this.axiosGetPlants()
  //   },

  //   data() {
  //     return {
  //       result: ''
  //     }
  //   },

  //   methods: {
  //     axiosGetPlants() {
  //       axios.get('/plants.json').then((response) => {
  //         this.result = response.data
  //       })
  //     }
  //   }
  // }
</script>

<template>
  <div id="start-div">
    <h1>BRAND NAME</h1>
    <p id="slogan">Don’t kill your plants</p>
    <p>
      Upptäck en värld av grönska med BRANDNAMN! Hitta och lär dig om olika
      växtarter och deras skötselråd med vår omfattande databas. Få påminnelser
      om när det är dags att vattna eller gödsla dina växter och håll dem friska
      och glada. Lär dig allt du behöver veta om att odla växter med vår
      växt-app!
    </p>
    <RouterLink to="/login">
      <button class="button">Kom igång</button>
    </RouterLink>
  </div>
  <!-- <h1>ProduktListan</h1>
  <ul v-for="plant in result" :key="plant">
    <li>{{ plant.name }}</li>
    <img :src="plant.image" alt="" />
  </ul> -->
</template>

<style lang="scss"></style>
