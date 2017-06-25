<template>
  <div id="donut-container"></div>
</template>

<script>
import donut from './donutScript';

export default {
  name: 'donut',
  mounted: mounted
}

function mounted() {
  donut.init();
}
</script>


<style lang="scss">
#donut-container {

  svg {
    background-color: #e6e6e6;

    .total-complete-circle {
      fill: #666666;
    }

    .total-complete-text {
      fill: white;
      font-family: 'Roboto Condensed', sans-serif;
      font-size: 36px;
    }

    .slices-container {

      .rule {

        .has-known-issues {
          fill: red;
        }

        &:hover {
          cursor: pointer;
        }
      }
    }

    .lines-container {

      path {
        fill: none;
        stroke: #ffffff;
        stroke-width: 1;
      }
    }

    .text-container {

      .rule-completion-percentage {
        fill: #666666;
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: bold;
        font-size: 20px;
      }

      .achievement-completion-percentage, .courses-complete, .known-issues {
        fill: #666666;
        font-size: 13px;
        font-family: sans-serif;
      }
    }
  }
}
</style>
