<template>
  <section id="home" class="j-primary-view">
    <transition v-on:enter="" v-on:leave="" appear></transition>
  </section>
</template>

<script>
import trans from '../gsap-scripts/homeTransitions'

const methods = {}
_.assign(methods, trans)

export default {
  name: 'home',
  methods: methods
}
</script>


<style lang="scss" scoped>
@import "~scss/classes";
@import "~scss/mixins";

#home {
  @extend .flex-center-hv;
  height: calc(100% - 130px);
}

.j-nav {
  @extend .flex-center-hv;
  height: 40%;
  width: 100%;
  background-color: rgba(183, 42, 0, 0.4);
}

h1 {
  font-size: 2.0em;
  font-weight: normal;
}

.nav-blog {}

.nav-d3 {
  @include center-cover('../assets/d3.png');
  background-color: rgba(251, 241, 222, 0.8);
}

.nav-about {
  @include center-cover('../assets/jlow.jpg');
}

</style>
