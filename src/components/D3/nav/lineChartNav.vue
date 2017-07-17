<template>
  <div id="line-chart-nav" class="nav-container">
    <line-chart-nav-box></line-chart-nav-box>
    <line-chart-nav-label></line-chart-nav-label>
  </div>
</template>

<script>
import lineChartNavBox from 'components/D3/nav/lineChartNavBox';
import lineChartNavLabel from 'components/D3/nav/lineChartNavLabel';

var methods = {};

export default {
  name:'lineChartNav',
  methods: methods,
  components: {
    lineChartNavBox: lineChartNavBox,
    lineChartNavLabel: lineChartNavLabel
  }
}
</script>


<style lang="scss">
#line-chart-nav {

  rect {
    fill: #31ffe1;
  }
}
</style>
