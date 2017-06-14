<template>
  <div id="app">
    <div id="app-container">
      <jHeader/>
      <router-view></router-view>
      <jFooter/>
    </div>
  </div>
</template>

<script>
import { TweenLite, Power1, Power2, TimelineMax, CSSPlugin } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import jHeader from 'components/layout/jHeader';
import jFooter from 'components/layout/jFooter';

export default {
  name: 'app',
  components: {
    jHeader: jHeader,
    jFooter: jFooter
  },
  watch: {
    $route: watchRoute
  }
};

function watchRoute(route) {
  console.log('change route: ', route);
}
</script>

<style lang="scss">
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
  // background: rgba(34, 34, 34, 1);
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
