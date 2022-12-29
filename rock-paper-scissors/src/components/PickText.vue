<script setup>
import { computed } from 'vue'
const props = defineProps({
    isPlayer: {
        type: Boolean,
        default: true,
    }
})
const text = computed(() => {
    if (props.isPlayer) return 'you picked'
    return 'the house picked'
})
</script>

<template>
    <p class="text-white uppercase font-bold tracking-widest pc:text-xl text-sm text-center">{{ text }}</p>
</template>