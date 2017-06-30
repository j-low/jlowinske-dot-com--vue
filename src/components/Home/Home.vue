<template>
  <section id="home">
    <div class="home-bg-under"></div>
    <div class="home-bg-over">
    </div>
    <div class="home-canvas">
      <under-construction></under-construction>
      <div class="check-back">
        <span>check back soon</span>
      </div>
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
    background: #06c5ff;
    opacity: 0.4;
  }

  .home-bg-over {
    top: 28%;
    right: 0;
    bottom: 22%;
    left: 100%;
  }

  .home-bg-under {
    top: 32%;
    right: 100%;
    bottom: 18%;
    left: 0;
  }

  .home-canvas {
    position: fixed;
    display: flex;
    top: 48%;
    right: 0;
    left: 30px;
    opacity: 0;

    svg {
      margin-left: auto;
      margin-right: auto;
    }
  }

  .check-back {
    position: absolute;
    top: 80px;
    left: 50%;
    display: flex;
    justify-content: center;
    height: 30px;
    width: 0;
    overflow: hidden;

    span {
      color: #555;
      font-size: 24px;
      font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
    }
  }
</style>
