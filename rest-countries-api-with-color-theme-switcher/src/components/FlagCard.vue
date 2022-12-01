<script setup>
import { useThemeStore } from '../store'
const theme = useThemeStore()
const props = defineProps({
    flag: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <img :src="flag.flags.png" class="w-full aspect-video object-cover" alt="">
    <div :class="theme.isDark ? 'bg-[var(--dark-mode-dark-blue)]' : ''" class="p-6">
        <h4 :class="theme.isDark ? 'text-white' : ''" class="font-bold mb-2">{{ flag.name.common }}</h4>
        <ul class="flex flex-col gap-1">
            <li class="flex text-xs">
                <p class="font-bold mr-1">Population:</p><span>{{ flag.population }}</span>
            </li>
            <li class="flex text-xs">
                <p class="font-bold mr-1">Region:</p><span>{{ flag.region }}</span>
            </li>
            <li v-if="flag.capital" class="flex text-xs">
                <p class="font-bold mr-1">Capital:</p><span>{{ flag.capital[0] }}</span>
            </li>
        </ul>
    </div>
</template>