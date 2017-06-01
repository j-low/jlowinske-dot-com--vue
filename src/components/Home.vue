<template>
  <section id="home" class="j-primary-view">
    <!-- <transition v-on:enter="" v-on:leave="" appear></transition> -->
    <div id="center"></div>
  </section>
</template>

<script>
import trans from '../gsap-scripts/homeTransitions';

var methods = {};
_.assign(methods, trans);

export default {
  name: 'home',
  methods: methods,
  mounted: mounted
};

function mounted() {
  const home = $('home');
  const center = $('#center');
  var tl = new TimelineLite({ repeat: -1 });

  addNavSpheres(['nav-blog', 'nav-d3', 'nav-about'], center);
  TweenLite.from(home, 1, {autoAlpha:0});

  tl.to(center, 20, { });
}


function addNavSpheres(classNames, ctr) {
  const space = 120;
  for (var i = 0; i < classNames.length; i++) {
    let newArm = $('<div>', { class:'arm' }).appendTo(ctr);
    let newPivot= $('<div>', { class: 'pivot outer' }).appendTo(newArm);
    let newSphere= $('<div>', { class: 'sphere ' + classNames[i] }).appendTo(newPivot);
    TweenMax.set(newArm, { rotation: (i * space) - 90, transformOrigin: '0px 3px' });
    TweenMax.set(newPivot, {  rotation: 90, });
    // TweenMax.set(newSphere, { rotation:  (-i * space) });
  }
}

</script>


<style lang="scss">
@import "~scss/classes";
@import "~scss/colors";
@import "~scss/mixins";

#home {
  @extend .flex-center-hv;
  height: calc(100% - 130px);
  color: $white;

  #center {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: rgba(251, 241, 222, 0.4);
  }

  .arm {
    width:200px;
    height:6px;
    position:absolute;
    left: 50%;
    top: calc(50% + 6px);
    background-color: rgba(255, 182, 43, 0.8);
  }

  .pivot {
    position: absolute;
    width: 10px;
    height: 10px;
  }

  .outer {
    top: -200px;
    border-radius: 50%;
    background-color: rgba(62, 255, 49, 0.5);
  }

  .sphere {
    position: absolute;
    height: 400px;
    width: 400px;
    border-radius: 50%;
  }

  .nav-blog {
    background-color: rgba(251, 241, 222, 0.4);
  }

  .nav-d3 {
    background-color: rgba(251, 241, 222, 0.4);
  }

  .nav-about {
    background-color: rgba(251, 241, 222, 0.4);
  }
}


</style>
