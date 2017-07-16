<template>
  <div id="donut-nav" class="nav-container">
    <donut-nav-box></donut-nav-box>
    <donut-nav-label></donut-nav-label>
  </div>
</template>

<script>
import donutNavBox from 'components/D3/nav/donutNavBox';
import donutNavLabel from 'components/D3/nav/donutNavLabel';

var methods = {};

export default {
  name: 'donutNav',
  methods: methods,
  components: {
    donutNavBox: donutNavBox,
    donutNavLabel: donutNavLabel
  }
}
</script>


<style lang="scss">
#donut-nav {

  rect {
    fill: #ffa02e;
  }
}
</style>
