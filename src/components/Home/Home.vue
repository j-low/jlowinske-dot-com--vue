<template>
  <section id="home" class="j-primary-view">
    <con-head-top v-bind:heading="heading"></con-head-top>
    <con-head-bottom></con-head-bottom>
    <div id="main-content">
      <div class="home-content--inner">
        <div class="nav-container">
          <nav-box label="blog" route="blog"></nav-box>
          <nav-box label="d3.js" route="d3"></nav-box>
          <nav-box label="about" route="about"></nav-box>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import conHeadTop from 'components/layout/contentHeadingTop';
import conHeadBottom from 'components/layout/contentHeadingBottom';
import navBox from 'components/Home/navBox';
var methods = {};

export default {
  name: 'home',
  components: {
    conHeadTop: conHeadTop,
    conHeadBottom: conHeadBottom,
    navBox: navBox
  },
  data: function() {
    return {
      heading: 'grüss dich'
    }
  },
  methods: methods
};

</script>


<style lang="scss">
@import "~scss/classes";
@import "~scss/colors";
@import "~scss/mixins";

#home {
  height: calc(100% - 130px);
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
</style>
