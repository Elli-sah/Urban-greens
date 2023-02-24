<script>
  import PlantCategory from '../components/PlantCategory.vue'

  export default {
    components: {
      PlantCategory
    }
  }
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
    <!-- <PlantSearch /> -->
    <img
      id="primary-logo"
      src="../../assets/Logo-primary-svart.png"
      alt="Primary logo"
    />
    <h2 id="slogan">Don’t kill your plants!</h2>

    <p>
      Upptäck en värld av grönska med Urban Greens. Hitta och lär dig om olika
      växtarter och deras skötselråd med vår omfattande databas. Få påminnelser
      om när det är dags att vattna eller ge näring till dina växter och håll
      dem friska och glada. Lär dig allt du behöver veta om att odla växter med
      oss!
    </p>
    <RouterLink to="/get_started">
      <button id="kom-igang" class="button">Kom igång</button>
    </RouterLink>

    <PlantCategory />
    <div id="text-container">
      <div id="start-text-middle">
        <p id="text-2">
          <strong>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
            quia, saepe doloremque corrupti suscipit magnam vel maiores a id
            quaerat amet eaque, libero aspernatur excepturi alias assumenda sed
            fugit ipsam.
          </strong>
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #start-div {
    height: 220vh;
  }

  #primary-logo {
    margin-left: 20px;
    width: 80%;
    height: auto;
  }

  #slogan {
    display: flex;
    margin-left: 50px;
  }
  #kom-igang {
    margin: 30px;
  }
  #start-text-middle {
    display: flex;
    width: 400px;
    border-radius: 10px;
    margin-top: 100px;
    padding: 20px;
    text-align: center;
  }
  #text-2 {
    font-size: large;
  }

  #text-container {
    display: flex;
  }
</style>
