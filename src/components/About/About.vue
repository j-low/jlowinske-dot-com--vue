<template>
  <section id="about">
    <bg></bg>
    <about-title></about-title>
  </section>
</template>

<script>
import bg from 'components/layout/bgOverUnder';
import aboutTitle from 'components/About/aboutTitle';

import aboutAnim from 'anim/About/About';
var methods = {};
_.assign(methods, aboutAnim);

export default {
  name: 'about',
  methods: methods,
  components: {
    bg: bg,
    aboutTitle: aboutTitle
  },
  beforeRouteEnter: function(t, f, next) {
    next(function() {
      methods.beforeRouteEnter(t, f)
    });
  },
  beforeRouteLeave: function(t, f, next) {
    this.beforeRouteLeave(f)
      .then(function(then) {
        next();
      });
  }
}
</script>


<style lang="scss">
#about {
  position: absolute;
  top: 120px;
  right: 0;
  bottom: 0;
  left: 0;
}

#about-title {
  position: absolute;
  height: 500px;
  width: 31px;
  top: 9%;
  left: 53px;
}
</style>
