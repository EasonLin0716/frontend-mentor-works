<script setup>
import { computed } from 'vue'
defineProps({
    svgLink: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        default: 'md',
    }
})
const sizeClasses = computed(() => ({
    md: {
        container: 'pc:w-34 pc:h-34 w-24 h-24',
        inner: 'pc:w-26 pc:h-26 w-20 h-20',
        img: 'pc:w-12 w-10'
    },
    lg: {
        container: 'w-72 h-72',
        inner: 'w-56 h-56',
        img: 'w-24'
    }
}))
</script>

<template>
    <div :class="sizeClasses[size].container" class="flex justify-center items-center rounded-1/2 cursor-pointer">
        <div :class="sizeClasses[size].inner" class="rounded-1/2 flex justify-center items-center bg-white">
            <img :src="'/images/icon-' + svgLink + '.svg'" :alt="svgLink" :class="sizeClasses[size].img" class="h-auto">
        </div>
    </div>
</template>