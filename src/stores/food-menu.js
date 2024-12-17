// Utilities
import { defineStore } from 'pinia';
import { markRaw } from 'vue';
import data from '@/data/food-menu.json';

export const useFoodMenuStore = defineStore('foodMenu', {
    state: () => ({
        menu: markRaw(data)
    }),
    getters: {},
    actions: {}
});
