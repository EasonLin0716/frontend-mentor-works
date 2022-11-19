<script setup>
import { ref, computed } from 'vue'
import { debounce } from '../plugins/utils.js';
import flagApi from '../api/flagApi'

const allFlagData = ref([])
const filteredFlagData = computed(() => {
  return allFlagData.value.filter(flagData => {
    return flagData.name.common.includes(searchInput.value) && flagData.region.includes(selectInput.value)
  })
})
const regionData = ref([])
const searchInput = ref('')
const selectInput = ref('')
flagApi.getFlags().then(data => {
  allFlagData.value = data
  data.forEach((item) => {
    if (!regionData.value.includes(item.region)) regionData.value.push(item.region)
  })
})
const updateSearchInputInDelay = debounce((event) => {
  searchInput.value = event.target.value
}, 500)
</script>

<template>
  <input type="text" @input="updateSearchInputInDelay" />
  <select v-model="selectInput">
    <option value="">Filter by Region</option>
    <option v-for="region in regionData" :key="region" :value="region">{{ region }}</option>
  </select>
  <ul>
    <li v-for="(flag, index) in filteredFlagData" :key="index">{{ flag.name.common }}</li>
  </ul>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
