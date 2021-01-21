<template>
  <ParticlesBackground/>
</template>

<script setup lang="ts">
// @todo need to find a workaround for eslint and setup syntax
// eslint-disable-next-line no-unused-vars
import ParticlesBackground from './components/ParticlesBackground/Component.vue';
</script>

<style>
*, *::after, ::before {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app-content {
  position: relative;
  z-index: 10;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
}

h2, span {
  font-size: 2em;
  color: #00ff00;
  z-index: 10;
}
</style>
