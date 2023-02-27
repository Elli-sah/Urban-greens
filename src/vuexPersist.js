import VuexPersistence from 'vuex-persist'

// const vuexPersist = new VuexPersistence({
//   key: 'my-app',
//   storage: localStorage
// })

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

// export default vuexPersist

export default vuexLocal
