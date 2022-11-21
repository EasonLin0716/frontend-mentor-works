<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import flagApi from '../api/flagApi'

const route = useRoute()
const flagData = ref({})
const borderData = ref([])

flagApi.getFlagByName(route.params.name).then(nameRes => {
  if (nameRes && nameRes[0]) {
    flagData.value = nameRes[0]
    flagApi.getFlagsByCodes(flagData.value.borders).then(codeRes => {
      borderData.value = codeRes.map(item => item.name.common)
    })
  }
})
</script>

<template>
  <div>
    <RouterLink to="/">Back</RouterLink>
    <img v-if="flagData.flags" :src="flagData.flags.png" alt="">
    <h2 v-if="flagData.name">{{ flagData.name.common }}</h2>
    <div class="flex">
      <ul>
        <li v-if="flagData.name">
          <p>Native Name:</p><span>{{ flagData.name.nativeName.nld.common }}</span>
        </li>
        <li>
          <p>Population:</p><span>{{ flagData.population }}</span>
        </li>
        <li>
          <p>Region:</p><span>{{ flagData.region }}</span>
        </li>
        <li>
          <p>Sub Region:</p><span>{{ flagData.subRegion }}</span>
        </li>
        <li v-if="flagData.capital">
          <p>Capital:</p><span>{{ flagData.capital[0] }}</span>
        </li>
      </ul>
      <ul>
        <li v-if="flagData.tld">
          <p>Top Level Domain:</p><span>{{ flagData.tld[0] }}</span>
        </li>
        <li v-if="flagData.currencies">
          <p>Currencies:</p><span>{{ flagData.currencies[0] }}</span>
        </li>
        <li v-if="flagData.languages">
          <p>Languages:</p><span v-for="(language, key) in flagData.languages" :key="key">{{ language }}&nbsp;</span>
        </li>
      </ul>
    </div>
    <ul>
      <li v-for="(border, index) in borderData" :key="index">{{ border }}</li>
    </ul>
  </div>
</template>
