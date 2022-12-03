<script setup>
import { useThemeStore } from '../store'
const theme = useThemeStore()
const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
    selections: {
        type: Array,
        required: true,
    },
})
</script>

<template>
    <button :class="{'is-dark': theme.isDark}" class="app-select">
        <input type="hidden" :value="modelValue" />
        <span>{{ modelValue || 'Filter by Region' }}</span>
        <ul :class="theme.isDark ? 'bg-[var(--dark-mode-dark-blue)]' : 'bg-white'" class="hidden absolute w-full left-0 top-16 py-2 rounded shadow">
            <li 
            v-for="item, index in selections" 
            :key="index" 
            :value="item" 
            class="px-5 py-1 cursor-pointer"
            @click="$emit('update:modelValue', item)"
            >{{ item }}</li>
        </ul>
    </button>
</template>