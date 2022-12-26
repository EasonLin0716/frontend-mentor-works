<script setup>
import { ref } from 'vue'
const isDisplay = ref(false)
</script>

<template>
    <button 
        class="pc:right-8 pc:transform-none absolute bottom-8 right-1/2 translate-x-1/2 transform text-white uppercase tracking-widest text-lg py-2 px-10 rounded-lg border-1 border-white"
        @click="isDisplay = true"
    >rules</button>
    <Transition name="fade">
        <div v-if="isDisplay" class="absolute w-full h-full top-0 left-0 bg-opacity-50 bg-black z-20">
            <div class="pc:top-1/2 pc:left-1/2 pc:rounded-lg pc:-translate-x-1/2 pc:-translate-y-1/2 pc:transform pc:w-auto pc:h-auto fixed  bg-white pt-7 px-10 pb-10 rounded-none w-full h-full" >
                <div class="pc:pt-0 pc:justify-between flex justify-center items-baseline pt-20">
                    <h4 class="uppercase text-3xl font-bold mb-4 text-[var(--dark-text)]">rules</h4>
                    <button class="pc:static pc:transform-none absolute bottom-20 left-1/2 -translate-x-1/2 transform text-4xl text-gray-400 font-bold" @click="isDisplay = false">&times;</button>
                </div>
                <img class="pc:mx-0 pc:static pc:transform-none mx-auto absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform" src="/images/image-rules-bonus.svg" alt="">
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