<template>
  <div id="donut">
    <bg></bg>
    <donut-title></donut-title>
    <div class="content">
      <div class="donut-container"></div>
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
}

function beforeDestroy() {
  donut.teardown();
}
</script>


<style lang="scss">
@import '~scss/classes';

#donut {
  position: absolute;
  top: 120px;
  right: 50px;
  bottom: 0;
  left: 50px;

  .content {
    background: none;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    top: 0;
    right: 30px;
    bottom: 0;
    left: 30px;

    overflow-y: scroll;
  }
}

#donut-title {
  position: absolute;
  height: 75px;
  width: 382px;
  top: -100px;
  right: -50px;
}

.donut-text,
.donut-container {
  display: block;
  background: #ffffff;
  border: 3px solid #333333;
}

.donut-container {
  margin: 30px;
}

.donut-text {
  height: 260px;
  margin: 0 30px 30px 30px;
  padding: 20px 10px;

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

/* @browser width */
@media screen and (min-width: 1024px) {

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
      flex-direction: row;
      align-items: flex-end;
      justify-content: flex-end;

      top: 90px;
      right: 30px;
      bottom: 150px;
      left: 60px;
    }
  }

  #donut-title {
    height: 95px;
    top: 85px;
    left: 60px;
  }

  .donut-text {
    width: 400px;
    margin: 0 15px;
  }

  .donut-container {
    margin: 0 15px;
  }
}

/* added to css scope for demo only*/
#j-header {
  height: 115px;
  width: 100%;
  border-bottom: 5px solid #333333
}

.logo {
  position: fixed;
  top: 20px;
  left: 10px;

  svg {
    height: 75px;
  }
}

.social-link-anchor {
  display: none;
}

/* @browser width */
@media screen and (min-width: 1024px) {
  #j-header {
    height: 0;
    width: 0;
  }

  .logo {

    svg {
      height: 100px;
    }
  }

  .social-link-anchor {
    display: block;
    position: fixed;
    top: 20px;

    &.linkedin {
      right: 445px;
    }

    &.github {
      right: 350px;
    }

    &.instagram {
      right: 255px;
    }

    &.twitter {
      right: 160px;
    }

    &.envelope-o {
      right: 65px;
    }
  }
}

.donut-container {
  height: 300px;
  width: 480px;

  svg {
    @extend .noselect;
    opacity: 1;

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
