<script setup>
defineProps({
    svgLink: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="w-32 h-32 flex justify-center items-center rounded-1/2 bg-orange-500">
        <div class="w-24 h-24 rounded-1/2 flex justify-center items-center bg-white">
            <img :src="'/images/icon-' + svgLink + '.svg'" :alt="svgLink" class="w-14 h-auto">
        </div>
    </div>
</template>