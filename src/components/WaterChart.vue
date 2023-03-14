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
    name: 'BarChart',
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
            'augusti',
            'Sept',
            'okt',
            'Nov',
            'dec'
          ],
          datasets: [
            {
              label: 'Vatten-diagram, Aloe vera',
              backgroundColor: '#79B473',
              data: [5, 15, 50, 25, 15, 12, 24, 11, 14, 89]
            }
          ]
        }
      }
    }
  }
</script>
<template>
  <Bar :data="chartData" />
</template>
