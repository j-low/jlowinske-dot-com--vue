<template>
  <section id="contact">
  </section>
</template>

<script>
var methods = {};

export default {
  name: 'contact',
  methods: methods,
  beforeRouteEnter: function(t, f, next) {
    next();
    // next(function() {
    //  methods.beforeRouteEnter()
    // });
  },
  beforeRouteLeave: function(t, f, next) {
    // this.beforeRouteLeave()
    //   .then(function(then) {
    //     next();
    //   });
    next();
  }
}
</script>


<style lang="scss">
</style>
