<template>
  <q-page>
    <div class="row">
      <div class="col-8">
       <HomePage></HomePage>
      </div>
      <div class="col-xs-12 col-md-4 flex flex-center">
            <Vue3Lottie :animationData="AstronautJSON"  :width="500" :height="500" />
      </div>
    </div>
  </q-page>
<!--  <q-page class="flex flex-center">-->

<!--  </q-page>-->
</template>

<script setup>
  import { Vue3Lottie } from 'vue3-lottie'
  import 'vue3-lottie/dist/style.css'
  import AstronautJSON from '../assets/principal.json'
  import HomePage from '../components/HomePage/HomePage'



</script>
<style lang="scss" scoped>
  .q-page {
    background: transparent;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: rgb(0, 140, 255);
      width: 100%;
      height: 100%;
      z-index: -2;
      clip-path: polygon(50% 0%, 100% 0, 100% 100%, 0 99%, 0 33%);
    }
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      background: rgb(234, 0, 255);
      width: 100%;
      height: 100%;
      z-index: -1;
      opacity: 0.25;
      clip-path: polygon(100% 0, 0% 100%, 100% 100%);
    }
  }
</style>
