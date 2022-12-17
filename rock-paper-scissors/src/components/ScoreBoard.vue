<script setup>
const props = defineProps({
    cardList: {
        type: Array,
        required: true,
    },
    score: {
        type: Number,
        required: true,
    },
})
</script>

<template>
    <div class="flex justify-between mb-10 px-8 py-6 border-solid border-4 border-[var(--header-outline)] rounded-2xl mx-auto max-w-[768px]">
        <ul>
            <li v-for="card in cardList" :index="card" class="text-white uppercase font-bold text-2xl leading-none ">{{ card }}</li>
        </ul>
        <div class="bg-white rounded-xl px-12 py-4 ">
            <p class="text-[var(--score-text)] uppercase text-lg tracking-widest text-center">score</p>
            <span class="text-[var(--dark-text)] text-6xl font-bold text-center block">{{ score }}</span>
        </div>
    </div> 
</template>