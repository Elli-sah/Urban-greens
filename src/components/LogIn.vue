<script>
  import { mapState } from 'vuex'
  import AWN from 'awesome-notifications'

  export default {
    data() {
      return {
        notifier: new AWN(),
        userName: '',
        password: '',
        createName: '',
        createUserName: '',
        createPassword: '',
        users: null,
        showMessage: false,
        showCreateForm: false,
        showLoginForm: true,
        showError: false,
        showWrongUser: false,
        showUserWarning: false,
        showPasswordWarning: false
      }
    },
    computed: {
      ...mapState({
        myState: (state) => state.users
      })
    },
    watch: {
      createUserName(value) {
        if (value.length < 5) {
          this.showUserWarning = true
        } else {
          this.showUserWarning = false
        }
      },
      createPassword(value) {
        if (value.length < 5) {
          this.showPasswordWarning = true
        } else {
          this.showPasswordWarning = false
        }
      }
    },
    methods: {
      AtLogin() {
        this.users = this.myState
        if (
          this.users[this.userName] !== undefined &&
          this.users[this.userName].password === this.password
        ) {
          this.$store.commit('addLoggedInUser', this.userName)
          this.notifier.success(`Välkommen ${this.users[this.userName].name}!`)
          this.$router.push('/')
        } else if (
          this.users[this.userName] !== undefined &&
          this.users[this.userName].password !== this.password
        ) {
          this.showWrongUser = true
        } else {
          this.showWrongUser = false
          this.showMessage = true
        }
      },
      createAccount() {
        this.showCreateForm = true
        this.showLoginForm = false
      },
      AtCreateAccount() {
        this.users = this.myState
        if (this.createUserName in this.myState) {
          this.showError = true
        } else {
          this.$store.commit('addUser', {
            user: this.createUserName,
            name: this.createName,
            password: this.createPassword
          })
          this.$store.commit('addLoggedInUser', this.createUserName)
          this.notifier.success(
            `Välkommen ${this.users[this.createUserName].name}!`
          )
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
  <div class="login-divs" v-show="showLoginForm">
    <form @submit.prevent="AtLogin">
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
    <div v-if="showWrongUser">
      <p>Fel användarnamn eller lösenord, försök igen!</p>
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
    <form @submit.prevent="AtCreateAccount">
      <label for="name">Namn</label
      ><input id="name" v-model="createName" required />
      <label for="create-user">Användarnamn</label
      ><input
        id="create-user"
        v-model="createUserName"
        required
        minlength="5"
      />
      <p v-if="showUserWarning" id="user-name-warning">
        Användarnamnet måste vara minst 5 tecken!
      </p>
      <label for="create-password">Lösenord</label
      ><input
        id="create-password"
        type="password"
        v-model="createPassword"
        required
        minlength="5"
      />
      <p v-if="showPasswordWarning" id="password-warning">
        Lösenordet måste vara minst 5 tecken!
      </p>
      <button id="create-btn" class="button" type="submit">Skapa konto</button>
      <i
        @click="backClick"
        id="back-arrow-icon"
        class="bi bi-arrow-left-circle"
      />
    </form>

    <p v-if="showError">Användarnamnet du har valt finns redan. Försök igen!</p>
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
  form {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  #user-name-warning {
    color: red;
    font-size: 0.8rem;
    position: absolute;
    top: 100px;
    left: 240px;
  }

  #password-warning {
    color: red;
    font-size: 0.8rem;
    position: absolute;
    top: 167px;
    left: 270px;
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
  @media (max-width: 650px) {
    #user-name-warning {
      font-size: 0.7rem;
      left: 210px;
    }

    #password-warning {
      font-size: 0.7rem;
      left: 240px;
    }
  }
  @media (max-width: 550px) {
    #user-name-warning {
      font-size: 0.7rem;
      top: 90px;
      left: 220px;
      width: 85px;
    }

    #password-warning {
      font-size: 0.7rem;
      top: 157px;
      left: 220px;
      width: 85px;
    }
  }
</style>
