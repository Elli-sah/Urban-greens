import { createStore } from 'vuex'
import vuexLocal from './vuexPersist'

const state = {
  users: {
    klarab: {
      name: 'Klara',
      password: 'klarab',
      favorites: [],
      calendar: [],
      isAdmin: true
    },
    sannaa: {
      name: 'Sanna',
      password: 'sannaa',
      favorites: [],
      calendar: [],
      isAdmin: true
    },
    ellinors: {
      name: 'Ellinor',
      password: 'ellinors',
      favorites: [],
      calendar: [],
      isAdmin: true
    },
    tovek: {
      name: 'Tove',
      password: 'tovek',
      favorites: [],
      calendar: [],
      isAdmin: true
    },
    isabell: {
      name: 'Isabell',
      password: 'isabelll',
      favorites: [],
      calendar: [],
      isAdmin: true
    }
  },

  plantTips: {},

  loggedInUser: '',
  dateDiff: '',
  searchText: ''
}

const mutations = {
  RESTORE_MUTATION: vuexLocal.RESTORE_MUTATION,

  setPlantTip(state, tipAndId) {
    let plantId = state.plantTips[tipAndId.id]

    if (plantId) {
      plantId.tips.unshift({
        tip: tipAndId.tip,
        user: tipAndId.user,
        name: tipAndId.name
      })
    } else {
      let tempTip = { tips: [] }
      tempTip.tips.unshift({
        tip: tipAndId.tip,
        user: tipAndId.user,
        name: tipAndId.name
      })
      state.plantTips[tipAndId.id] = tempTip
    }
  },
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
      calendar: [],
      isAdmin: false
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
  },
  emptyDateDiff(state) {
    state.dateDiff = ''
  }
  // EmptyFavorites(state) {
  //   state.users[state.loggedInUser.user].favorites.length = 0
  // }
}
const plugins = [vuexLocal.plugin]

export default createStore({ mutations, state, plugins, strict: true })
