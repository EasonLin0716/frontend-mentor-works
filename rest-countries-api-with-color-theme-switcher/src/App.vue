<template>
  <div id="app">
    <header class="bg-white shadow-md">
      <div class="max-w-7xl mx-auto p-6 flex justify-between items-center">
        <h1 class="text-2xl font-extrabold">Where in the world?</h1>
        <div class="flex items-center">
          <i class="fa-regular fa-moon"></i>
          <span class="pl-2">Dark Mode</span>
        </div>
      </div>
    </header>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
