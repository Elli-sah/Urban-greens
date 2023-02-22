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
    <i @click="addPlant" class="bi bi-suit-heart-fill">
      <RouterLink :to="`/plant/${plant.name}`">
        <img alt="" :src="plant.image" />
        <p>{{ plant.name }}</p>
      </RouterLink>
    </i>
  </div>
</template>

<style scoped>
  .plantBox {
    width: 300px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
  }
  img {
    width: 200px;
    height: 300px;
    border-radius: 10px;
    object-fit: cover;
  }
  p {
    font-weight: bold;
  }
</style>
