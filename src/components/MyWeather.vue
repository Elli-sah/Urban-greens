<script>
  import axios from 'axios'
  export default {
    created() {
      this.getLocation()
    },

    data() {
      return {
        temp: null,
        weather: null,
        img: null
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
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&lang=sv,se&appid=522a9f3cd92ded5c0f211fd40fe17e5b`
          )
          .then((response) => {
            this.weather = response.data

            const fahrenheit = this.weather.main.temp
            const celsius = fahrenheit - 273.15
            this.temp = celsius.toFixed(1)
            this.img = this.weather.weather[0].icon
            console.log(this.weather)
          })
      }
    }
  }
</script>

<template>
  <div v-if="temp !== null">
    <h3>Vädret hos dig</h3>
    <p>{{ temp }}℃</p>
    <img :src="`http://openweathermap.org/img/wn/${this.img}.png`" />
    <p v-if="this.temp > 15 && this.img === '01d'">
      Temperaturen hos dig är över 15℃ och sol...glöm inte bort att vattna dina
      växter, och skydda dom från direkt solljus då!
    </p>
    <p v-if="this.temp < 5 && this.img">
      Temperaturen hos dig är under 5℃... glöm inte bort och skydda dina växter
      från kalla luftdrag!
    </p>
  </div>
</template>

<style scoped>
  div {
    background-color: rgb(253, 253, 253);
  }
</style>
