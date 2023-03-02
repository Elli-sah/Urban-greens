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
        logedInName: '',
        showCreateForm: false,
        showLoginForm: true,
        showError: false
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
          this.$router.push('/')
        } else {
          console.log('hejdå')
          this.showMessage = true
        }
      },
      createAccount() {
        this.showCreateForm = true
        this.showLoginForm = false
      },
      AtCreateAccount() {
        if (this.createUserName in this.myState) {
          this.showError = true
        } else {
          this.$store.commit('addUser', {
            user: this.createUserName,
            name: this.createName,
            password: this.createPassword
          })
          this.$store.commit('addLoggedInUser', this.createUserName)
          this.$router.push('/')
        }
      },
      backClick() {
        this.showCreateForm = false
        this.showLoginForm = true
      }
    }
  }
</script>

<template>
  <div class="login-divs">
    <h1>Logga in</h1>
    <p>
      Att logga in på Urban Greens ger dig tillgång till en mer personlig
      upplevelse med skräddarsydda funktioner. Skapa din egen fönsterbräda med
      dina växter för att få en översikt över hur dina växter ska tas omhand.
    </p>
  </div>
  <div class="login-divs" v-show="showLoginForm">
    <form @submit.prevent="AtLogin" class="form">
      <label for="username">Användarnamn</label
      ><input id="username" v-model="userName" required minlength="5" />
      <label for="password">Lösenord</label
      ><input
        id="password"
        type="password"
        v-model="password"
        required
        minlength="5"
      />
      <button id="login-btn" class="button" type="submit">Logga in</button>
    </form>
    <div v-if="logedInMessage">
      <h2>Välkommen {{ logedInName }}!</h2>
    </div>
    <div v-if="showMessage">
      <p>Du verkar inte ha något konto!</p>
    </div>
    <p id="p-ingetkonto">Har du inget konto än?</p>
    <button
      @click="createAccount"
      type="button"
      id="button-secondary"
      class="btn btn-link"
    >
      Skapa konto
    </button>
  </div>
  <div class="login-divs" v-show="showCreateForm">
    <h2>Skapa konto</h2>
    <form @submit.prevent="AtCreateAccount" class="form">
      <label for="name">Namn</label
      ><input id="name" v-model="createName" required />
      <label for="create-user">Användarnamn</label
      ><input
        id="create-user"
        v-model="createUserName"
        required
        minlength="5"
      />
      <label for="create-password">Lösenord</label
      ><input
        id="create-password"
        type="password"
        v-model="createPassword"
        required
        minlength="5"
      />
      <button id="create-btn" class="button" type="submit">Skapa konto</button>
      <i
        @click="backClick"
        id="back-arrow-icon"
        class="bi bi-arrow-left-circle"
      />
    </form>
    <div v-if="showError">
      <p>Användarnamnet du har valt finns redan. Försök igen!</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  input {
    border-radius: 30px;
    border-style: none;
    padding: 7px;
    margin-bottom: 5px;
  }
  p {
    padding: 0;
  }

  .login-divs {
    width: 90%;
    max-width: 560px;
    margin: auto;
    padding: 20px;
  }
  .form {
    display: flex;
    flex-direction: column;
  }

  #login-btn,
  #create-btn {
    margin-left: 0;
  }

  i {
    margin-left: 5px;
    font-size: 1.2rem;
  }

  #p-ingetkonto {
    margin-bottom: 0;
  }

  #button-secondary {
    color: black;
    font-size: 0.8rem;
  }
</style>
