<template>
  <div id="app">
    <div id="app-container">
      <jHeader/>
      <div id="main-content">
        <router-view></router-view>
      </div>
      <jFooter/>
    </div>
    <div id="bigger-screen">
      <span>ffs</span>
      <span>get a</span>
      <span>bigger</span>
      <span>monitor</span>
      <span>already</span>
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
  background: #555555;
  font-size: 72px;
  font-weight: bold;
  text-transform: uppercase;
  color: #ffffff;

  span {
    display: block;
  }
}

@media(max-width: 660px) {
  #app-container {
    display: none;
  }

  #bigger-screen {
    display: block;
  }
}
</style>
