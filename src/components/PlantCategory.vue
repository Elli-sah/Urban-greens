<script></script>

<template>
  <div id="plantBoxContainer">
    <div class="plantBoxCategory" @click="category = 'all'">
      <h2>Alla växter</h2>

      <div>
        <img
          class="categoryPic"
          src="../../assets/Växter/feey-z-7QuRoqCE4-unsplash.jpg"
          alt="Alla växter"
        />
      </div>
    </div>
    <div class="plantBoxCategory" @click="category = 'Blommande'">
      <div>
        <h2>Blommande växter</h2>
        <img
          class="categoryPic"
          src="../../assets/Växter/primrose-g26a64e07b_1920.jpg"
          alt="Blommande växter"
        />
      </div>
    </div>
    <div class="plantBoxCategory" @click="category = 'Suckulent'">
      <div>
        <h2>Suckulenter</h2>
        <img
          class="categoryPic"
          src="../../assets/Växter/feey-nU9U66FMutc-unsplash.jpg"
          alt="Suckulenter"
        />
      </div>
    </div>
    <div class="plantBoxCategory" @click="category = 'Gröna växter'">
      <div>
        <h2>Gröna Växter</h2>
        <img
          class="categoryPic"
          src="../../assets/Växter/feey-R0_-WVpFQRI-unsplash.jpg"
          alt="Gröna Växter"
        />
      </div>
    </div>
    <div class="plantBoxCategory" @click="category = 'Giftiga växter'">
      <div>
        <h2>Giftiga Växter</h2>
        <img
          class="categoryPic"
          src="../../assets/Växter/eslah-saad-QszuWY_zo7k-unsplash.jpg"
          alt="Giftiga Växter"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
  h2 {
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
    border-radius: 30px;
    margin: 5px 20px 20px 20px;
    padding: 10px;
    width: 250px;
    height: 290px;
  }

  #plantBoxContainer {
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    white-space: nowrap;
    flex-wrap: nowrap;
  }
</style>
