<script setup>
import { defineProps } from 'vue'
const props = defineProps(['title', 'text'])

</script>

<template>
    <li v-if="text" class="flex gap-2 mb-1">
        <p class="font-bold">{{ title }}</p><span>{{ text }}</span>
    </li>
</template>
