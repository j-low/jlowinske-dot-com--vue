<template>
  <section id="d3">
    <div class="inner-content inner-content--d3">
      <!-- <donut></donut> -->
      <!-- <line-chart></line-chart> -->
    </div>
  </section>
</template>

<script>
import donut from 'components/D3/donut';
import lineChart from 'components/D3/line-chart';

import d3Anim from 'anim/D3/D3';
var methods = {};
_.assign(methods, d3Anim);

export default {
  name: 'd3',
  components: {
    donut: donut,
    lineChart: lineChart
  },
  methods: methods,
  beforeRouteEnter: function(t, f, next) {
    next(function() {
      methods.beforeRouteEnter()
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
  height: 100%;
  color: #ffffff;
}

.inner-content--d3 {}
</style>
