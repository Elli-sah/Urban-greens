<script>
  import { Bar } from 'vue-chartjs'
  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  )

  export default {
    name: 'WaterChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [
            'Jan',
            'feb',
            'Mars',
            'april',
            'Maj',
            'juni',
            'Juli',
            'aug',
            'Sept',
            'okt',
            'Nov',
            'dec'
          ],
          datasets: [
            {
              label: 'Generellt Bevattnings-diagram för årets alla säsonger',
              backgroundColor: '#79B473',
              data: [1, 1.5, 2, 2.5, 2.5, 3, 3, 2.5, 2, 1.5, 1, 1]
            }
          ]
        },
        options: {
          scales: {
            y: {
              ticks: {
                callback: function (value) {
                  if (value === 1) {
                    return 'Sparsamt'
                  } else if (value === 1.5) {
                    return ''
                  } else if (value === 2) {
                    return 'Måttligt'
                  } else if (value === 2.5) {
                    return ''
                  } else if (value === 3) {
                    return 'Rikligt'
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</script>
<template>
  <Bar :data="chartData" :options="options" />
</template>
