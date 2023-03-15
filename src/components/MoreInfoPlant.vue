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
  <div id="more-info">
    <h2 id="more-info-heading">{{ moreInfo }}</h2>
    <p id="more-info-text">{{ plantDescription }}</p>
  </div>

  <div id="text-box">
    <div class="desc">
      <div class="text-icon">
        <h5 class="heading">{{ pruningHeading }}</h5>
        <i class="bi bi-scissors" />
      </div>

      <p>{{ pruningInfo }}</p>
    </div>
    <div class="desc">
      <div class="text-icon">
        <h5 class="heading">{{ bugHeading }}</h5>
        <i class="bi bi-bug" />
      </div>
      <p>{{ bugInfo }}</p>
    </div>
  </div>
</template>

<style>
  #more-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  #text-box {
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
  .desc {
    text-align: center;
  }
  .text-icon {
    text-align: center;
  }

  @media (min-width: 900px) {
    #text-box {
      display: flex;
      text-align: center;
      justify-content: center;
    }
  }
  @media (min-width: 1200px) {
    #more-info {
      display: flex;
      justify-content: center;
      max-width: 40%;
      align-items: center;
      flex-direction: column;
    }

    #text-box {
      display: flex;
      flex-direction: column;
      max-width: 40%;
    }
    .desc {
      text-align: center;
      max-width: 500px;
    }
  }
</style>
