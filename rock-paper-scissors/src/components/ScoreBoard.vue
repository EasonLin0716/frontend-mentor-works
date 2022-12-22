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
    <div class="flex justify-between mb-10 pc:px-8 pc:py-6 px-6 py-4 border-solid border-4 border-[var(--header-outline)] rounded-2xl pc:mx-auto mx-4 pc:max-w-[768px] max-w-[468px]">
        <ul>
            <li v-for="card in cardList" :index="card" class="text-white uppercase font-bold pc:text-2xl text-lg leading-none ">{{ card }}</li>
        </ul>
        <div class="bg-white rounded-xl pc:px-12 px-5 py-4 ">
            <p class="text-[var(--score-text)] uppercase pc:text-lg text-base tracking-widest text-center">score</p>
            <span class="text-[var(--dark-text)] pc:text-6xl text-4xl font-bold text-center block">{{ score }}</span>
        </div>
    </div> 
</template>