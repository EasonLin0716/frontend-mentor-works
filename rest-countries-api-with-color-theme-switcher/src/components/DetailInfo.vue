<script setup>
import { useThemeStore } from '../store'
const theme = useThemeStore()
const props = defineProps(['title', 'text'])

</script>

<template>
    <li v-if="text" :class="theme.isDark ? 'text-white' : ''" class="flex gap-2 mb-1">
        <p class="font-bold">{{ title }}</p><span>{{ text }}</span>
    </li>
</template>
