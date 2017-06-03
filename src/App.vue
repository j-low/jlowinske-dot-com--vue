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
import { TweenMax, Power2, TimelineLite } from 'gsap';
import Draggable from 'gsap/Draggable';
import ScrollToPlugin from 'gsap/ScrollToPlugin';

import jHeader from './components/layout/jHeader';
import jFooter from './components/layout/jFooter';

export default {
  name: 'jlowinske-dot-com--vue',
  components: {
    jHeader: jHeader,
    jFooter: jFooter
  }
};
</script>

<style lang="scss">
@import '~scss/classes';
@import '~scss/colors';
@import '~scss/mixins';

#app, #app-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#app {
  // @include center-cover('./assets/dark_1.jpg');
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app-container {
  background-color: rgba(255, 255, 255, 1);
}

#j-header, #j-footer {
  color: $white;
  @extend .flex-center-hv;
  width: 100%;
}
</style>
