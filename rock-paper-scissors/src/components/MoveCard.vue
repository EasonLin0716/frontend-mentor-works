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
        container: 'pc:w-72 pc:h-72 w-42 h-42',
        inner: 'pc:w-56 pc:h-56 w-32 h-32',
        img: 'pc:w-24 w-16'
    }
}))
</script>

<template>
    <div :class="sizeClasses[size].container" class="flex justify-center items-center rounded-1/2 cursor-pointer">
        <div :class="sizeClasses[size].inner" class="rounded-1/2 flex justify-center items-center bg-white">
            <img :src="'./images/icon-' + svgLink + '.svg'" :alt="svgLink" :class="sizeClasses[size].img" class="h-auto">
        </div>
    </div>
</template>