<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        userName: '',
        password: '',
        createName: '',
        createUserName: '',
        createPassword: '',
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
          this.$store.commit('addLoggedInUser', this.userName)
        } else {
          console.log('hejdå')
          this.showMessage = true
        }
      },
      AtCreateAccount() {
        this.$store.commit('addUser', {
          user: this.createUserName,
          name: this.createName,
          password: this.createPassword
        })
      }
    }
  }
</script>

<template>
  <h1>Logga in</h1>
  <p>
    Att logga in på Urban Greens ger dig tillgång till en mer personlig
    upplevelse med skräddarsydda funktioner. Dessutom får du tillgång till fler
    funktioner och tjänster som endast är tillgängliga för registrerade
    användare. Logga in ökar också säkerheten genom skydd av din personliga
    information och ger dig kontroll över dina åtgärder på plattformen. Sist men
    inte minst kan logga in göra det enklare för dig att återvända till
    plattformen och fortsätta där du slutade sist.
  </p>
  <form @submit.prevent="AtLogin" class="form">
    <label for="username">Användarnamn</label
    ><input id="username" v-model="userName" />
    <label for="password">Lösenord</label
    ><input id="password" type="password" v-model="password" />
    <button class="button" type="submit">Logga in</button>
  </form>
  <div v-if="logedInMessage">
    <h2>Välkommen {{ logedInName }}!</h2>
  </div>
  <div v-if="showMessage">
    <p>Du verkar inte ha något konto!</p>
  </div>
  <p>Eller..</p>
  <h2>Skapa konto</h2>
  <form @submit.prevent="AtCreateAccount" class="form">
    <label for="name">Namn</label><input id="name" v-model="createName" />
    <label for="create-user">Användarnamn</label
    ><input id="create-user" v-model="createUserName" />
    <label for="create-password">Lösenord</label
    ><input id="create-password" type="password" v-model="createPassword" />
    <button class="button" type="submit">Skapa konto</button>
  </form>
</template>

<style>
  .form {
    display: flex;
    flex-direction: column;
  }
</style>
