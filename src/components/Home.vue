<template>
  <section id="home" class="j-primary-view">
    <transition v-on:enter="" v-on:leave="" appear></transition>
    <div class="j-nav">
      <div class="j-nav-button">
        <div class="j-nav-icon nav-blog"></div>
      </div>
      <div class="j-nav-button">
        <div class="j-nav-icon nav-d3"></div>
      </div>
      <div class="j-nav-button">
        <div class="j-nav-icon nav-about"></div>
      </div>
    </div>
  </section>
</template>

<script>
import trans from '../gsap-scripts/homeTransitions'

const methods = {}
_.assign(methods, trans)

export default {
  name: 'home',
  methods: methods
}
</script>


<style lang="scss" scoped>
#home {
  display: flex;
  height: calc(100% - 130px);
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.j-nav {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  width: 100%;
  background-color: rgba(183, 42, 0, 0.4);
}

h1 {
  font-size: 2.0em;
  font-weight: normal;
}

.j-nav-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 125px;
  width: 125px;
  margin: 0 15px;
  border-radius: 50%;
  background-color: rgba(135, 49, 35, 1);
  box-shadow: 2px 0px 4px rgba(48px, 29px, 12px, 0.8);
}

.j-nav-icon {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  border: 1px solid rgba(251, 241, 222, 0.8);
  opacity: 0.4;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &.nav-blog {}

  &.nav-d3 {
    background-color: rgba(255, 255, 255, 1);
    background-image: url('../assets/d3.png');
    background-size: cover;
  }

  &.nav-about {
    background-image: url('../assets/jlow.jpg');
    background-size: cover;
  }
}

</style>
