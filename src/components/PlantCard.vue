<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      plant: {
        type: Object,
        default: () => ({})
      }
    },
    data() {
      return {}
    },
    computed: {
      ...mapState({
        loggedInUser: (state) => state.loggedInUser
      })
    },
    methods: {
      addPlant() {
        this.$store.commit('addPlant', {
          user: this.loggedInUser.user,
          addplant: this.plant
        })
      }
    }
  }
</script>

<template>
  <div class="plantBox">
    <RouterLink :to="`/plants/${plant.name}`" class="plant-container">
      <img alt="plant.name" :src="plant.image[0]" />
      <h2>{{ plant.name }}</h2>
    </RouterLink>
    <i @click="addPlant" class="bi bi-suit-heart-fill" />
  </div>
</template>

<style lang="scss" scoped>
  .plantBox {
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
  }

  .plantBox:hover {
    transition: all 0.3s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.1);
    top: -4px;
  }
  .plant-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    align-self: center;
    // margin-top: 10px;
  }

  i {
    align-self: end;
  }

  h2 {
    margin-top: 5px;
  }

  img {
    width: 200px;
    height: 200px;
    border-radius: 10px;
    object-fit: cover;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    color: inherit;
  }
</style>
