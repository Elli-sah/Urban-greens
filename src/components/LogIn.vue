<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return { userName: '', password: '', users: null, showMessage: false }
    },
    created() {
      this.showMessage = false
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
          console.log('hej')
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
  <div v-if="showMessage">
    <p>Du verkar inte ha något konto!</p>
  </div>
</template>

<style></style>
