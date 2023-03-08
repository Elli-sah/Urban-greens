<script>
  export default {}
</script>
<template>
  <div id="plantInfoContainer">
    <div id="plantShortInfo" v-if="!selectedPlant">
      <h1>{{ plant.name }}</h1>

      <h3>{{ plant.latin }}</h3>

      <hr class="line" />
      <div id="plantContainer">
        <div class="plantDesc">
          <!-- <p>Placering:</p> -->
          <div class="plantPlace">
            <i
              @click="
                openModal(
                  plant,
                  plant.placement.plantHeading,
                  plant.placement.description
                )
              "
              class="bi bi-brightness-high icons-hover"
              style="font-size: 2em"
            />

            <div>
              <p class="shortText title">Placering</p>
              <p class="shortText">{{ plant.placement.short }}</p>
            </div>
          </div>
          <!-- <p>Temp:</p> -->
          <div class="plantTemp">
            <i
              @click="
                openModal(
                  plant,
                  plant.temperature.plantHeading,
                  plant.temperature.description
                )
              "
              class="bi bi-thermometer-low icons-hover"
              style="font-size: 2em"
            />

            <div>
              <p class="shortText title">Temperatur</p>
              <p class="shortText">
                {{ plant.temperature.short }}
              </p>
            </div>
          </div>
        </div>
        <div class="plantDescTwo">
          <div class="plantWater">
            <i
              @click="
                openModal(
                  plant,
                  plant.watering.plantHeading,
                  plant.watering.description
                )
              "
              class="bi bi-moisture iconsize icons-hover"
              style="font-size: 2em"
            />

            <div>
              <p class="shortText title">Bevattning</p>
              <p class="shortText">{{ plant.watering.short }}</p>
            </div>
          </div>
          <div class="plantFert">
            <i
              @click="
                openModal(
                  plant,
                  plant.fertilization.plantHeading,
                  plant.fertilization.description
                )
              "
              class="bi bi-flower1 icons-hover"
              style="font-size: 2em"
            />

            <div>
              <p class="shortText title">Näring</p>
              <p class="shortText">{{ plant.fertilization.short }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #plantInfoContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  #plantShortInfo {
    flex-direction: column;
    text-align: center;

    display: flex;
    justify-content: center;
  }
  #plantContainer {
    text-align: center;
    position: relative;
  }
</style>
