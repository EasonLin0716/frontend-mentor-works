<script lang="ts" setup>
import { defineProps } from 'vue';
const props = defineProps<{
    theme: string;
}>();
</script>

<template>
    <button :class="`app-button is-${props.theme}`">
        <slot />
    </button>
</template>

<style scoped>
@import '~/assets/css/_button-themes.css';

.app-button {
    width: 158px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 0;
    color: var(--white);
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s;
}
</style>