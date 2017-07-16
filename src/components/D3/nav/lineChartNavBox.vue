<template>
  <router-link to="/d3" class="nav-box-line-chart">
    <svg
      viewBox="-4 -2 70 70"
      class="nav-line-chart">
      <g>
        <g>
          <rect class="nav-box-back" width="50" height="50"/>
          <rect class="nav-box-front nav-box-line-chart-cls-1" x="0" y="0" width="50" height="50"/>
          <path class="nav-box-line-chart-cls-1" d="M4.75,19.5 c6.66,0,6.66,14,13.33,14s6.67-14,13.34-14,6.67,14,13.34,14"/>
        </g>
      </g>
    </svg>
  </router-link>
</template>

<script>
var methods = {};

export default {
  name: 'lineChartNavBox',
  methods: methods
}
</script>


<style lang="scss">
.nav-box-line-chart svg {
  height: 100px;
}

.nav-box-line-chart-cls-1 {
  fill: none;
  stroke-width: 3px;
  stroke: #333;
  stroke-miterlimit: 10;
}

.nav-box-line-chart {

  .nav-line-chart {
    top: calc(40% + 100px);
    left: 35%;

    rect {
      &.nav-box-back {
        opacity: 0.7;
      }
    }
  }
}
</style>
