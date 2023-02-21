<script>
  export default {}
</script>

<style lang="scss"></style>

<template>
  <div>
    <b-navbar toggleable="lg" fixed="top">
      <div class="d-flex justify-content-between navbar">
        <h1 class="p-2">Brand Name</h1>
        <b-navbar-toggle target="nav-collapse" />
      </div>

      <div class="d-flex justify-content-end navbar">
        <div>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-form>
                <b-form-input
                  v-model="message"
                  size="sm"
                  class="mr-sm-2"
                  placeholder="Sök..."
                />

                <b-button variant="" size="m" class="my-2 my-sm-0" type="submit"
                  >Sök
                  <!-- <b-icon-{search} /> -->
                </b-button>
              </b-nav-form>

              <b-container>
                <b-row align="right">
                  <b-link class="nav-link" to="/login">Logga in</b-link>
                  <b-link class="nav-link" to="/">Hem</b-link>
                  <b-link class="nav-link" to="/plantlist/all"
                    >Växtguide</b-link
                  >
                </b-row>
              </b-container>
            </b-navbar-nav>
          </b-collapse>
        </div>
      </div>
    </b-navbar>
  </div>
</template>
