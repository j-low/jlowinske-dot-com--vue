<template>
  <div class="social-link-anchor">
    <div class="social-link"
      v-on:mouseenter="mouseenter"
      v-on:mouseleave="mouseleave">
      <a :href="linkUrl" :target="targetAttr">
        <i :class="iconClass"></i>
      </a>
    </div>
  </div>
</template>

<script>
import anim from 'anim/Layout/socialLink'
var methods = {};
_.assign(methods, anim);

export default {
  props: [ 'iconClass', 'linkUrl', 'openNewWindow'],
  methods: methods,
  computed: {
    targetAttr: function() {
      return this.openNewWindow === true ? '_blank' : '';
    }
  }
}
</script>


<style lang="scss">
@import '~scss/classes';

.pulse-anchor {
  @extend .pulse-anchor-default;
  border: 2px solid #bae8ff;
}

.social-link-anchor {
  @extend .flex-center-hv;
  height: 35px;
  width: 35px;
}

.social-link {
  z-index: 1;
  @extend .flex-center-hv;
  position: absolute;
  height: 35px;
  width: 35px;

  border: 3px double #ffadad;
  border-radius: 50%;
  background: #ffffff;
}

i {
  color: #555555;

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
