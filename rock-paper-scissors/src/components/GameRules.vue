<script setup>
import { ref } from 'vue'
const isDisplay = ref(false)
</script>

<template>
    <button 
        class="absolute bottom-8 right-8 text-white uppercase tracking-widest text-lg py-2 px-10 rounded-lg border-1 border-white"
        @click="isDisplay = true"
    >rules</button>
    <Transition name="fade">
        <div v-if="isDisplay" class="absolute w-full h-full top-0 left-0 bg-opacity-50 bg-black">
            <div class="fixed top-1/2 left-1/2  bg-white pt-7 px-10 pb-10 rounded-lg -translate-x-1/2 -translate-y-1/2 transform" >
                <div class="flex justify-between items-baseline">
                    <h4 class="uppercase text-3xl font-bold mb-4 text-[var(--dark-text)]">rules</h4>
                    <button class="text-4xl text-gray-400 font-bold" @click="isDisplay = false">&times;</button>
                </div>
                <img src="/images/image-rules-bonus.svg" alt="">
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>