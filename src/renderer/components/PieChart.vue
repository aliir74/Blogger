<template>

    <div>
        <button @click="test" type="button" class="btn btn-primary"></button>
    </div>
</template>

<script>

    /*
import { Line } from 'vue-chartjs'

export default Line.extend({
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
}) */

import {Bar} from 'vue-chartjs'

export default Bar.extend({
  data: function () {
        console.log(this.renderChart(), 10)
        return {
          datacollection: {
            labels: ['January', 'February'],
            datasets: [
              {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 20]
              }
            ]
          }
        }
  },
  methods: {
        test: function () {
          this.renderChart(this.datacollection, {responsive: true, maintainAspectRatio: false})
        }
  }
})
</script>
