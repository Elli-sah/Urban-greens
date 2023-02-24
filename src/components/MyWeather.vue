<script>
  import axios from 'axios'
  export default {
    created() {
      this.getLocation()
    },

    data() {
      return {
        temp: null,
        weather: null
      }
    },
    mounted() {
      this.getLocation()
    },
    methods: {
      getLocation() {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          const { latitude, longitude } = coords
          this.getWeatherData(latitude, longitude)
        })
      },
      getWeatherData(latitude, longitude) {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=522a9f3cd92ded5c0f211fd40fe17e5b`
          )
          .then((response) => {
            this.weather = response.data

            const fahrenheit = this.weather.main.temp
            const celsius = fahrenheit - 273.15
            this.temp = celsius.toFixed(1)
          })
      }
    }
  }
</script>

<template>
  <div v-if="temp !== null">
    <h3>Vädret hos dig</h3>
    <p>{{ temp }}℃</p>
  </div>
</template>
