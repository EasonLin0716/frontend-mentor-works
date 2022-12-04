<script setup>
import { ref, computed } from 'vue'
import { debounce } from '../plugins/utils.js'
import flagApi from '../api/flagApi'
import FlagCard from './FlagCard.vue'
import AppSelect from './AppSelect.vue'
import { useThemeStore } from '../store'
const theme = useThemeStore()

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
  data.forEach((item) => {
    if (!regionData.value.includes(item.region)) regionData.value.push(item.region)
    item.population = item.population.toLocaleString()
  })
  allFlagData.value = data
})
const updateSearchInputInDelay = debounce((event) => {
  searchInput.value = event.target.value
}, 500)
</script>

<template>
  <div class="max-w-7xl w-full mx-auto px-6 py-8">
    <div class="flex flex-wrap justify-between mb-8 gap-8">
      <div :class="theme.isDark ? 'bg-[var(--dark-mode-dark-blue)]' : 'bg-white'" class="px-7 py-4 shadow rounded md:w-auto w-full flex items-center">
        <i :class="theme.isDark ? 'text-white' : 'text-[var(--light-mode-dark-gray)]'" class="fa-solid fa-magnifying-glass"></i>
        <input :class="theme.isDark ? 'bg-[var(--dark-mode-dark-blue)] placeholder:text-white' : 'placeholder:text-[var(--light-mode-dark-gray)]'" class="pl-7 focus:outline-none w-96 flex-grow" type="text" placeholder="Search for a country..." @input="updateSearchInputInDelay" />
      </div>
      <AppSelect v-model="selectInput" :selections="regionData" />
    </div>
    <section class="grid xl:grid-cols-4 md:grid-cols-2 gap-16">
      <RouterLink v-for="(flag, index) in filteredFlagData" :key="index" :to="'/' + flag.name.common" class="bg-white rounded-lg shadow-md overflow-hidden">
        <FlagCard :flag="flag" />
      </RouterLink>
    </section>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
