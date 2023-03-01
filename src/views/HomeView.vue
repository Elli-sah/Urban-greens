<script>
  import PlantCategory from '../components/PlantCategory.vue'
  import { mapState } from 'vuex'

  export default {
    components: {
      PlantCategory
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
    }
  }
</script>

<template>
  <div id="start-div">
    <div id="welcome-popup" v-show="loggedInUser !== ''">
      <p>Välkommen {{ loggedInUser.name }}!</p>
    </div>

    <img
      id="primary-logo"
      src="../../assets/Logo-primary-svart.png"
      alt="Primary logo"
    />
    <h2 id="slogan">Don’t kill your plants!</h2>
    <div id="div-desktop">
      <p>
        Upptäck en värld av grönska med Urban Greens. Hitta och lär dig om olika
        växtarter och deras skötselråd med vår omfattande databas. Få
        påminnelser om när det är dags att vattna eller ge näring till dina
        växter och håll dem friska och glada. Lär dig allt du behöver veta om
        att odla växter med oss!
      </p>
      <RouterLink to="/get_started">
        <button id="kom-igang" class="button">Kom igång</button>
      </RouterLink>
    </div>

    <PlantCategory />
    <!-- <div id="text-container">
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
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
  #start-div {
    height: 150vh;
  }

  #welcome-popup {
    position: absolute;
    top: 70px;
    left: 50%;
    margin-left: -90px;
    width: 200px;
  }

  #welcome-popup > p {
    font-size: 1rem;
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
  // #start-text-middle {
  //   display: flex;
  //   width: 400px;
  //   border-radius: 10px;
  //   margin-top: 100px;
  //   padding: 20px;
  //   text-align: center;
  // }
  // #text-2 {
  //   font-size: large;
  // }

  // #text-container {
  //   display: flex;
  // }

  @media (min-width: 800px) {
    #primary-logo {
      margin-top: 20px;
      width: 50%;
    }

    #welcome-popup {
      visibility: hidden;
    }

    p {
      width: 50%;
      // font-size: 1.2rem;
      padding-left: 30px;
    }
    #div-desktop {
      display: flex;
    }
    #kom-igang {
      border-radius: 50%;
      height: 120px;
      width: 120px;

      font-size: 0.9rem;
    }

    #slogan {
      margin-left: 85px;
    }
  }
</style>
