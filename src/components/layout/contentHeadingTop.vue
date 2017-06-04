<template>
  <div id="content-heading-top" class="hemisphere">
    <div class="content-label-container"></div>
    <span class="content-label">{{ heading }}</span>
  </div>
</template>

<script>
export default {
  props: ['heading']
}
</script>


<style lang="scss">
@import "~scss/classes";

#content-heading-top {
  @extend .flex-center-hv;
  position: fixed;
  top: 10%;
  border-top-left-radius: 400px;
  border-top-right-radius: 400px;
  z-index: 2;
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
  color: #ffffff;
}
</style>
