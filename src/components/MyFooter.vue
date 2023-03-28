<script>
  import 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import moment from 'moment'
  export default {
    data() {
      return {
        email: '',
        showPopup: false
      }
    },

    methods: {
      Submit() {
        this.showPopup = true

        setTimeout(() => {
          this.hidePopup()
        }, 4000)
      },

      hidePopup() {
        this.showPopup = false
      }
    },
    computed: {
      currentYear() {
        return moment().format('YYYY')
      }
    }
  }
</script>

<template>
  <footer class="text-center text-lg-start">
    <div class="container p-3 img-container">
      <img
        id="foot-loggo"
        class="row d-flex justify-content-start"
        src="../../assets/Logo-primary-svart.png"
        alt="Loggo"
      />
    </div>
    <div class="container p-3">
      <div class="row">
        <div class="col-lg text-center">
          <h2 class="text-uppercase mb-0">Skapad av</h2>

          <ul class="list-unstyled">
            <li>Sanna Asp</li>
            <li>Ellinor Sahlberg</li>
            <li>Klara Bryntesson</li>
            <li>Isabell Leoson</li>
            <li>Tove Karlström</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container p-4 pb-0">
      <section class="">
        <form @submit.prevent="Submit" action="">
          <div class="flex-column">
            <div class="col-auto d-flex justify-content-center">
              <p class="pt-2">
                <strong>Prenumerera på vårat nyhetsbrev</strong>
              </p>
            </div>

            <div class="col-auto d-flex justify-content-center">
              <div class="form-outline form-white mb-4 col-sm-6">
                <input
                  id="email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                  v-model="email"
                />
              </div>
              <div v-if="showPopup" class="pop-up">
                <h3>Du prenumererar nu på vårat nyhetsbrev!</h3>
              </div>
            </div>

            <div class="col-auto d-flex justify-content-center">
              <button type="submit" class="btn btn-outline-light mb-4">
                Prenumerera
              </button>
            </div>
          </div>
          <div class="text-center">
            <ul
              id="policy"
              class="list-unstyled d-flex flex-row justify-content-center"
            >
              <li class="m-3">
                <a class="terms-and-policy" href="#">Terms of Service</a>
              </li>
              <li class="m-3">
                <a class="terms-and-policy" href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div id="shelf">
            <img
              id="shelf-img"
              src="./../../assets/shelfcrop.png"
              alt="shelf-plant"
            />
          </div>
        </form>
      </section>
    </div>
    <div
      class="text-center p-3 copyright"
      style="background-color: rgba(0, 0, 0, 0.2)"
    >
      © {{ currentYear }} Copyright:
      <a class="text-light" href="#"
        >Sanna Asp, Ellinor Sahlberg, Klara Bryntesson, Isabell Leoson, Tove
        Karlström
      </a>
    </div>
  </footer>
</template>

<style scoped>
  #foot-loggo {
    width: 150px;
    opacity: 30%;
    margin-bottom: 12px;
  }
  li {
    font-size: small;
  }
  .terms-and-policy {
    color: white;
  }
  .copyright {
    color: white;
  }

  h2 {
    font-weight: bolder;
    text-decoration: underline;
    font-size: 22px;
  }

  h3 {
    font-size: medium;
  }

  #shelf-img {
    width: 90px;
    height: auto;
    margin-bottom: 20px;
    margin-left: 50px;
    position: absolute;
    bottom: 40px;
    right: 10px;
  }

  .pop-up {
    position: fixed;
    top: 57%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f0e8e2;
    padding: 20px;
    width: 200px;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    z-index: 999;
    color: black;
  }
  @media (min-width: 500px) {
    #shelf-img {
      width: 130px;
    }
  }

  @media (min-width: 688px) {
    .pop-up {
      width: auto;
      top: 50%;
    }

    #policy {
      margin-bottom: 0;
    }
    #shelf-img {
      width: 170px;
    }

    #shelf {
      display: flex;
      justify-content: right;
    }
    #a-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      height: 70px;
    }
    h2 {
      font-size: 25px;
    }
  }

  @media (min-width: 1000px) {
    #shelf-img {
      width: 200px;
    }
  }
</style>
