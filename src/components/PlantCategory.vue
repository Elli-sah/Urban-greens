<script></script>

<template>
  <h3><strong>Kategorier</strong></h3>
  <div id="plantBoxContainer">
    <RouterLink class="link-dark text-decoration-none" to="/plantlist">
      <div class="plantBoxCategory">
        <h4>Alla växter</h4>

        <div>
          <img
            class="categoryPic"
            src="../../assets/Växter/feey-z-7QuRoqCE4-unsplash.jpg"
            alt="Alla växter"
          />
        </div></div
    ></RouterLink>
    <RouterLink class="link-dark text-decoration-none" to="/plantlist/Blommande"
      ><div class="plantBoxCategory">
        <div>
          <h4>Blommande växter</h4>
          <img
            class="categoryPic"
            src="../../assets/Växter/primrose-g26a64e07b_1920.jpg"
            alt="Blommande växter"
          />
        </div></div
    ></RouterLink>
    <RouterLink class="link-dark text-decoration-none" to="plantlist/Suckulent"
      ><div class="plantBoxCategory">
        <div>
          <h4>Suckulenter</h4>

          <img
            class="categoryPic"
            src="../../assets/Växter/feey-nU9U66FMutc-unsplash.jpg"
            alt="Suckulenter"
          />
        </div></div
    ></RouterLink>
    <RouterLink
      class="link-dark text-decoration-none"
      to="/plantlist/Gröna växter"
      ><div class="plantBoxCategory">
        <div>
          <h4>Gröna Växter</h4>

          <img
            class="categoryPic"
            src="../../assets/Växter/feey-R0_-WVpFQRI-unsplash.jpg"
            alt="Gröna Växter"
          />
        </div></div
    ></RouterLink>
    <RouterLink
      class="link-dark text-decoration-none"
      to="/plantlist/Giftiga_växter"
      ><div class="plantBoxCategory">
        <div>
          <h4>Giftiga Växter</h4>

          <img
            class="categoryPic"
            src="../../assets/Växter/eslah-saad-QszuWY_zo7k-unsplash.jpg"
            alt="Giftiga Växter"
          />
        </div></div
    ></RouterLink>
  </div>
</template>

<style lang="scss" scoped>
  h3 {
    display: flex;
    justify-content: center;
    margin: 30px;
    margin-top: 200px;
  }
  h4 {
    margin-top: 15px;
    display: flex;
    justify-content: center;
  }
  .plantBoxCategory {
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
    align-items: center;
  }
  .categoryPic {
    object-fit: cover;
    border-radius: 15px;
    margin: 5px 20px 20px 20px;
    padding: 10px;
    width: 220px;
    height: 220px;
  }

  #plantBoxContainer {
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    white-space: nowrap;
    flex-wrap: nowrap;
  }
</style>
