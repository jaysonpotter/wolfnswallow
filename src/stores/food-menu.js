// Utilities
import { defineStore } from 'pinia';
import { markRaw } from 'vue';
import data from '@/data/food-menu.json';

export const useFoodMenuStore = defineStore('foodMenu', {
    state: () => ({
        menu: markRaw(data)
    }),
    getters: {
        getSnacks () {
            return this.menu.find(item => item.category === 'Snacks');
        },
        getConserva () {
            return this.menu.find(item => item.category === 'Conserva');
        },
        getBoards () {
            return this.menu.find(item => item.category === 'Boards');
        },
        getVeganConserva () {
            return this.menu.find(item => item.category === 'Vegan Conserva');
        },
        getFinale () {
            return this.menu.find(item => item.category === 'Finale');
        },
        getLilBuddies () {
            return this.menu.find(item => item.category === 'Lil Buddies');
        },
        getCaviar () {
            return this.menu.find(item => item.category === 'Caviar');
        }
    },
    actions: {}
});
