<script setup>
import { ref } from 'vue'
import MoveCard from './components/MoveCard.vue'
const moveCardList = ref(['lizard', 'paper', 'rock', 'scissors', 'spock'])
</script>

<template>
  <MoveCard v-for="card in moveCardList" :index="card" :svgLink="card" :class="card" />
</template>

<style scoped>
</style>
