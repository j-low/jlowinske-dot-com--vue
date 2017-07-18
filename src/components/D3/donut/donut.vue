<template>
  <div id="donut">
    <bg></bg>
    <donut-title></donut-title>
    <div class="content">
      <div id="donut-container"></div>
    </div>
  </div>
</template>

<script>
import bg from 'components/layout/bgOverUnder';
import donutTitle from 'components/D3/donut/donutTitle';

import donut from './donutScript';
import donutAnim from 'anim/D3/donut/donut';
var methods = {};
_.assign(methods, donutAnim);

export default {
  name: 'donut',
  methods: methods,
  mounted: mounted,
  components: {
    bg: bg,
    donutTitle: donutTitle
  },
  beforeRouteEnter: function(t, f, next) {
    next(function() {
     methods.beforeRouteEnter(t, f)
    });
  },
  beforeRouteLeave: function(t, f, next) {
    this.beforeRouteLeave(f)
      .then(function(then) {
        next();
      });
  }
}

function mounted() {
  donut.init();
}
</script>


<style lang="scss">
#donut {
  position: absolute;
  top: 120px;
  right: 0;
  bottom: 0;
  left: 0;

  .content {
    background: none;
    position: absolute;
    top: 90px;
    right: 60px;
    bottom: 120px;
    left: 60px;
  }
}

#donut-title {
  position: absolute;
  height: 100px;
  width: 400px;
  top: 90px;
  left: 60px;
}

#donut-container {
  display: flex;
  justify-content: flex-end;

  svg {
    background: #ffffff;

    .total-complete-circle {
      fill: #666666;
    }

    .total-complete-text {
      fill: white;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 36px;
    }

    .slices-container {

      .rule {

        .has-known-issues {
          fill: red;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }

    .lines-container {

      path {
        fill: none;
        stroke: #333333;
        stroke-width: 1;
      }
    }

    .text-container {

      .rule-completion-percentage {
        fill: #666666;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        font-size: 20px;
      }

      .achievement-completion-percentage, .courses-complete, .known-issues {
        fill: #666666;
        font-size: 13px;
        font-family: sans-serif;
      }
    }
  }
}
</style>
