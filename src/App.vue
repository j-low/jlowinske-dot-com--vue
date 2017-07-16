<template>
  <div id="app">
    <div id="app-container">
      <jHeader/>
      <router-view></router-view>
      <!-- <jFooter/> -->
    </div>
    <div id="bigger-screen">
      <span>What</span>
      <span>is this?</span>
      <span>A viewport</span>
      <span>for ants?!</span>
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

#bigger-screen {
  display: none;
  padding: 0 30px;
  background: #333333;
  font-size: 72px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;
}

// @media(max-width: 660px) {
//   #app-container {
//     display: none;
//   }
//
//   #bigger-screen {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//   }
// }

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
