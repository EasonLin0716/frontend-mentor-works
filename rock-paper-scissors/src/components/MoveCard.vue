<script setup>
defineProps({
    svgLink: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <div class="w-36 h-36 flex justify-center items-center rounded-1/2">
        <div class="w-28 h-28 rounded-1/2 flex justify-center items-center bg-white">
            <img :src="'/images/icon-' + svgLink + '.svg'" :alt="svgLink" class="w-14 h-auto">
        </div>
    </div>
</template>