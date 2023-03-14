<template>
  <div>
    <Line id="line" ref="chart" />
  </div>
</template>

<script>
  import Chart from 'chart.js'
  // import line from 'vue-chartjs'
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
    name: 'LineChart',
    // components: { line },
    // data() {
    //   return {
    //     result: ''
    //   }
    // }
    props: {
      plantData: {
        type: Object,
        required: true
      }
    },
    mounted() {
      this.createChart()
    },
    methods: {
      createChart() {
        const Canvas = this.$refs.chart
        const chartData = {
          labels: this.getLabels(),
          datasets: [
            {
              label: 'Watering',
              type: 'line',
              data: this.getData(),
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }
          ]
        }
        const chartOptions = {
          responsive: true,
          title: {
            display: true,
            text: `${this.plantData.name} Watering Schedule`
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
        this.chart = new Chart(Canvas, {
          type: 'line',
          data: chartData,
          options: chartOptions
        })
      }
      //   getLabels() {
      //     const labels = []
      //     for (let i = 0; i < this.plantData.water_schedule.length; i++) {
      //       const day = this.plantData.water_schedule[i]
      //       labels.push(day.date)
      //     }
      //     return labels
      //   },
      //   getData() {
      //     const data = []
      //     for (let i = 0; i < this.plantData.water_schedule.length; i++) {
      //       const day = this.plantData.water_schedule[i]
      //       data.push(day.water)
      //     }
      //     return data
      //   }
    }
  }
</script>
