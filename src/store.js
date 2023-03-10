import { createStore } from 'vuex'
// import vuexPersist from './vuexPersist'
import vuexLocal from './vuexPersist'

const state = {
  users: {
    klarab: {
      name: 'Klara',
      password: 'klarab',
      favorites: [],
      calendar: []
    },
    sannaa: {
      name: 'Sanna',
      password: 'sannaa',
      favorites: [],
      calendar: []
    },
    ellinors: {
      name: 'Ellinor',
      password: 'ellinors',
      favorites: [],
      calendar: []
    },
    tovek: {
      name: 'Tove',
      password: 'tovek',
      favorites: [],
      calendar: []
    },
    isabelll: {
      name: 'Isabell',
      password: 'isabelll',
      favorites: [],
      calendar: []
    }
  },

  plantTips: {},

  loggedInUser: '',
  dateDiff: '',
  searchText: ''
}

// const plugins = [vuexLocal]
// const plugins = [vuexPersist.plugin]

const mutations = {
  RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,
  // SET_USERS(state, users) {
  //   state.users = { ...users }
  // },

  setPlantTip(state, tipAndId) {
    let plantId = state.plantTips[tipAndId.id]

    if (plantId) {
      plantId.tips.push(tipAndId.tip)
    } else {
      let temporaryTip = { tips: [] }
      temporaryTip.tips.push(tipAndId.tip)
      state.plantTips[tipAndId.id] = temporaryTip
    }
  },
  // removePlantTip(state, index) {
  //   state.plantTip.splice(index, 1)
  // },
  removePlantTip(state, deletePlantTip) {
    state.plantTips[deletePlantTip.id].tips.splice(deletePlantTip.index, 1)
  },
  logutUser(state) {
    state.loggedInUser = ''
    state.dateDiff = ''
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
      favorites: [],
      calendar: []
    }
  },
  addPlant(state, newPlant) {
    state.users[newPlant.user].favorites.push(newPlant.addplant)
  },
  removePlant(state, deletePlant) {
    state.users[deletePlant.user].favorites.splice(deletePlant.index, 1)
  },
  addEventToUserCalendar(state, event) {
    state.users[state.loggedInUser.user].calendar.push(event)
  },
  removeEvent(state, event) {
    state.users[event.user].calendar.splice(event.index, 1)
  },
  updateDateDiff(state, date) {
    state.dateDiff = date
  }
}
const plugins = [vuexLocal.plugin]

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

export default createStore({ mutations, state, plugins, strict: true })
