<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        userName: '',
        password: '',
        users: null,
        showMessage: false,
        logedInMessage: false,
        logedInName: ''
      }
    },
    created() {
      this.showMessage = false
      this.logedInMessage = false
    },
    computed: {
      ...mapState({
        myState: (state) => state.users
      })
    },
    methods: {
      AtLogin() {
        this.users = this.myState
        if (
          this.users[this.userName] !== undefined &&
          this.users[this.userName].password === this.password
        ) {
          this.logedInName = this.users[this.userName].name
          console.log('hej')
          this.logedInMessage = true
        } else {
          console.log('hejdå')
          this.showMessage = true
        }
      }
    }
  }
</script>

<template>
  <h1>Logga in</h1>
  <form @submit.prevent="AtLogin">
    <label>Användarnamn <input v-model="userName" /></label>
    <label>Lösenord<input type="password" v-model="password" /></label>
    <button type="submit">Logga in</button>
  </form>
  <div v-if="logedInMessage">
    <h2>Välkommen {{ logedInName }}!</h2>
  </div>
  <div v-if="showMessage">
    <p>Du verkar inte ha något konto!</p>
  </div>
</template>

<style></style>
