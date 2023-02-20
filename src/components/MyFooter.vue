<script>
  import 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<template>
  <footer id="footer">
    <div id="container">
      <div id="h1">
        <h1>Logga?</h1>
      </div>
      <div id="allFooterCat">
        <div id="about">
          <h4>Home</h4>
          <ul id="aboutUl">
            <li><a href="#">About Brand Name</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Jobba hos oss</a></li>
          </ul>
        </div>
        <div id="about">
          <h4>Brand name</h4>
          <ul id="aboutUl">
            <li><a href="#">About Brand Name</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Jobba hos oss</a></li>
          </ul>
        </div>
        <div id="about">
          <h4>About</h4>
          <ul id="aboutUl">
            <li><a href="#">About Brand Name</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Jobba hos oss</a></li>
          </ul>
        </div>
        <div id="contact">
          <h4>Contact</h4>
          <ul id="contactUl" class="list-unstyled">
            <li>Brand Name AB</li>
            <li>blablagatan 5</li>
            <li>543 23 Göteborg</li>
            <li>Email: Greenfingers@gmail.com</li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <section class="">
        <form action="">
          <div>
            <div>
              <p class="pt-2">
                <strong>Sign up for our newsletter</strong>
              </p>
            </div>

            <div id="form" class="col-md-5 col-12">
              <div class="form-outline form-white mb-4">
                <input type="email" id="form5Example29" class="form-control" />
              </div>
            </div>

            <div class="col-auto">
              <button type="submit" class="btn btn-outline-dark mb-4">
                Subscribe
              </button>
            </div>
            <div class="col-md-6">
              <ul id="policy" class="list-unstyled">
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </form>
      </section>
    </div>

    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      © 2023 Copyright: Brand-Name AB
    </div>
  </footer>
</template>

<style>
  #footer {
    width: 1440px;
    height: auto;
    font-family: poiret;
    background-color: rgba(49, 109, 24, 0.485);
  }

  footer p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }

  footer ul li {
    display: inline-block;
    margin-right: 1rem;
  }

  footer ul li a {
    color: black;
    text-decoration: none;
  }

  #nameIcon {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }

  #contact {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }

  #contactUl {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  #about {
    display: flex;
    flex-direction: column;
    width: fit-content;
  }

  #allFooterCat {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }

  #aboutUl {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  #form {
    margin-left: 70px;
  }

  #h1 {
    display: flex;
    justify-content: left;
    margin: 30px;
  }

  @font-face {
    font-family: poiret;
    src: url(../../assets/Poiret_One/PoiretOne-Regular.ttf);
  }
</style>
