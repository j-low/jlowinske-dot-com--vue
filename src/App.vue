<template>
  <div id="app">
    <div id="app-container">
      <jHeader/>
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

import jHeader from 'components/layout/jHeader';
import jFooter from 'components/layout/jFooter';

var methods = {};

export default {
  name: 'app',
  components: {
    jHeader: jHeader,
    jFooter: jFooter
  },
  data: function() {
    return {
      heading: '',
    };
  },
  computed: {
  },
  mounted: mounted,
  watch: {
    $route: function changeRouteCallback(r) {}
  },
  methods: methods
};

function mounted() {
}

</script>

<style lang="scss">
@import '~scss/classes';
@import '~scss/mixins';

html {
  @extend .noselect;
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
  background: #ffffff;
}
</style>
