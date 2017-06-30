<template>
  <router-link :to="boxRoute" :class="cBoxClass">
    <svg
      viewBox="0 0 70 70"
      v-on:mouseenter="mouseenter"
      v-on:mouseleave="mouseleave">
      <title>navSquare</title>
      <g>
        <g>
          <rect class="nav-box-back" width="50" height="50"/>
          <rect class="nav-box-front nsf-cls-1" x="2" y="2" width="50" height="50"/>
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
.nsf-cls-1 {
  stroke: #333;
  stroke-miterlimit: 10;
  stroke-width: 3px;
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
