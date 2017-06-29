<template>
  <section id="about">
  </section>
</template>

<script>
import aboutAnim from 'anim/About/About';
var methods = {};
_.assign(methods, aboutAnim);

export default {
  name: 'about',
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
}
</script>


<style lang="scss">
</style>
