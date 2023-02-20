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
      }
    }
  }

export default createStore({ mutations, state, strict: true })
