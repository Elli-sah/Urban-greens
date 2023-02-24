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
    <div class="container p-3">
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
          <h6 class="text-uppercase mb-0">Kontakt</h6>

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
          <!-- <div class="row d-flex justify-content-center">
            <div class="col-auto">
              <p class="pt-2">
                <strong>Prenumerera på vårat nyhetsbrev</strong>
              </p>
            </div>

            <div class="col-md-5 col-12">
              <div class="form-outline form-white mb-4">
                <input
                  type="email"
                  id="newsletter"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
            </div>

            <div class="col-auto">
              <button type="submit" class="btn btn-outline-dark mb-4">
                Prenumerera
              </button>
            </div>
          </div> -->
          <div id="policy" class="text-center">
            <ul class="list-unstyled">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
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
    width: 100px;
  }
  li {
    font-size: small;
  }
</style>
