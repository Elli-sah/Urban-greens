<script>
  import PlantCategory from '../components/PlantCategory.vue'

  export default {
    components: {
      PlantCategory
    }
  }
</script>

<template>
  <div id="start-div">
    <img
      id="primary-logo"
      src="../../assets/Logo-primary-svart.png"
      alt="Primary logo"
    />
    <h2 id="slogan">Don’t kill your plants!</h2>
    <div id="div-desktop">
      <p>
        Upptäck en värld av grönska med Urban Greens. Hitta och lär dig om olika
        växtarter och deras skötsel med vår omfattande databas. Få påminnelser
        om när det är dags att vattna eller ge näring till dina växter och håll
        dem friska och glada. Lär dig allt du behöver veta om att odla växter
        med oss!
      </p>
      <RouterLink to="/get_started">
        <button id="kom-igang" class="button">Kom igång</button>
      </RouterLink>
    </div>

    <PlantCategory />
  </div>
</template>

<style lang="scss" scoped>
  #start-div {
    height: 150vh;
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

  @media (min-width: 800px) {
    #start-div {
      padding-top: 15px;
    }

    #primary-logo {
      margin-top: 20px;
      width: 50%;
    }

    p {
      width: 50%;
      padding-left: 30px;
    }

    #div-desktop {
      display: flex;
      align-items: center;
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
