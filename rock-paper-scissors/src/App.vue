<script setup>
import { ref, computed } from 'vue'
import ScoreBoard from './components/ScoreBoard.vue'
import MoveCard from './components/MoveCard.vue'
import GameRules from './components/GameRules.vue'
const moveCardData = ref([
  {
    type: 'rock',
  },
  {
    type: 'paper', 
  },
  {
    type: 'scissors', 
  },
  {
    type: 'lizard', 
  },
  {
    type: 'spock', 
  },
])
const cardList = computed(() => moveCardData.value.map(item => item.type))
const score = ref(12)
</script>

<template>
  <div class=" max-w-[768px] mx-auto pt-10">
    <ScoreBoard :cardList="cardList" :score="score" />
    <div class="bg-pentagon mx-auto mt-24">
      <MoveCard v-for="card in moveCardData" :key="card.type" :svgLink="card.type" :class="card.type" class="absolute" />
    </div>  
  </div>
  <GameRules />
</template>

<style scoped>
</style>
