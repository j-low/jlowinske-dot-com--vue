<template>
  <section id="home" class="j-primary-view">
    <transition v-on:enter="" v-on:leave="" appear></transition>
    <div class="j-nav">
      <h1>PRIMARY NAV AREA</h1>
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
  padding-top: 12%;
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

</style>
