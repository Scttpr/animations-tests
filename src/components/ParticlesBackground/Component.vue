<template>
  <div id="particles-container">
    <figure
        :key="`particle${index}`"
        v-for="(particleStyle, index) in particles"
        :style="particleStyle" class="particle"
    />
  </div>
  <slot class="on-top"></slot>
</template>

<script setup lang="ts">
import useCSSGenerator from './useCSSGenerator.ts';
import { Range } from './types.ts';

const { randomParticleStyles } = useParticleCSSStyle;

const animationOptions = {
  animationDurationRange: [30, 120] as Range,
  animationDelayRange: [1, 30] as Range,
};

const particles = randomParticleStyles(100, animationOptions);
</script>

<style scoped>
#particles-container {
  z-index: 0;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #051632;
  overflow: hidden;
}

.particle {
  animation-name: HIDE-AND-SHOW;
  position: absolute;
  border-radius: 50%;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}

@keyframes HIDE-AND-SHOW {
  from {
    transform: scale(1);
  }

  50% {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
}

</style>
