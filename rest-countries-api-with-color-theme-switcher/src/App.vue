<script setup>
import AppHeader from './components/AppHeader.vue'
import { useThemeStore } from './store'
const theme = useThemeStore()
</script>

<template>
  <div :class="theme.isDark ? 'bg-[var(--dark-mode-very-dark-blue)]' : ''" class="flex flex-col min-h-full">
    <AppHeader />
    <router-view class="grow"></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
