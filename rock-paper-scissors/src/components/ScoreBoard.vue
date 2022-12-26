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
    <div class="pc:px-8 pc:py-6 pc:mx-auto mx-4 pc:max-w-[768px] flex justify-between mb-10 px-6 py-4 border-solid border-4 border-[var(--header-outline)] rounded-2xl max-w-[468px]">
        <ul>
            <li v-for="card in cardList" :index="card" class="pc:text-2xl pc:leading-none text-white uppercase font-bold text-lg leading-none">{{ card }}</li>
        </ul>
        <div class="pc:px-12 bg-white rounded-xl px-5 py-4 ">
            <p class="pc:text-lg text-[var(--score-text)] uppercase text-base tracking-widest text-center">score</p>
            <span class="pc:text-6xl text-[var(--dark-text)] text-4xl font-bold text-center block">{{ score }}</span>
        </div>
    </div> 
</template>