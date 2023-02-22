<script></script>

<template>
  <div id="plantBoxContainer">
    <div class="plantBoxCategory" @click="category = 'all'">
      <h4>Alla växter</h4>
      <img src="../../assets/Växter/feey-z-7QuRoqCE4-unsplash.jpg" alt="" />
    </div>
    <div class="plantBoxCategory" @click="category = 'Blommande'">
      <h4>Blommande växter</h4>
      <img src="../../assets/Växter/primrose-g26a64e07b_1920.jpg" alt="" />
    </div>
    <div class="plantBoxCategory" @click="category = 'Suckulent'">
      <h4>Suckulenter</h4>
      <img src="../../assets/Växter/feey-nU9U66FMutc-unsplash.jpg" alt="" />
    </div>
    <div class="plantBoxCategory" @click="category = 'Gröna växter'">
      <h4>Gröna Växter</h4>
      <img src="../../assets/fox.jpeg" alt="" />
    </div>
    <div class="plantBoxCategory" @click="category = 'Giftiga växter'">
      <h4>Giftiga Växter</h4>
      <img src="../../assets/fox.jpeg" alt="" />
    </div>
  </div>
</template>
<style scoped>
  .plantBoxCategory {
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 10px;
    border-radius: 10px;
    cursor: pointer;
  }
  #plantBoxContainer {
    display: flex;
    flex-direction: row;
    overflow-y: hidden;
    white-space: nowrap;
    /* display: flex; */
    flex-wrap: nowrap;
  }
</style>
