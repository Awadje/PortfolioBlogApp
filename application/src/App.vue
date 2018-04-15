<template>
  <v-app>
    <v-container>
      <router-view name="header"></router-view>
      <router-view></router-view>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import "./assets/styles";

  body {
    background: url('./assets/images/lake.jpg') no-repeat center center fixed;
    background-size: cover;

    &:after {
      content: '';
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: $background-tint;
      opacity: .2;
      z-index: -1;
    }

    .application {
      background: none !important;
    }
  }
</style>
