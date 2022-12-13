<script setup>
defineProps({
    svgLink: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="w-34 h-34 flex justify-center items-center rounded-1/2">
        <div class="w-26 h-26 rounded-1/2 flex justify-center items-center bg-white">
            <img :src="'/images/icon-' + svgLink + '.svg'" :alt="svgLink" class="w-12 h-auto">
        </div>
    </div>
</template>