<script setup>
import { ref, computed } from 'vue'
import ScoreBoard from './components/ScoreBoard.vue'
import MoveCard from './components/MoveCard.vue'
import GameRules from './components/GameRules.vue'
import PickText from './components/PickText.vue'
import WinningWave from './components/WinningWave.vue'
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
const gameStateMap = computed(() => ({
  0: 'pending',
  1: 'you win',
  2: 'you lose',
  3: 'draw'
}))
const cardList = computed(() => {
  const res = []
  for (const k in moveCardData.value) {
    res.push(k)
  }
  return res
})
const score = ref(0)
const gameState = ref(0)
const playerChosenCard = ref('')
const houseChosenCard = ref('')
function playerChoose(type) {
  playerChosenCard.value = type
  const timer = setInterval(() => {
    houseChosenCard.value = getRandomCard()
  }, 50)
  setTimeout(() => {
    clearTimeout(timer)
    setWinner()
  }, 2000)
}
function setWinner() {
  const playMoveBeats = moveCardData.value[playerChosenCard.value].beats
  const houseMoveBeats = moveCardData.value[houseChosenCard.value].beats
  if (playMoveBeats.includes(houseChosenCard.value)) {
    // player wins
    gameState.value = 1
    score.value++
  } else if (houseMoveBeats.includes(playerChosenCard.value)) {
    // house wins
    gameState.value = 2
  } else {
    // draw
    gameState.value = 3
  }
}
function getRandomCard() {
  const randomIndex = (Math.random() * cardList.value.length) | 0
  return cardList.value[randomIndex]
}
function resetGame() {
  gameState.value = 0
  playerChosenCard.value = ''
  houseChosenCard.value = ''
}
</script>

<template>
  <div class="max-w-[1024px] mx-auto pt-10">
    <ScoreBoard :cardList="cardList" :score="score" />
    <div v-if="playerChosenCard && houseChosenCard" class="flex justify-between">
      <div :class="{ 'grid-cols-2': !gameState, 'grid-cols-3': gameState }" class="grid gap-12 items-center justify-items-center mx-auto">
          <PickText />
          <div v-if="gameState"></div>
          <PickText :isPlayer="false" />
          <div class="relative">
            <MoveCard 
              :svgLink="playerChosenCard" 
              :class="playerChosenCard" 
              class="z-10 relative left-0 top-0"
              size="lg"
            />
            <WinningWave v-if="gameState === 1" />
          </div>
          <div v-if="gameState" class="flex flex-col justify-center">
            <p class="uppercase text-white font-bold text-5xl mb-4 text-center">{{ gameStateMap[gameState] }}</p>
            <button class="bg-white rounded-lg uppercase text-sm font-bold tracking-widest py-4 px-10" @click="resetGame">play again</button>
          </div>
          <div class="relative">
            <MoveCard 
              :svgLink="houseChosenCard" 
              :class="houseChosenCard" 
              class="z-10 relative left-0 top-0"
              size="lg"
            />
            <WinningWave v-if="gameState === 2" />
          </div>
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
