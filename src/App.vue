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
// import _ from 'lodash'
import { TweenLite, Power1, Power2, TimelineLite, CSSPlugin } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import jHeader from 'components/layout/jHeader';
import jFooter from 'components/layout/jFooter';

export default {
  name: 'app',
  components: {
    jHeader: jHeader,
    jFooter: jFooter
  }
};
</script>

<style lang="scss">
@import '~scss/classes';
@import '~scss/mixins';

html {
  @extend .noselect;
  cursor: default;
}

#app, #app-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app-container {
  background-color: rgba(255, 255, 255, 1);
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

  background: rgba(220, 246, 255, 0.7);
  // background: rgba(182, 250, 255, 0.7);
}
</style>
