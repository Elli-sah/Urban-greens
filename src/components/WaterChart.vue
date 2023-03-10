<template>
  <div>
    <canvas id="watering-chart" />
  </div>
</template>

<script>
  import Chart from 'chart.js'

  export default {
    mounted() {
      const ctx = document.getElementById('watering-chart').getContext('2d')
      const myChart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ],
          datasets: [
            {
              label: 'Watering Frequency',
              data: [1, 2, 4, 5, 3, 2, 1, 1, 2, 3, 4, 5],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
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
      })
      this.myChart = myChart
    },
    data() {
      return {
        myChart: null
      }
    }
  }
</script>
