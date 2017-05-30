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
import _ from 'lodash'
import { TweenMax, Power2, TimelineLite } from 'gsap'
import Draggable from 'gsap/Draggable'
import ScrollToPlugin from 'gsap/ScrollToPlugin'

import jHeader from './components/layout/jHeader'
import jFooter from './components/layout/jFooter'

export default {
  name: 'jlowinske-dot-com--vue',
  components: {
    jHeader: jHeader,
    jFooter: jFooter
  }
}
</script>

<style lang="scss">
@import 'index';

#app, #app-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

#app {
  background-image: url('./assets/pettibon.jpg');
  background-size: cover;

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app-container {
  background-color: rgba(251, 241, 222, 0.8);
}

#j-header, #j-footer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: rgba(0, 199, 255, 0.4);
}
</style>
