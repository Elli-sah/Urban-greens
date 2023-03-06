<template>
  <div class="loader">
    <div class="spinner" />
  </div>
</template>

<style>
  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .spinner {
    width: 60px;
    height: 60px;
    border-top: 4px solid #465f41;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
