<template>
  <section id="home">
    <div class="home-bg-under"></div>
    <div class="home-bg-over">
    </div>
    <div class="home-canvas">
      <under-construction></under-construction>
    </div>
  </section>
</template>

<script>
import underConstruction from 'components/Home/underConstruction';
import homeAnim from 'anim/Home/Home';
var methods = {};
_.assign(methods, homeAnim);


export default {
  name: 'home',
  components: {
    underConstruction: underConstruction
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
  #home {
    position: absolute;
    top: 120px;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .home-bg-over, .home-bg-under {
    position: fixed;
    background: #ffdbc0;
    opacity: 0.7;
  }

  .home-bg-over {
    top: 28%;
    right: 0;
    bottom: 22%;
    left: 30px;
  }

  .home-bg-under {
    top: 32%;
    right: 30px;
    bottom: 18%;
    left: 0;
  }

  .home-canvas {
    position: fixed;
    display: flex;
    top: 50%;
    right: 0;
    // bottom: 18%;
    left: 30px;

    svg {
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>
