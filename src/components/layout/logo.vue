<template>
  <router-link
    class="logo logo-link"
    to="/">
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-20 0 190 150"
      v-on:mouseenter="mouseenter"
      v-on:mouseleave="mouseleave">
      <g>
        <g>
          <rect class="logo-cls-1" x="4" y="4" width="142" height="142"/>
          <path class="logo-cls-2" d="M142,8V142H8V8H142m8-8H0V150H150V0Z"/>
          <path class="logo-letter logo-letter-j logo-cls-2" d="M82.3,90.33V125.2q0,7.83-.16,10.07a7.7,7.7,0,0,1-1.47,4,6.7,6.7,0,0,1-3.55,2.5,24.42,24.42,0,0,1-6.75.69h-6.8v-9.12q1.22.1,1.77.1a3.43,3.43,0,0,0,2.29-.71,2.65,2.65,0,0,0,1-1.74,39.55,39.55,0,0,0,.13-4V90.33Z"/>
          <path class="logo-letter logo-letter-p logo-cls-2" d="M87.56,90.33h13.66a32.08,32.08,0,0,1,8.52.87,9.53,9.53,0,0,1,4.48,2.51,8.63,8.63,0,0,1,2,4,35.64,35.64,0,0,1,.53,7.23v4.54q0,5-1,7.28a7.06,7.06,0,0,1-3.79,3.51,17.9,17.9,0,0,1-7.2,1.22h-3.64v21H87.56Zm13.57,8.93v13.28l1,0a3.14,3.14,0,0,0,2.59-.92q.73-.92.73-3.82v-4.29q0-2.67-.84-3.48T101.12,99.26Z"/>
          <path class="logo-letter logo-letter-l logo-cls-2" d="M134.25,90.33v41.73h8.25V142.5H120.69V90.33Z"/>
          <path class="logo-cls-3" d="M10,32"/>
          <path class="logo-cls-4" d="M3.41,11.42"/>
          <line class="logo-bar-top logo-cls-5" x1="6" y1="21" x2="144" y2="20"/>
          <line class="logo-bar-bottom logo-cls-6" x1="4" y1="33" x2="150" y2="32"/>
        </g>
      </g>
    </svg>
  </router-link>
</template>

<script>
import logoAnim from 'anim/layout/logo';

var methods = {};
_.assign(methods, logoAnim);

export default {
  name: 'logo',
  methods: methods
}
</script>

<style lang="scss">
svg#logo {
  height: 100px;
}

.logo-cls-1 { fill: #06c5ff; }

.logo-cls-2, .logo-cls-3, .logo-cls-5 { fill: #333; }

.logo-cls-3,.logo-cls-4,.logo-cls-5,.logo-cls-6 {
  stroke: #333;
  stroke-miterlimit: 10;
}

.logo-cls-3 { stroke-width: 8px; }

.logo-cls-4 { fill: #ffef57; }

.logo-cls-4,.logo-cls-6 { stroke-width: 4px; }

.logo-cls-5 { stroke-width: 2px; }

.logo-cls-6 { fill: #fffef3; }
</style>
