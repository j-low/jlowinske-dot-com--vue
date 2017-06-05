<template>
  <div id="content-heading-bottom" class="hemisphere">
    <div class="chb--inner"></div>
  </div>
</template>

<script>
</script>


<style lang="scss">
@import "~scss/classes";

#content-heading-bottom {
  top: calc(15% + 200px);

  position: fixed;

  border-bottom-left-radius: 400px;
  border-bottom-right-radius: 400px;
  z-index: 0;
}

.chb--inner {
  height: 190px;
  width: 380px;
  margin: 0px 7px;
  background: none;
  border-right: 3px solid #fff;
  border-bottom: 3px solid #fff;
  border-left: 3px solid #fff;
  border-bottom-left-radius: 380px;
  border-bottom-right-radius: 380px;
}
</style>
