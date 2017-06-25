<template>
  <section id="home">
    <div class="inner-content inner-content--home">
      <nav-sphere label="blog" route="blog"></nav-sphere>
      <nav-sphere label="d3.js" route="d3"></nav-sphere>
      <nav-sphere label="about" route="about"></nav-sphere>
    </div>
  </section>
</template>

<script>
import navSphere from 'components/Home/navSphere';

import homeAnim from 'anim/Home/Home';
var methods = {};
_.assign(methods, homeAnim);


export default {
  name: 'home',
  components: {
    navSphere: navSphere
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
  color: #ffffff;
}

.inner-content--home {

  a {
    position: absolute;
    top: calc(50% - 75px);

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
