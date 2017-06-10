<template>
  <div class="social-link" :social-link-label="linkLabel"
    v-on:mouseenter="mouseenter"
    v-on:mouseleave="mouseleave">
    <div class="social-link-icon-container">
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
  props: [ 'iconClass', 'linkUrl', 'openNewWindow', 'linkLabel'],
  methods: methods,
  computed: {
    targetAttr: function() {
      return this.openNewWindow === true ? '_blank' : '';
    }
  }
}
</script>


<style lang="scss" scoped>
@import '~scss/classes';

.social-link {
  height: 35px;
  width: 35px;
  margin-left: 15px;
  border: 3px double #ffadad;
  border-radius: 50%;
  background-color: #ffffff;
}

.social-link-icon-container {
  @extend .flex-center-hv;
  position: absolute;
  height: 33px;
  width: 33px;
  margin-top: 1px;
  margin-left: 1px;
  border-radius: 50%;
  background-color: #ffffff;
}

i {
  color: #777777;

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
