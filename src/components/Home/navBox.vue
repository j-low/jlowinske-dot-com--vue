<template>
  <router-link v-bind:to="route">
    <div class="home-nav-box"
    v-bind:class="route"
    v-on:mouseenter="mouseenter"
    v-on:mouseleave="mouseleave">
    <div class="nav-box-label">
      <span>{{ label }}</span>
    </div>

    <div class="nav-box-front"></div>
    <div class="nav-box-back"></div>
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
  height: 75px;
  width: 150px;
  margin: 0 45px;

  @media (max-width: 915px) {
    margin: 0 30px;
  }

  @media (max-width: 800px) {
    margin: 0 15px;
  }
}

.nav-box-label {
  @extend .flex-center-hv;
  position: absolute;
  font-weight: bold;
  height: 75px;
  width: 150px;
  z-index: 2;

  span {
    color: #777777;
    font-size: 12px;
    display: block;
    margin-top: 10px;
  }
}

.nav-box-front {
  @extend .flex-center-hv;
  position: absolute;
  height: 75px;
  width: 150px;
  background: #ffffff;
  border-width: 3px;
  border-style: solid;
  border-color: #333333;
  transform: skew(0, 7deg);
  z-index: 1;
}

.nav-box-back {
  border-radius: 50%;
  height: 75px;
  width: 140px;
  margin-top: 1.5px;
  margin-left: 7px;
  position: absolute;
  transform: skew(0, -30deg);
}

.blog {

  .nav-box-back {
    background: #c6ffdb;
    border: 1px solid #ffffff;
  }
}

.d3 {

  .nav-box-back {
    background: #ffebd4;
    border: 1px solid #ffffff;
  }
}

.about {

  .nav-box-back {
    background: #ffe9f7;
    border: 1px solid #ffffff;
  }
}
</style>
