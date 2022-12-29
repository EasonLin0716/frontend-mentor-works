<script setup>
const props = defineProps({
    animationDelay: {
        type: String,
        default: '0s',
    }
})
</script>

<template>
    <div :style="{ animationDelay }" class="circle-wave"></div>
</template>

<style scoped>
.circle-wave {
    @apply absolute w-full h-full bg-light-500 top-0 left-0 rounded-1/2;
}
.circle-wave {
    animation: waves 2.4s linear infinite;
}
@keyframes waves {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  
  100% {
    transform: scale(2);
    opacity: 0;
  }
}
</style>