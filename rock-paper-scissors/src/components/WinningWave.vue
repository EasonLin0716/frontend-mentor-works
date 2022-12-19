<script setup>
import CircleWave from './CircleWave.vue'
</script>

<template>
    <CircleWave />
    <CircleWave animationDelay="0.8s" />
    <CircleWave animationDelay="1.6s" /><div :style="{ animationDelay }" class="circle-wave"></div>
</template>
