<template>
  <router-link :to="boxRoute" :class="cBoxClass">
    <svg
      viewBox="-4 -2 70 70"
      :class="boxClass"
      v-on:mouseenter="mouseenter"
      v-on:mouseleave="mouseleave">
      <g>
        <g>
          <rect class="nav-box-back" width="50" height="50"/>
          <rect class="nav-box-front nsf-cls-1" x="0" y="0" width="50" height="50"/>
          <line class="nav-box-bar-top nsf-cls-2" x1="0" y1="7" x2="0" y2="7"/>
          <line class="nav-box-bar-bottom nsf-cls-3" x1="50" y1="12" x2="50" y2="12"/>
        </g>
      </g>
    </svg>
  </router-link>
</template>

<script>
import anim from 'anim/layout/navBox';
var methods = {};
_.assign(methods, anim);

export default {
  props: [ 'boxTitle', 'boxClass', 'boxRoute' ],
  methods: methods,
  computed: {
    cBoxClass: function() {
      return 'nav-box ' + this.boxClass;
    }
  }
}
</script>


<style lang="scss">
.nav-box svg {
  height: 100px;
}

.nsf-cls-1,
.nsf-cls-2,
.nsf-cls-3 {
  stroke: #333;
  stroke-miterlimit: 10;
}

.nsf-cls-1 {
  stroke-width: 3px;
}

.nsf-cls-2 {
  stroke-width: 1px;
}

.nsf-cls-3 {
  stroke-width: 2px;
}

.nav-box {

  &.nav-blog-post {
    left: 10%;

    rect {
      fill: #ffffff;

      &.nav-box-back {
        opacity: 0.7;
      }
    }
  }
}
</style>
