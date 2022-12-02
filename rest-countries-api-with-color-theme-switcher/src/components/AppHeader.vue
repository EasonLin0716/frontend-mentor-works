<script setup>
import { useThemeStore } from '../store'
const theme = useThemeStore()
</script>

<template>
    <header 
      :class="theme.isDark ? 'bg-[var(--dark-mode-dark-blue)]' : 'bg-white'"
      class="shadow-md"
    >
      <div class="max-w-7xl mx-auto p-6 flex justify-between items-center">
        <h1 :class="{ 'text-white': theme.isDark }" class="text-2xl font-extrabold">Where in the world?</h1>
        <button class="flex items-center" @click="theme.toggleMode">
          <i :class="theme.isDark ? 'fa-solid text-white' : 'fa-regular'" class="fa-moon"></i>
          <span :class="{ 'text-white': theme.isDark }" class="pl-2">Dark Mode</span>
        </button>
      </div>
    </header>
</template>