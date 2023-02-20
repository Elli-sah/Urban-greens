import { createStore } from 'vuex'

const mutations = {
    increment(state) {
      state.counter += 1
    }
  },
  state = {
    users: {
      klarab: {
        password: 'klarab',
        favorites: []
      },
      sannaa: {
        password: 'sannaa',
        favorites: []
      },
      ellinors: {
        password: 'ellinors',
        favorites: []
      },
      tovek: {
        password: 'tovek',
        favorites: []
      },
      isabelll: {
        password: 'isabelll',
        favorites: []
      }
    }
  }

export default createStore({ mutations, state, strict: true })
