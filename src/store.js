import { createStore } from 'vuex'
// import VuexPersist from 'vuex-persist'

// VuexPersist =
const mutations = {
    increment(state) {
      state.counter += 1
    }
  },
  state = {
    users: {
      klarab: {
        name: 'Klara',
        password: 'klarab',
        favorites: []
      },
      sannaa: {
        name: 'Sanna',
        password: 'sannaa',
        favorites: []
      },
      ellinors: {
        name: 'Ellinor',
        password: 'ellinors',
        favorites: []
      },
      tovek: {
        name: 'Tove',
        password: 'tovek',
        favorites: []
      },
      isabelll: {
        name: 'Isabell',
        password: 'isabelll',
        favorites: []
      }
    },
  }


export default createStore({ mutations, state, strict: true })
