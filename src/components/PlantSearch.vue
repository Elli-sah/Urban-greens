<script>
  import axios from 'axios'

  export default {
    // props: {
    //   plant: {
    //     type: Object,
    //     default: () => ({})
    //   }
    // },
    data() {
      return {
        result: [],
        category: 'all',
        name: 'all',
        searchText: ''
      }
    },

    methods: {
      axiosGetPlants() {
        axios.get('/plants.json').then((response) => {
          this.result = response.data
        })
      },
      onClickPlants() {
        this.axiosGetPlants()
      }
    },

    computed: {
      filterdPlants() {
        if (this.category === 'all') {
          return this.result.filter((plant) => {
            if (this.searchText) {
              const lowerCaseName = plant.name.toLowerCase()
              const lowerCaseSearchText = this.searchText.toLowerCase()
              return lowerCaseName.includes(lowerCaseSearchText)
            } else {
              return true
            }
          })
        } else {
          return this.result.filter(
            (plant) =>
              plant.category === this.category &&
              plant.name.toLowerCase().includes(this.searchText.toLowerCase())
          )
        }
      }
    },

    watch: {
      searchText(newValue) {
        console.log(newValue)
      }
    }
  }
</script>

<template>
  <input
    @input="onClickPlants"
    type="text"
    v-model="searchText"
    placeholder="Sök..."
  />
  <div>
    <div id="linkdiv">
      <b-link
        v-for="plant in filterdPlants"
        :key="plant.name"
        :to="`/plants/${plant.name}`"
        class="list-group-item"
      >
        {{ plant.name }}
      </b-link>
    </div>
  </div>
</template>

<style scoped>
  #linkdiv {
    display: block;
    height: 150px;
    overflow-x: scroll;
    position: absolute;
    background-color: rgba(225, 186, 107, 0.1);
  }
  div {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: start;
    gap: 10px;
    width: 100%;
    justify-content: center;
  }
  li {
    cursor: pointer;
  }
</style>
