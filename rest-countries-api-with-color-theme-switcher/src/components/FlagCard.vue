<script setup>
import FlagCardInfo from './FlagCardInfo.vue'
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
            <FlagCardInfo title="Population" :text="flag.population" />
            <FlagCardInfo title="Region" :text="flag.region" />
            <FlagCardInfo v-if="flag.capital" title="Capital" :text="flag.capital[0]" />
        </ul>
    </div>
</template>