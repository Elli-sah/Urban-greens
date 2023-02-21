<script>
  import axios from 'axios'

  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        result: ''
      }
    },
    methods: {
      axiosGetPlants() {
        axios.get('/plants.json').then((response) => {
          this.result = response.data
        })
      }
    },

    computed: {}
  }
</script>

<template>
  <h1>hej</h1>
</template>
