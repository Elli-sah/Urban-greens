<script>
  import PlantCategory from '../components/PlantCategory.vue'
  // import PlantSearch from '../components/PlantSearch.vue'

  export default {
    components: {
      PlantCategory
      // PlantSearch
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
      id="primarylogo"
      src="../../assets/Logo-primary-svart.png"
      alt="Primary logo"
    />
    <h2 id="slogan">Don’t kill your plants!</h2>

    <p>
      Upptäck en värld av grönska med BRANDNAMN! Hitta och lär dig om olika
      växtarter och deras skötselråd med vår omfattande databas. Få påminnelser
      om när det är dags att vattna eller gödsla dina växter och håll dem friska
      och glada. Lär dig allt du behöver veta om att odla växter med vår
      växt-app!
    </p>
    <RouterLink to="/login">
      <button id="komIgang" class="button">Kom igång</button>
    </RouterLink>
    <PlantCategory />
    <!-- <div id="spaceBetween">
      <p>hej</p>
    </div>
    <div id="textContainer">
      <div id="startTextMiddle">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
          quia, saepe doloremque corrupti suscipit magnam vel maiores a id
          quaerat amet eaque, libero aspernatur excepturi alias assumenda sed
          fugit ipsam.
        </p>
      </div>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
  #primarylogo {
    width: 50%;
    height: auto;
  }

  #slogan {
    display: flex;
    margin-left: 50px;
  }
  #komIgang {
    margin: 30px;
  }
  #startTextMiddle {
    display: flex;
    background-color: aliceblue;
    width: 300px;
  }
  p {
    text-align: center;
    width: 300px;
  }
  #textContainer {
    display: flex;

    flex-direction: column;
  }
</style>
