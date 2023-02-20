<script></script>

<style>
  .navbar {
    background-color: #e8cac3;
  }
</style>

<template>
  <div>
    <b-navbar toggleable="lg" type="dark" fixed="top">
      <div class="d-flex justify-content-end">
        <h1 class="p-2">Brand Name</h1>
        <b-navbar-toggle target="nav-collapse" class="p-2" />
      </div>
      <div>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-form>
              <b-form-input size="sm" class="mr-sm-2" placeholder="Search" />
              <b-button size="sm" class="my-2 my-sm-0" type="submit"
                >Search</b-button
              >
            </b-nav-form>
          </b-navbar-nav>

          <b-navbar-nav>
            <b-link to="/">Home</b-link>
            <b-link to="/login">Logga in</b-link>
            <b-link to="/plantlist/all">Växtguide</b-link>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>
