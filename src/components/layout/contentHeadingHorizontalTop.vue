<template>
  <div id="content-heading-top" class="hemisphere">
    <div class="cht--inner"></div>
    <div class="content-label-container">
    </div>
    <span class="content-label">{{ mutableHeading }}</span>
  </div>
</template>

<script>
import anim from 'anim/Layout';

var methods = {};
_.assign(methods, anim);

export default {
  props: ['context', 'heading'],
  data: function() {
    return {
      mutableHeading: this.heading
    }
  },
  methods: methods,
  mounted: function() {
    var _this = this;
    var index = 0;
    const greetings = ['grüss dich', 'bonjour', 'હેલ્લો', 'hello', 'buenos días', 'こんにちは', 'hej', 'नमस्ते', 'hello', 'aloha', 'مرحبا', 'sawubona', 'hallo', 'Здравствуйте', 'hallå'];

    if (_this.context === 'home') {
      setInterval(function() {
        _this.flipHeading(greetings[index], _this);
        index++;

        if (index === greetings.length) {
          index = 0;
        }
      }, 3000);
    }
  }
}
</script>


<style lang="scss">
@import "~scss/classes";

#content-heading-top {
  @extend .flex-center-hv;
  position: fixed;
  top: 15%;
  border-top-left-radius: 400px;
  border-top-right-radius: 400px;
  z-index: 2;
}

.content-label-container {
  top: 35%;
  height: 75px;
  width: 150px;
  position: absolute;
  transform: skewY(-5deg);
  border: 3px solid #ffffff;
}

.cht--inner {
  position: absolute;
  top: 7px;
  height: 190px;
  width: 380px;
  background: none;
  border-top: 3px solid #fff;
  border-right: 3px solid #fff;
  border-left: 3px solid #fff;
  border-top-left-radius: 380px;
  border-top-right-radius: 380px;
}

.content-label {
  top: 49%;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  color: #ffffff;
}
</style>
