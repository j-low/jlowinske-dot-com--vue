<template>
  <div id="d3-nav" class="nav-container">
    <nav-box
      box-class="nav-d3"
      box-title="d3"
      box-route="/d3">
    </nav-box>
    <d3-nav-label></d3-nav-label>
  </div>
</template>

<script>
import navBox from 'components/layout/navBox';
import d3NavLabel from 'components/Home/nav/d3NavLabel';

export default {
  name: 'd3Nav',
  components: {
    navBox: navBox,
    d3NavLabel: d3NavLabel
  }
}
</script>

<style lang="scss">
.nav-d3 {

  rect {
    fill: #3effff;
  }
}
</style>
