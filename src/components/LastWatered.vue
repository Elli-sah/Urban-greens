<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState({
        dateDiff: (state) => state.dateDiff
      })
    }
  }
</script>

<template>
  <transition class="slide-in-enter-active" name="slide-in">
    <div id="watered-div" v-if="dateDiff !== ''">
      <i class="bi bi-droplet-fill" />
      <p v-if="dateDiff.includes('timmar')">Du vattnade idag</p>
      <p v-else>
        Du vattnade för <strong> {{ dateDiff }} </strong> sedan
      </p>
    </div>
  </transition>
</template>

<style scoped>
  #watered-div {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    background-color: white;
    border-radius: 20px;
    height: 100px;
  }

  i {
    font-size: 20px;
    margin-right: 10px;
  }

  p {
    margin: 0;
  }

  .slide-in-enter-active {
    animation: slide-in 1s forwards;
  }

  @keyframes slide-in {
    from {
      transform: translateX(-200%);
    }
    to {
      transform: translateX(0);
    }
  }
</style>
