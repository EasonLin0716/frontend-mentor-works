<script setup>
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
import flagApi from '../api/flagApi'
import DetailInfo from './DetailInfo.vue';

const route = useRoute()
const flagData = ref({})
const borderData = ref([])

watch(
  () => route.params.name,
  async name => {
    const getLanguages = (obj) => {
      const res = []
      for (const key in obj) {
        res.push(obj[key])
      }
      return res.join(', ')
    }
    const getNativeName = (nativeNameObj) => {
      const firstKey = Object.keys(nativeNameObj)[0]
      return nativeNameObj[firstKey] ? nativeNameObj[firstKey].common : ''
    }
    const nameRes = await flagApi.getFlagByName(name)
    if (nameRes && nameRes[0]) {
      const data = nameRes[0];
      flagData.value = {
        imgSrc: data.flags.png,
        commonName: data.name.common,
        nativeName: getNativeName(data.name.nativeName),
        population: data.population,
        region: data.region,
        subRegion: data.subRegion,
        capital: data.capital ? data.capital[0] : '',
        tld: data.tld ? data.tld[0] : '',
        currencies: data.currencies ? data.currencies[0] : '',
        languages: getLanguages(data.languages),
        borders: data.borders,
      }
      if (flagData.value.borders) {
        flagApi.getFlagsByCodes(flagData.value.borders).then(codeRes => {
          borderData.value = codeRes.map(item => item.name.common)
        })
      }
    }
  },
  {
    immediate: true
  }
)
</script>

<template>
  <div class="max-w-7xl mx-auto px-6 py-12">
    <RouterLink class="gap-3 px-8 py-2 shadow-md bg-white rounded inline-flex items-center mb-12" to="/">
      <i class="fa-solid fa-arrow-left-long"></i>
      <span>Back</span>
    </RouterLink>
    <div class="flex gap-24">
      <img :src="flagData.imgSrc" class="flag-detail__img" alt="" width="480">
      <div class="py-8 flex flex-col justify-between">
        <div>
          <h2 class="text-2xl font-bold mb-6">{{ flagData.commonName }}</h2>
          <div class="flex gap-24">
            <ul>
              <DetailInfo title="Native Name:" :text="flagData.nativeName" />
              <DetailInfo title="Population:" :text="flagData.population" />
              <DetailInfo title="Region:" :text="flagData.region" />
              <DetailInfo title="Sub Region:" :text="flagData.subRegion" />
              <DetailInfo title="Capital:" :text="flagData.capital" />
            </ul>
            <ul>
              <DetailInfo title="Top Level Domain:" :text="flagData.tld" />
              <DetailInfo title="Currencies:" :text="flagData.currencies" />
              <DetailInfo title="Languages:" :text="flagData.languages" />
            </ul>
          </div>
        </div>
        <div v-if="borderData.length" class="flex items-center gap-4">
          <p class="font-bold">Border Countries:</p>
          <div class="flex gap-3 flex-wrap">
            <RouterLink v-for="(border, index) in borderData" :to="'/' + border" :key="index" class="border border-gray-300 shadow py-1 px-5">{{ border }}</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
