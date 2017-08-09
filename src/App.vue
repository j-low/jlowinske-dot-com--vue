<template>
  <div id="app">
    <div id="app-container">
      <jHeader/>
      <router-view></router-view>
      <!-- <jFooter/> -->
    </div>
  </div>
</template>

<script>
import { TweenMax, TweenLite, Power1, Power2, TimelineMax, TimelineLite, AttrPlugin, CSSPlugin, DrawSVGPlugin } from 'gsap';
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

#app, #app-container, #bigger-screen {
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
  background: #ffffff;
}

.nav-container {
  height: 80px;

  .nav-box {
    position: absolute;
    left: 0;

    .nav-box-back {
      opacity: 0.7;
    }
  }

  .nav-label {
    position: absolute;
    top: 22%;
    left: 100px;
    height: 60%;
  }
}

</style>
