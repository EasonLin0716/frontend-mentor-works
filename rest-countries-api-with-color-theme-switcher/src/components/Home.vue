<script setup>
import { ref } from 'vue'
import flagApi from '../api/flagApi'

const flagData = ref([])
flagApi.getFlags().then(data => {
  flagData.value = data
})
</script>

<template>
  <ul>
    <li v-for="(flag, index) in flagData" :key="index">{{ flag.name.common }}</li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
