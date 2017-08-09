<template>
  <section id="contact">
    <bg></bg>
    <contact-title></contact-title>
    <div class="content">
      <contact-content></contact-content>
    </div>
  </section>
</template>

<script>
import bg from 'components/layout/bgOverUnder';
import contactTitle from 'components/Contact/contactTitle';
import contactContent from 'components/Contact/contactContent';

import contactAnim from 'anim/Contact/Contact';
var methods = {};
_.assign(methods, contactAnim);

export default {
  name: 'contact',
  methods: methods,
  components: {
    bg: bg,
    contactTitle: contactTitle,
    contactContent: contactContent
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

  .content {
    position: absolute;
    top: 175px;
    left: 60px;
    bottom: 150px;
    right: 0;
    background: #ffffff;
    border-top: 3px solid #333333;
    border-left: 3px solid #333333;
    border-bottom: 3px solid #333333;
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
