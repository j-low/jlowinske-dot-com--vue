<template>
  <section id="home" class="j-primary-view">
    <div class="hemisphere hemisphere-top">
      <div class="content-label-container"></div>
      <span class="content-label">grüss dich</span>

    </div>
    <div class="hemisphere hemisphere-bottom"></div>
    <div class="main-content">
      <div class="nav-container">
        <div class="test-container">
          <div class="test front">blog</div>
          <div class="test back a"></div>
        </div>
        <div class="test-container">
          <div class="test front">d3.js</div>
          <div class="test back b"></div>
        </div>
        <div class="test-container">
          <div class="test front">about</div>
          <div class="test back c"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
var methods = {};

export default {
  name: 'home',
  methods: methods,
  mounted: mounted
};

function mounted() {
  const home = $('home');
  const center = $('#center');
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
}

.main-content {
  @extend .flex-center-hv;
  flex-direction: row;
  height: 50%;
  min-height: 400px;
  width: 80%;
  min-width: 590px;
  margin-left: auto;
  background: #fffea6;

  z-index: 2;
}

.nav-container {
  display: flex;
  justify-content: top;
  flex-direction: row;
  margin-top: -50px;
}

.test-container {
  display: inline-block;
  width: 150px;
  margin: 0 30px;
}

.test {

  &.front {
    @extend .flex-center-hv;
    color: #777777;
    font-weight: bold;
    height: 75px;
    width: 150px;
    position: absolute;
    background: #ffffff;
    border: 3px dashed #333333;
    transform: skewY(15deg);
    z-index: 1;
  }

  &.back {
    height: 70px;
    width: 130px;
    margin-left: 12.5px;
    position: absolute;
    transform: skewY(-15deg);

    &.a {
      background: #c6ffdb;
      box-shadow: #c6ffdb 0px 0px 6px;
    }

    &.b {
      background: #d4f4ff;
      box-shadow: #d4f4ff 0px 0px 6px;
    }

    &.c {
      background: #ffe9f7;
      box-shadow: #ffe9f7 0px 0px 6px;
    }
  }

}

.hemisphere {
  position: absolute;
  left: 10%;
  height: 200px;
  width: 400px;
  background: #bae8ff
}

.hemisphere-top {
  @extend .flex-center-hv;
  top: 10%;
  border-top-left-radius: 400px;
  border-top-right-radius: 400px;
  z-index: 3;
}

.hemisphere-bottom {
  top: calc(10% + 200px);
  border-bottom-left-radius: 400px;
  border-bottom-right-radius: 400px;
  z-index: 1;
}

.content-label-container {
  top: 35%;
  height: 75px;
  width: 150px;
  position: absolute;
  transform: skewY(-5deg);
  border: 3px solid #ffffff;
}

.content-label {
  top: 49%;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  color: #fff;
}
</style>
