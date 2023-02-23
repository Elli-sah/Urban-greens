import { createStore } from 'vuex'
// import VuexPersist from 'vuex-persist'

// const vuexLocal = new VuexPersist({
//   storage: window.localstorage
// })

// const mutations = {
//   increment(state) {
//     state.counter += 1
//   }
// }

// const usersModules = {
//   state: {
//     users: {
//       klarab: {
//         name: 'Klara',
//         password: 'klarab',
//         favorites: []
//       },
//       sannaa: {
//         name: 'Sanna',
//         password: 'sannaa',
//         favorites: []
//       },
//       ellinors: {
//         name: 'Ellinor',
//         password: 'ellinors',
//         favorites: []
//       },
//       tovek: {
//         name: 'Tove',
//         password: 'tovek',
//         favorites: []
//       },
//       isabelll: {
//         name: 'Isabell',
//         password: 'isabelll',
//         favorites: []
//       }
//     },
//     loggedInUser: ''
//   },
//   mutations: {
//     addUser(state, newUser) {
//       state.users[newUser.userName] = {
//         name: newUser.name,
//         password: newUser.password,
//         favorites: []
//       }
//     }
//   }
// }

const state = {
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

  loggedInUser: '',
  searchText: ''
}
const mutations = {
  logutUser(state) {
    state.loggedInUser = ''
  },
  setSearchText(state, searchText) {
    state.searchText = searchText
  },
  addLoggedInUser(state, loggedUser) {
    state.loggedInUser = {
      user: loggedUser,
      name: state.users[loggedUser].name
    }
  },
  addUser(state, newUser) {
    state.users[newUser.user] = {
      name: newUser.name,
      password: newUser.password,
      favorites: []
    }
  },
  addPlant(state, newPlant) {
    state.users[newPlant.user].favorites.push(newPlant.addplant)
  }
}
const actions = {}

// createStore.Store({
//   modules: {
//     userObjects: usersModules
//   },
//   plugins: [
//     new VuexPersist({
//       modules: {
//         userObjects: {
//           path: ['users']
//         }
//       }
//     })
//   ]
// })

export default createStore({ mutations, state, actions, strict: true })
