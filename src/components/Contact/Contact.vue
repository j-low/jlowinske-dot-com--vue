<template>
  <section id="contact">
    <div class="under"></div>
    <div class="over"></div>
    <contact-title></contact-title>
  </section>
</template>

<script>
import contactTitle from 'components/Contact/contactTitle';

import contactAnim from 'anim/Contact/Contact';
var methods = {};
_.assign(methods, contactAnim);

export default {
  name: 'contact',
  methods: methods,
  components: {
    contactTitle: contactTitle
  },
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

  .under,
  .over {
    position: absolute;
    background: #87ff6e;
    opacity: 0.4;
  }

  .under {
    top: 30px;
    right: 100%;
    bottom: 150px;
    left: 0;
  }

  .over {
    top: 60px;
    right: 0;
    bottom: 120px;
    left: 100%;
  }
}

#contact-title {
  position: absolute;
  height: 100px;
  width: 400px;
  top: 90px;
  left: 60px;
}
</style>
