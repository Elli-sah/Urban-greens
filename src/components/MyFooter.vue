<script>
  import 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import moment from 'moment'
  export default {
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
        <!-- <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Om oss</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-dark">Om oss</a>
            </li>
            <li>
              <a href="#!" class="text-dark">Vårt syfte</a>
            </li>
            <li>
              <a href="#!" class="text-dark">blabla</a>
            </li>
            <li>
              <a href="#!" class="text-dark">blablabla</a>
            </li>
          </ul>
        </div> -->

        <div class="col-lg text-center">
          <h5 class="text-uppercase mb-0">Kontakt</h5>

          <ul class="list-unstyled">
            <li>UrbanGreens & co</li>
            <li>0731234567</li>
            <li>Urbangreens@gmail.com</li>
            <li>BlablablaVägen 23</li>
            <li>22243 Lund</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="container p-4 pb-0">
      <section class="">
        <form action="">
          <div class="flex-column">
            <div class="col-auto d-flex justify-content-center">
              <p class="pt-2">
                <strong>Prenumerera på vårat nyhetsbrev</strong>
              </p>
            </div>

            <div class="col-auto d-flex justify-content-center">
              <div class="form-outline form-white mb-4 col-sm-6">
                <input
                  id="form"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
            </div>

            <div class="col-auto d-flex justify-content-center">
              <button type="submit" class="btn btn-outline-dark mb-4">
                Prenumerera
              </button>
            </div>
          </div>
          <div id="a-container">
            <div class="text-center">
              <ul
                id="policy"
                class="list-unstyled d-flex flex-row justify-content-center"
              >
                <li class="m-3"><a href="#">Terms of Service</a></li>
                <li class="m-3"><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <div id="shelf">
              <img
                id="shelf-img"
                src="./../../assets/shelf.png"
                alt="shelf-plant"
              />
            </div>
          </div>
        </form>
      </section>
    </div>
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © {{ currentYear }} Copyright:
      <a class="text-dark" href="#">UrbanGreens &co</a>
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
  h5 {
    font-weight: bolder;
    text-decoration: underline;
  }
  #shelf-img {
    margin: 0;
    width: 100px;
    width: 100px;
    margin-bottom: 20px;
  }
  .img-container {
    display: flex;
    flex-direction: row;
    justify-content: left;
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
  #policy {
    margin-left: 95px;
    margin-bottom: 0;
  }
</style>
