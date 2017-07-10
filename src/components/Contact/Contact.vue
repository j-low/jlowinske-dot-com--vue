<template>
  <section id="contact">
  </section>
</template>

<script>
import contactAnim from 'anim/Contact/Contact';
var methods = {};
_.assign(methods, contactAnim);

export default {
  name: 'contact',
  methods: methods,
  beforeRouteEnter: function(t, f, next) {
    next(function() {
     methods.beforeRouteEnter(t, f)
    });
  },
  beforeRouteLeave: function(t, f, next) {
    this.beforeRouteLeave()
      .then(function(then) {
        next();
      });
    next();
  }
}
</script>


<style lang="scss">
</style>
