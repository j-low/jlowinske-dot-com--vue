<template>
  <section id="contact">
    <bg></bg>
    <contact-title></contact-title>
  </section>
</template>

<script>
import bg from 'components/layout/bgOverUnder';
import contactTitle from 'components/Contact/contactTitle';

import contactAnim from 'anim/Contact/Contact';
var methods = {};
_.assign(methods, contactAnim);

export default {
  name: 'contact',
  methods: methods,
  components: {
    bg: bg,
    contactTitle: contactTitle
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
#contact {
  position: absolute;
  top: 120px;
  right: 0;
  bottom: 0;
  left: 0;
}

#contact-title {
  position: absolute;
  height: 100px;
  width: 400px;
  top: 90px;
  left: 60px;
}
</style>
