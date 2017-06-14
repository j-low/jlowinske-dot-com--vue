<template>
  <section id="home">
    <div class="home-content--inner">
      <div class="nav-container">
        <nav-box label="blog" route="blog"></nav-box>
        <nav-box label="d3.js" route="d3"></nav-box>
        <nav-box label="about" route="about"></nav-box>
      </div>
    </div>
  </section>
</template>

<script>
import navBox from 'components/Home/navBox';
var methods = {};

export default {
  name: 'home',
  components: {
    navBox: navBox
  },
  methods: methods
};
</script>


<style lang="scss">
@import "~scss/classes";
@import "~scss/colors";
@import "~scss/mixins";

#home {
  height: 100%;
  color: $white;

}

.home-content--inner {
  @extend .flex-center-hv;
  height: calc(100% - 25px);
  width: 100%;
  margin: 10px 9px;
  background: none;
  border-top: 3px solid #fff;
  border-bottom: 3px solid #fff;
  border-left: 3px solid #fff;
}

.nav-container {
  @extend .flex-center-hv;
  flex-direction: row;
  width: 100%;

  a {
    margin: 0 calc(5% + 10px);
  }
}
</style>
