<script setup>
import { ref, computed } from 'vue'
import ScoreBoard from './components/ScoreBoard.vue'
import MoveCard from './components/MoveCard.vue'
import GameRules from './components/GameRules.vue'
import PickText from './components/PickText.vue'
const moveCardData = ref({
    rock: {
      beats: ['lizard', 'scissors']
    },
    paper: {
      beats: ['rock', 'spock']
    },
    scissors: {
      beats: ['paper', 'lizard']
    },
    lizard: {
      beats: ['paper', 'spock']
    },
    spock: {
      beats: ['scissors', 'rock']
    }
  })
const cardList = computed(() => {
  const res = []
  for (const k in moveCardData.value) {
    res.push(k)
  }
  return res
})
const score = ref(12)
const playerChosenCard = ref('')
const houseChosenCard = ref('')
function playerChoose(type) {
  playerChosenCard.value = type
  houseChosenCard.value = getRandomCard()
}
function getRandomCard() {
  const randomIndex = (Math.random() * cardList.value.length) | 0
  return cardList.value[randomIndex]
}
</script>

<template>
  <div class="max-w-[768px] mx-auto pt-10">
    <ScoreBoard :cardList="cardList" :score="score" />
    <div v-if="playerChosenCard" class="flex justify-between">
      <div class="flex-1">
        <PickText />
        <MoveCard 
          :svgLink="playerChosenCard" 
          :class="playerChosenCard" 
        />
      </div>
      <div class="flex-1">
        <PickText :isPlayer="false" />
        <MoveCard 
          :svgLink="houseChosenCard" 
          :class="houseChosenCard" 
        />
      </div>
    </div>
    <div v-else class="bg-pentagon mx-auto mt-24">
      <MoveCard 
        v-for="card in cardList" 
        :key="card" 
        :svgLink="card" 
        :class="card" 
        class="absolute"
        @click="playerChoose(card)"
      />
    </div>
  </div>
  <GameRules />
</template>

<style scoped>
</style>
