<template>
  <div id="app" class="container-fluid my-5 mx-3">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'blogger'
  }
</script>

<style>
  /* CSS */
  @import "../renderer/assets/farsifont/farsi.css";
  body {
    font-family: "Shabnam" !important;
  }
  b-input-group {
    font-family: "Shabnam" !important;
  }
  b-form-select {
    font-family: "Shabnam" !important;
  }
</style>
