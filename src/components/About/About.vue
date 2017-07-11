<template>
  <section id="about">
    <div class="under"></div>
    <div class="over"></div>
    <about-title></about-title>
  </section>
</template>

<script>
import aboutTitle from 'components/About/aboutTitle';

import aboutAnim from 'anim/About/About';
var methods = {};
_.assign(methods, aboutAnim);

export default {
  name: 'about',
  methods: methods,
  components: {
    aboutTitle: aboutTitle
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
#about {
  position: absolute;
  top: 120px;
  right: 0;
  bottom: 0;
  left: 0;

  .under,
  .over {
    position: fixed;
    background: #06c5ff;
    opacity: 0.4;
  }

  .under {
    top: 0;
    right: 180px;
    bottom: 100%;
    left: 150px;
  }

  .over {
    top: 100%;
    right: 150px;
    bottom: 0;
    left: 180px;
    overflow-y: scroll;
  }
}

#about-title {
  position: absolute;
  height: 500px;
  width: 31px;
  top: 9%;
  left: 53px;

  .letter {
    // opacity: 0;
  }
}
</style>
