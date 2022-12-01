import { defineStore } from 'pinia'

export const useThemeStore = defineStore('theme', {
    state: () => ({ mode: 'light' }),
    getters: {
        isDark: (state) => state.mode ==='dark'
    },
    actions: {
        toggleMode() {
            if (this.mode === 'light') {
                this.mode = 'dark'
            } else {
                this.mode = 'light'
            }
        }
    }
})