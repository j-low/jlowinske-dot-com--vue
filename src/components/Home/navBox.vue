<template>
  <!-- <router-link :to="route" :class="route">
    <div class="nav-box"
      v-on:mouseenter="mouseenter"
      v-on:mouseleave="mouseleave">
  </div>
  </router-link> -->
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
</style>
