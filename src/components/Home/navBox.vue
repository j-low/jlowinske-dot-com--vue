<template>
  <router-link :to="route" :class="route">
    <div class="home-nav-box"
      v-bind:class="route"
      v-on:mouseenter="mouseenter"
      v-on:mouseleave="mouseleave">
    <div class="nav-box-label">
      <span>{{ label }}</span>
    </div>

    <div class="nav-box-front"></div>
  </div>
  </router-link>
</template>

<script>
import anim from 'anim/Home/navBox';
var methods = {};
_.assign(methods, anim);

export default {
  props: [ 'label', 'route' ],
  methods: methods
}
</script>


<style lang="scss">
@import "~scss/classes";

.home-nav-box {
  display: inline-block;
  height: 150px;
  width: 150px;
  border-radius: 50%;
}

.nav-box-label {
  @extend .flex-center-hv;
  position: absolute;
  font-weight: bold;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  z-index: 2;

  span {
    color: #555555;
    font-size: 20px;
    display: block;
    margin-top: 6px;
    margin-left: 5px;
  }
}

.nav-box-front {
  @extend .flex-center-hv;
  position: absolute;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  background: #ffffff;
  border-width: 3px;
  border-style: double;
  border-color: #ffadad;
  z-index: 1;
}

.hover-strike-thru {
  position: absolute;
  left: 0;
  width: 100%;
  height: 1px;
  color: #ffffff;
  box-shadow: inset 0 0 1px #ffffff;
}
</style>
