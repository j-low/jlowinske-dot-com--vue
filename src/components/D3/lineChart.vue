<template>
  <div id="line-chart-container"></div>
</template>

<script>
import * as d3 from 'd3';
import lineChart from './lineChartScript'

export default {
  name: 'lineChart',
  mounted: mounted
}

function mounted() {
  lineChart.init();
}
</script>

<style lang="scss" scoped>

svg {
  font: 10px sans-serif;
  cursor: default;
  background: #dddddd;
}

.axis {

  path, line {
    fill: none;
    stroke: #333333;
    shape-rendering: crispEdges;
  }
}

.line {
  fill: none;
  stroke: #6699cc;
  stroke-width: 1.5px;
}

circle {
  padding: 2px;
}

.info {
  font-weight: bold;
  font-style: italic;
  font-size: 12px;
  font-family: Times, "Times New Roman", Georgia, serif;
  fill: #333333;
}

.info-circle {
  fill: none;
  stroke: #333333;
}

.textbox {
  opacity: 0;

  text {
    fill: #333333;
  }

  .date {
    font-weight: bold;

  }

  rect {
    stroke: #333333;
    fill: #ffffff;
  }
}
</style>
