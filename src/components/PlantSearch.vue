<script>
  import axios from 'axios'

  export default {
    emits: ['link-clicked'],
    data() {
      return {
        result: [],
        category: 'all',
        name: 'all',
        searchText: ''
      }
    },

    methods: {
      handleClick() {
        this.searchText = ''
        this.$emit('link-clicked')
      },
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
              const lowerCaseCategory = plant.category.toLowerCase()
              const lowerCaseSearchText = this.searchText.toLowerCase()
              return (
                lowerCaseName.includes(lowerCaseSearchText) ||
                lowerCaseCategory.includes(lowerCaseSearchText)
              )
            } else {
              return true
            }
          })
        } else {
          return this.result.filter(
            (plant) =>
              plant.category === this.category &&
              (plant.name
                .toLowerCase()
                .includes(this.searchText.toLowerCase()) ||
                plant.category
                  .toLowerCase()
                  .includes(this.searchText.toLowerCase()))
          )
        }
      }
    }
  }
</script>

<template>
  <div id="search-div">
    <input
      id="searchfield"
      @input="onClickPlants"
      type="text"
      v-model="searchText"
      placeholder="Sök växter..."
    />

    <div>
      <div v-if="searchText !== ''" id="linkdiv">
        <span @click="handleClick">
          <b-link
            v-for="plant in filterdPlants"
            :key="plant.name"
            :to="`/plants/${plant.name}`"
            class="list-group-item"
          >
            {{ plant.name }}

            <p>
              {{ plant.category }}
            </p>
          </b-link>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
  input {
    width: 100%;
    padding: 10px;
    border-radius: 30px;
    border: none;
  }
  #linkdiv {
    display: block;
    height: 150px;
    overflow-x: scroll;
    position: absolute;
    background-color: rgba(225, 186, 107, 0.1);
    padding: 20px;
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

  @media (min-width: 992px) {
    #search-div {
      display: flex;
      flex-direction: column;
    }
    #searchfield {
      width: 350px;
    }
    #linkdiv {
      background-color: rgba(225, 186, 107, 0.9);
    }
  }
</style>
