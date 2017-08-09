<template>
  <div id="donut">
    <bg></bg>
    <donut-title></donut-title>
    <div class="content">
      <div class="donut-text">
        <ul>
          <li>
            <span>Combining animations with hover and click events can be leveraged to guide a user towards the intended interaction.</span>
          </li>
          <li>
            <span>Good user interface should reveal its functionality and information to the end user as naturally as possible.</span>
          </li>
          <li>
            <span>Here, the slight lift of a slice's outer arc while hovering encourages the user to click the element yielding a stronger effect than relying solely on a cursor change over an otherwise static chart.</span>
          </li>
        </ul>
      </div>
      <div class="donut-container"></div>
    </div>
  </div>
</template>

<script>
import bg from 'components/layout/bgOverUnder';
import donutTitle from 'components/D3/donut/donutTitle';

import winWidth from 'util/getWindowWidth';
import donut from './donutScript';

import donutAnim from 'anim/D3/donut/donut';
import donutTextAnim from 'anim/D3/donut/donutText';

var lastWidth;
var methods = {};
_.assign(methods, donutAnim);

export default {
  name: 'donut',
  methods: methods,
  mounted: mounted,
  beforeDestroy: beforeDestroy,
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

  this.$nextTick(function() {
    window.addEventListener('resize', handleResize);
  });

  lastWidth = winWidth.getWindowWidth();
}

function beforeDestroy() {
  window.removeEventListener('resize', handleResize);
  donut.teardown();
}

function handleResize() {
  var width = winWidth.getWindowWidth();

  if (width < 1030 && lastWidth >= 1030) {
    donutTextAnim.leaveOnResize();
  } else if (width >= 1030 && lastWidth < 1030) {
    donutTextAnim.enterOnResize();
  }

  lastWidth = width;
}
</script>


<style lang="scss">
@import '~scss/classes';

#donut {
  position: absolute;
  top: 120px;
  right: 0;
  bottom: 0;
  left: 0;

  .content {
    background: none;
    position: absolute;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;

    top: 90px;
    right: 30px;
    bottom: 150px;
    left: 60px;
  }  
}

#donut-title {
  position: absolute;
  height: 95px;
  width: 382px;
  top: 85px;
  left: 60px;
}

.donut-text,
.donut-container {
  background: #ffffff;
  border: 3px solid #333333;
}

.donut-text {
  height: 260px;
  min-width: 400px;
  width: 400px;
  margin-right: 30px;
  padding: 20px 10px;
  opacity: 0;

  ul {
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 20px;
    list-style-type: none;
  }

  li {
    margin-bottom: 20px;
  }
}

.donut-container {
  height: 300px;
  width: 480px;

  svg {
    @extend .noselect;
    opacity: 0;

    .total-complete-circle {
      fill: #222222;
    }

    .total-complete-text {
      fill: white;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 36px;
    }

    .slices-container {

      .module {

        stroke: #555555;
        stroke-width: 1px;

        .has-outstanding-issues {
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

      .section-completion-percentage {
        fill: #333333;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        font-size: 20px;
      }

      .modules-complete, .outstanding-issues {
        fill: #333333;
        font-size: 13px;
        font-family: sans-serif;
      }
    }
  }
}
</style>
