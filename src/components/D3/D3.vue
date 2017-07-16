<template>
  <section id="d3">
    <d3-title></d3-title>
    <div class="d3-nav-container">
      <donut-nav></donut-nav>
      <line-chart-nav></line-chart-nav>
    </div>
  </section>
</template>

<script>
import d3Title from 'components/D3/d3Title';
import donutNav from 'components/D3/nav/donutNav';
import lineChartNav from 'components/D3/nav/lineChartNav';

import d3Anim from 'anim/D3/D3';
var methods = {};
_.assign(methods, d3Anim);

export default {
  name: 'd3',
  components: {
    d3Title: d3Title,
    donutNav: donutNav,
    lineChartNav: lineChartNav
  },
  methods: methods,
  beforeRouteEnter: function(t, f, next) {
    next(function() {
      methods.beforeRouteEnter(t, f)
    });
  },
  beforeRouteLeave: function(t, f, next) {
    this.beforeRouteLeave()
      .then(function(then) {
        next();
      });
  }
}
</script>


<style lang="scss">
#d3 {
  position: absolute;
  top: 120px;
  right: 0;
  bottom: 0;
  left: 0;
}

#d3-title {
  position: absolute;
  top: 15%;
  width: 100%;
  height: 15%;

  .letter-primary,
  .letter-secondary {
    // opacity: 0;
  }
}

.d3-nav-container {
  position: absolute;
  overflow: hidden;
  height: 65%;
  width: 100%;
  bottom: 0;
}

#donut-nav{
  position: absolute;
  top: 0;
  left: 40%;
}

#line-chart-nav {
  position: absolute;
  top: 100px;
  left: 40%;
}

</style>
