<template>
  <div class="home-nav-box"
    v-bind:class="label"
    v-on:mouseenter="mouseenter"
    v-on:mouseleave="mouseleave">

    <div class="nav-box-label">
      <span>{{ label }}</span>
    </div>

    <div class="nav-box-front"></div>
    <div class="nav-box-back"></div>
  </div>
</template>

<script>
import anim from 'anim/Home/navBox';
var methods = {};
_.assign(methods, anim);

export default {
  props: [ 'label' ],
  methods: methods
}
</script>


<style lang="scss">
@import "~scss/classes";

.home-nav-box {
  display: inline-block;
  height: 75px;
  width: 150px;
  margin: 0 30px;
}

.nav-box-label {
  @extend .flex-center-hv;
  position: absolute;
  color: #777777;
  font-weight: bold;
  height: 75px;
  width: 150px;
  z-index: 2;

  span {
    display: block;
    margin-top: 5px;
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
  transform: skewY(7deg);
  z-index: 1;
}

.nav-box-back {
  height: 65px;
  width: 130px;
  margin-top: 2.5px;
  margin-left: 10px;
  position: absolute;
  transform: skewY(-15deg);

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
