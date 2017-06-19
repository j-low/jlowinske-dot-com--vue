<template>
  <div id="app">
    <div id="app-container">
      <jHeader/>
      <!-- <button class="test-name-button" v-on:click="changeHeading()">CHANGE NAME</button> -->
      <con-head-top :heading="heading" context="home"></con-head-top>
      <con-head-bottom></con-head-bottom>
      <div id="main-content">
        <router-view></router-view>
      </div>
      <jFooter/>
    </div>
  </div>
</template>

<script>
import { TweenLite, Power1, Power2, TimelineMax, CSSPlugin } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
<<<<<<< HEAD
import headerAnim from 'anim/layout/contentHeading';
=======
import appUtils from 'util/AppUtils';
>>>>>>> 971f0e70464b70f36c386e2575a0734ba0230a63

import jHeader from 'components/layout/jHeader';
import jFooter from 'components/layout/jFooter';
import conHeadTop from 'components/layout/contentHeadingTop';
import conHeadBottom from 'components/layout/contentHeadingBottom';

const homeGreetings = ['grüss dich', 'bonjour', 'હેલ્લો', 'hello', 'buenos días', 'こんにちは', 'përshëndetje', 'नमस्ते', 'hello', 'aloha', 'مرحبا', 'sawubona', 'hallo', 'Здравствуйте', 'hallå'];

var timer;
var headingIndex = 0;
var methods = {};
_.assign(methods, headerAnim);

export default {
  name: 'app',
  components: {
    jHeader: jHeader,
    jFooter: jFooter,
    conHeadTop: conHeadTop,
    conHeadBottom: conHeadBottom
  },
  data: function() {
    return {
      heading: '',
    };
  },
  computed: {
    compHeading: {
      get: function() {
        return this.heading;
      },
      set: function(val) {
        this.heading = val;
      }
    }
  },
  mounted: mounted,
  watch: {
    $route: function changeRouteCallback(route) {
      watchRoute(this, route);
    }
  },
  methods: methods
};

function mounted() {
  watchRoute(this, this.$route);
}

function watchRoute(ctx, route) {
  if (route.path === '/') {
    headingIndex = 0;
    ctx.flipHeading(ctx, homeGreetings[0]);
    timer = setInterval(function() {
      headingIndex = headingIndex === homeGreetings.length - 1 ? 0 : headingIndex + 1;
      ctx.flipHeading(ctx, homeGreetings[headingIndex]);

    }, 2000);
  } else {
    clearInterval(timer);
    ctx.flipHeading(ctx, route.name);
  }
}
</script>

<style lang="scss">
.test-name-button {
  background: red;
  height: 33px;
};

@import '~scss/classes';
@import '~scss/mixins';

html {
  @extend .noselect;
  cursor: default;
}

a {
  cursor: default;
}

#app, #app-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-image: url('./assets/dark.png');
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app-container {
  background: rgba(34, 34, 34, 0.7);
}

#main-content {
  position: fixed;
  top: 30%;
  right: 0;

  height: 50%;
  min-height: 400px;
  width: 80%;
  min-width: 590px;
  z-index: 1;

  background: rgba(162, 148, 159, 0.5);
}
</style>
