<template>
  <a :class="anchorClass" :href="linkUrl" :target="targetAttr">
    <div class="social-link"
      v-on:mouseenter="mouseenter"
      v-on:mouseleave="mouseleave">
        <i :class="iconClass"></i>
    </div>
  </a>
</template>

<script>
import anim from 'anim/layout/socialLink'
var methods = {};
_.assign(methods, anim);

export default {
  props: [ 'linkClass', 'linkUrl', 'openNewWindow'],
  methods: methods,
  computed: {
    targetAttr: function() {
      return this.openNewWindow === true ? '_blank' : '';
    },
    anchorClass: function() {
      return 'social-link-anchor ' + this.linkClass;
    },
    iconClass: function() {
      return 'fa fa-' + this.linkClass;
    }
  }
}
</script>


<style lang="scss">
@import '~scss/classes';

.pulse-anchor {
  @extend .pulse-anchor-default;
  border: 2px solid #333333;
  // transform-origin: center center;
}

.social-link-anchor {
  height: 35px;
  width: 35px;
}

.social-link {
  z-index: 1;
  @extend .flex-center-hv;
  position: absolute;
  height: 35px;
  width: 35px;
  border: 3px solid #333333;
  border-radius: 50%;
  background: #ffffff;
}

i {
  color: #333333;

  &.fa-github {
    margin-top: 1px;
    font-size: 32px;
  }

  &.fa-linkedin {
    font-size: 23px;
  }

  &.fa-instagram {
    margin-top: 0.5px;
    margin-left: -0.5px;
    font-size: 29px;
  }

  &.fa-twitter {
    margin-top: 1px;
    font-size: 29px;
  }

  &.fa-envelope-o {
    margin-top: -2px;
    font-size: 23px;
  }
}
</style>
