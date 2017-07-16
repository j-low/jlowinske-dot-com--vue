<template>
  <router-link to="/d3" class="nav-box-donut">
    <svg
      viewBox="-4 -2 70 70"
      class="nav-donut"
      v-on:mouseenter="mouseenter"
      v-on:mouseleave="mouseleave">
      <g>
        <g>
          <rect class="nav-box-back" width="50" height="50"/>
          <rect class="nav-box-front nav-box-donut-cls-1" x="0" y="0" width="50" height="50"/>
          <path class="nav-box-donut-cls-3 donut-main" d="M40,22 a15,15,0,1,1-7.62-9.72"/>
          <path class="nav-box-donut-cls-2 donut-slice" d="M32.18,12.23 l.13.07.16.08a15,15,0,0,1,7.43,9.21q.07.24.12.47"/>
        </g>
      </g>
    </svg>
  </router-link>
</template>

<script>
import anim from 'anim/D3/nav/donutNavBox';
var methods = {};
_.assign(methods, anim);

export default {
  name: 'donutNavBox',
  methods: methods
}
</script>


<style lang="scss">

.nav-box-donut-cls-1,
.nav-box-donut-cls-2,
.nav-box-donut-cls-3,
.donut-main,
.donut-slice {
  stroke: #333;
  stroke-width: 3px;
  stroke-miterlimit: 10;
}


.nav-box-donut svg {
  height: 100px;
}

.donut-main,
.donut-slice {
  fill: none;
}

.nav-box-donut {

  &.nav-donut {
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
