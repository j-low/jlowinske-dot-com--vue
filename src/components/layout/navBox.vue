<template>
  <router-link :to="boxRoute" :class="cBoxClass">
    <svg
      viewBox="-4 -2 70 70"
      :class="boxClass"
      v-on:mouseenter="mouseenter"
      v-on:mouseleave="mouseleave">
      <title>navSquare</title>
      <g>
        <g>
          <rect class="nav-box-back" width="50" height="50"/>
          <rect class="nav-box-front nsf-cls-1" x="0" y="0" width="50" height="50"/>
          <line class="nav-box-bar-top nsf-cls-2" x1="7" y1="7" x2="7" y2="7"/>
          <line class="nav-box-bar-bottom nsf-cls-3" x1="45" y1="12" x2="45" y2="12"/>
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

.nsf-cls-1, .nsf-cls-2, .nsf-cls-3 {
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
  position: fixed;

  &.nav-blog {
    top: calc(40%);
    left: 35%;

    rect {
      fill: #f145ff;

      &.nav-box-back {
        opacity: 0.7;
      }
    }
  }

  &.nav-d3 {
    top: calc(40% + 100px);
    left: 35%;

    rect {
      fill: #3effff;

      &.nav-box-back {
        opacity: 0.7;
      }
    }
  }

  &.nav-about {
    top: calc(40% + 200px);
    left: 35%;

    rect {
      fill: #ffff15;

      &.nav-box-back {
        opacity: 0.7;
      }
    }
  }

  &.nav-contact {
    top: calc(40% + 300px);
    left: 35%;

    rect {
      fill: #87ff6e;

      &.nav-box-back {
        opacity: 0.7;
      }
    }
  }

  &.nav-donut {
    top: calc(40%);
    left: 35%;

    rect {
      fill: #ffa02e;

      &.nav-box-back {
        opacity: 0.7;
      }
    }
  }

  &.nav-line-chart {
    top: calc(40% + 100px);
    left: 35%;

    rect {
      fill: #31ffe1;

      &.nav-box-back {
        opacity: 0.7;
      }
    }
  }

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
