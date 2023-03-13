<script>
  export default {
    props: {
      moreInfo: { required: true, type: String },
      plantDescription: { required: true, type: String },
      pruningHeading: { required: true, type: String },
      pruningInfo: { required: true, type: String },
      bugHeading: { required: true, type: String },
      bugInfo: { required: true, type: String }
    }
  }
</script>

<template>
  <div class="moreInfo">
    <h2 id="more-info-heading">{{ moreInfo }}</h2>
    <p id="more-info-text">{{ plantDescription }}</p>
  </div>

  <div class="textBox">
    <div class="prunBugDesc">
      <div class="pruning">
        <h5 class="heading">{{ pruningHeading }}</h5>
        <i class="bi bi-scissors" />
      </div>

      <p>{{ pruningInfo }}</p>
    </div>
    <div class="prunBugDesc">
      <div class="bug">
        <h5 class="heading">{{ bugHeading }}</h5>
        <i class="bi bi-bug" />
      </div>
      <p>{{ bugInfo }}</p>
    </div>
  </div>
</template>

<style>
  .moreInfo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .textBox {
    display: flex;
    flex-direction: column;
    width: 100%;
    /* max-width: 40%; */
  }
  .prunBugDesc {
    text-align: center;
    max-width: 500px;
  }
  .pruning {
    text-align: center;
  }
  .bug {
    text-align: center;
  }
  @media (min-width: 600px) {
    .textBox {
      display: flex;
      /* flex-direction: column; */
      width: 100%;
      text-align: center;
      justify-content: center;
      /* max-width: 40%; */
    }
  }
  @media (min-width: 1200px) {
    .moreInfo {
      display: flex;
      justify-content: center;
      width: 50%;
      align-items: center;
      flex-direction: column;
    }

    .textBox {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 40%;
    }
    .prunBugDesc {
      text-align: center;
      max-width: 500px;
    }
  }
  @media only screen and (max-width: 1600px) and (min-width: 1200px) {
    .pruning {
      margin-top: 20px;
    }
    #more-info-text {
      width: 300px;
    }
    #more-info-heading {
      width: 300px;
    }
  }
</style>
