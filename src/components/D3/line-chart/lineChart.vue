<template>
  <div id="line-chart">
    <bg></bg>
    <line-chart-title></line-chart-title>
    <div class="content">
      <div class="line-chart-text">
        <ul>
          <li>
            <span>Combining animations with hover and click events can be leveraged to guide a user towards the intended interaction.</span>
          </li>
          <li>
            <span>Good user interface should reveal its functionality and information to the end user as naturally as possible.</span>
          </li>
          <li>
            <span>The minute expansion of a node's radius invites the user to engage further via click. The transformation of the node into an information symbol creates an unmistakeable semantic link to the data box.</span>
          </li>
        </ul>
      </div>
      <div class="line-chart-container"></div>
    </div>
  </div>
</template>

<script>
import bg from 'components/layout/bgOverUnder';
import lineChartTitle from 'components/D3/line-chart/lineChartTitle';

import winWidth from 'util/getWindowWidth';
import lineChart from './lineChartScript'

import lineChartAnim from 'anim/D3/line-chart/lineChart';
import lineChartTextAnim from 'anim/D3/line-chart/lineChartText';

var lastWidth;
var methods = {};
_.assign(methods, lineChartAnim);

export default {
  name: 'lineChart',
  methods: methods,
  mounted: mounted,
  beforeDestroy: beforeDestroy,
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
  lineChart.init();

  this.$nextTick(function() {
    window.addEventListener('resize', handleResize);
  });

  lastWidth = winWidth.getWindowWidth();
}

function beforeDestroy() {
  window.removeEventListener('resize', handleResize);
}

function handleResize() {
  var width = winWidth.getWindowWidth();

  if (width < 1060 && lastWidth >= 1060) {
    lineChartTextAnim.leaveOnResize();
  } else if (width >= 1060 && lastWidth < 1060) {
    lineChartTextAnim.enterOnResize();
  }

  lastWidth = width;
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
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    top: 90px;
    right: 30px;
    bottom: 150px;
    left: 60px;
  }
}

#line-chart-title {
  position: absolute;
  height: 95px;
  width: 400px;
  top: 85px;
  left: 60px;
}

.line-chart-text,
.line-chart-container {
  background: #ffffff;
  border: 3px solid #333333;
}

.line-chart-text {
  height: 260px;
  min-width: 400px;
  width: 400px;
  margin-right: 30px;
  padding: 20px 10px;
  opacity: 0;

  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 20px;
    list-style-type: none;
  }

  li {
    margin-bottom: 20px;
  }
}

.line-chart-container {
  @import '~scss/classes';

  height: 300px;
  width: 500px;

  svg {
    font: 10px sans-serif;
  }

  text {
    @extend .noselect;
    cursor: default;
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
    stroke: #06c5ff;
    stroke-width: 1.5px;
  }

  circle {
    padding: 2px;
    cursor: pointer;
  }

  .info {
    font-weight: bold;
    font-style: italic;
    font-family: Times, "Times New Roman", Georgia, serif;
    fill: #333333;
  }

  .info-circle {
    fill: none;
    stroke: #333333;
  }

  .textbox {
    opacity: 0;

    .info {
      font-size: 12px;
    }

    text {
      fill: #333333;
    }

    .date {
      font-weight: bold;

    }

    rect {
      stroke: #333333;
      stroke-width: 1.5px;
      fill: #ffffff;
    }
  }
}

</style>
