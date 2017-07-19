<template>
  <div :class="cClass">
    <div class="under"></div>
    <div class="over"></div>
  </div>
</template>

<script>
import layout from 'util/getLayoutOrientation';

export default {
  computed: {
    cClass: function() {
      return 'bg-over-under ' + layout.getLayoutOrientation(this.$route) + ' ' + this.$route.name;
    }
  }
}
</script>


<style lang="scss">
// layout & general appearance
.bg-over-under {
  position: fixed;
  top: 120px;
  right: 0;
  bottom: 0;
  left: 0;
}

.h {
  .under,
  .over {
    position: absolute;
  }

  .under {
    top: 30px;
    right: 100%;
    bottom: 150px;
    left: 0;
  }

  .over {
    top: 60px;
    right: 0;
    bottom: 120px;
    left: 100%;
    border-top: 6px solid #333333;
    border-bottom: 6px solid #333333;
    border-left: 6px solid #333333;
  }
}

.v {
  .under,
  .over {
    position: fixed;
  }

  .under {
    top: 0;
    right: 180px;
    bottom: 100%;
    left: 150px;
  }

  .over {
    top: 100%;
    right: 150px;
    bottom: 0;
    left: 180px;
    overflow-y: scroll;
    border-top: 6px solid #333333;
    border-right: 6px solid #333333;
    border-left: 6px solid #333333;
  }
}

.under {
  opacity: 0.7;
}

// route fill classes
.blog {
  .over,
  .under {
    background: #ff6e6e;
  }
}

.d3 {
  .over,
  .under {
    background: #3effff;
  }
}

.donut {
  .over,
  .under {
    background: #ffa02e;
  }
}

.line-chart {
  .over,
  .under {
    background: #31ffe1;
  }
}

.about {
  .over,
  .under {
    background: #ffff15;
  }
}

.contact {
  .over,
  .under {
    background: #87ff6e;
  }
}

</style>
