<template>
  <div id="line-chart">
    <bg></bg>
    <line-chart-title></line-chart-title>
    <div class="content">
      <div id="line-chart-container"></div>
    </div>
  </div>
</template>

<script>
import bg from 'components/layout/bgOverUnder';
import lineChartTitle from 'components/D3/line-chart/lineChartTitle';

import lineChart from './lineChartScript'
import lineChartAnim from 'anim/D3/line-chart/lineChart';
var methods = {};
_.assign(methods, lineChartAnim);

export default {
  name: 'lineChart',
  methods: methods,
  mounted: mounted,
  components: {
    bg: bg,
    lineChartTitle: lineChartTitle
  },
  beforeRouteEnter: function(t, f, next) {
    next(function() {
     methods.beforeRouteEnter(t, f)
    });
  },
  beforeRouteLeave: function(t, f, next) {
    this.beforeRouteLeave(f)
      .then(function(then) {
        next();
      });
  }
}

function mounted() {
  // lineChart.init();
}
</script>

<style lang="scss">
#line-chart {
  position: absolute;
  top: 120px;
  right: 0;
  bottom: 0;
  left: 0;

  .content {
    background: none;
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 120px;
    left: 30px;
  }
}

#line-chart-title {
  position: absolute;
  height: 100px;
  width: 400px;
  top: 90px;
  left: 60px;
}

// svg {
//   font: 10px sans-serif;
//   cursor: default;
//   background: #dddddd;
// }
//
// .axis {
//
//   path, line {
//     fill: none;
//     stroke: #333333;
//     shape-rendering: crispEdges;
//   }
// }
//
// .line {
//   fill: none;
//   stroke: #6699cc;
//   stroke-width: 1.5px;
// }
//
// circle {
//   padding: 2px;
// }
//
// .info {
//   font-weight: bold;
//   font-style: italic;
//   font-size: 12px;
//   font-family: Times, "Times New Roman", Georgia, serif;
//   fill: #333333;
// }
//
// .info-circle {
//   fill: none;
//   stroke: #333333;
// }
//
// .textbox {
//   opacity: 0;
//
//   text {
//     fill: #333333;
//   }
//
//   .date {
//     font-weight: bold;
//
//   }
//
//   rect {
//     stroke: #333333;
//     fill: #ffffff;
//   }
// }
</style>
