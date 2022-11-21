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
  <div class="max-w-7xl mx-auto py-8">
    <div class="flex justify-between mb-8">
      <div class="px-7 py-4 bg-white shadow rounded">
        <i class="fa-solid fa-magnifying-glass text-[var(--light-mode-dark-gray)]"></i>
        <input class="pl-7 placeholder:text-[var(--light-mode-dark-gray)] focus:outline-none w-96" type="text" placeholder="Search for a country..." @input="updateSearchInputInDelay" />
      </div>
      <select v-model="selectInput" class="home-select">
        <option value="">Filter by Region</option>
        <option v-for="region in regionData" :key="region" :value="region">{{ region }}</option>
      </select>
    </div>
    <section class="grid grid-cols-4 gap-16">
      <router-link v-for="(flag, index) in filteredFlagData" :key="index" :to="'/' + flag.name.common" class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="flag.flags.png" class="w-full aspect-video object-cover" alt="">
        <div class="p-6">
          <h4 class="font-bold mb-2">{{ flag.name.common }}</h4>
          <ul class="flex flex-col gap-1">
            <li class="flex text-xs">
              <p class="font-bold mr-1">Population:</p><span>{{ flag.population }}</span>
            </li>
            <li class="flex text-xs">
              <p class="font-bold mr-1">Region:</p><span>{{ flag.region }}</span>
            </li>
            <li v-if="flag.capital" class="flex text-xs">
              <p class="font-bold mr-1">Capital:</p><span>{{ flag.capital[0] }}</span>
            </li>
          </ul>
        </div>
      </router-link>
    </section>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
