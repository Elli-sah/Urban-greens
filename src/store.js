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
<<<<<<< HEAD
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
=======
  loggedInUser: ''
}

const mutations = {
  addUser(state, newUser) {
    state.users[newUser.user] = {
      name: newUser.name,
      password: newUser.password,
      favorites: []
    }
>>>>>>> 529a94e036bcce5c7fa6c9ce692bcbe30a8ac45a
  }
}

<<<<<<< HEAD

=======
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
>>>>>>> 529a94e036bcce5c7fa6c9ce692bcbe30a8ac45a
export default createStore({ mutations, state, strict: true })
