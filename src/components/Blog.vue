<template>
  <section id="blog">
  </section>
</template>

<script>
import blogAnim from 'anim/Blog/Blog';
var methods = {};
_.assign(methods, blogAnim);

export default {
  name: 'blog',
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
