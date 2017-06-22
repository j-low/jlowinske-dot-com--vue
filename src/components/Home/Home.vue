<template>
  <section id="home">
    <div class="home-content--inner">
      <nav-box label="blog" route="blog"></nav-box>
      <nav-box label="d3.js" route="d3"></nav-box>
      <nav-box label="about" route="about"></nav-box>
    </div>
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

#home {
  height: 100%;
  color: $white;

}

.home-content--inner {
  height: calc(100% - 25px);
  width: 100%;
  margin: 10px 9px;
  background: none;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
  border-left: 3px solid #fff;

  a {
    position: absolute;
    top: calc(50% - 37.5px);
    // margin: 0 30px;

    &.blog {
      left: 110%;
    }

    &.d3 {
      left: 110%;
    }

    &.about {
      left: 110%;
    }
  }
}

</style>
