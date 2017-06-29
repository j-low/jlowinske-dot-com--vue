<template>
  <section id="home">
    <nav-box></nav-box>
    <nav-box></nav-box>
    <nav-box></nav-box>
  </section>
</template>

<script>
import navBox from 'components/Home/navBox';

import homeAnim from 'anim/Home/Home';
var methods = {};
_.assign(methods, homeAnim);


export default {
  name: 'home',
  components: {
    navBox: navBox
  },
  methods: methods,
  beforeRouteEnter: function(t, f, next) {
    next(function() {
      methods.beforeRouteEnter()
    });
  },
  beforeRouteLeave: function(t, f, next) {
    this.beforeRouteLeave()
      .then(function(then) {
        next();
      });
  }
};
</script>

<style lang="scss">
@import "~scss/classes";
@import "~scss/colors";
@import "~scss/mixins";
</style>
