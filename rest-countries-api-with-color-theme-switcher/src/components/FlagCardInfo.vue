<script setup>
import { useThemeStore } from '../store'
const theme = useThemeStore()
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <li :class="theme.isDark ? 'text-white' : ''" class="flex text-xs">
        <p class="font-bold mr-1">{{ title }}:</p><span>{{ text }}</span>
    </li>
</template>