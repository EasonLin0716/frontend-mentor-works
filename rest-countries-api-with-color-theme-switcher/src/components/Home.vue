<script setup>
import { ref } from 'vue'
import flagApi from '../api/flagApi'

const allFlagData = ref([])
const regionData = ref([])
const searchInput = ref('')
const selectInput = ref('')
flagApi.getFlags().then(data => {
  allFlagData.value = data
  data.forEach((item) => {
    if (!regionData.value.includes(item.region)) regionData.value.push(item.region)
  })
})
</script>

<template>
  <input type="text" v-model="searchInput" />
  <select v-model="selectInput">
    <option value="">Filter by Region</option>
    <option v-for="region in regionData" :key="region" :value="region">{{ region }}</option>
  </select>
  <ul>
    <li v-for="(flag, index) in allFlagData" :key="index">{{ flag.name.common }}</li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
