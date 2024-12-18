<template>
    <v-parallax
        src="@/assets/bg/food-menu.jpg"
        scale="0.7"
    >
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1>
                Food Menu
            </h1>
            <h4>
                Small Plates
            </h4>
        </div>
    </v-parallax>
    <v-container
        class="menu"
    >
        <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <menu-category :menu-category-data="getSnacks" />
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <menu-category :menu-category-data="getConserva" />
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <menu-category :menu-category-data="getBoards" />
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <menu-category :menu-category-data="getVeganConserva" />
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <menu-category :menu-category-data="getFinale" />
            </v-col>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
                <menu-category :menu-category-data="getLilBuddies" />
            </v-col>
        </v-row>


        <v-row>
            <v-col>
                <ul class="disclaimers">
                    <li class="disclaimer">
                        our food is served family style and will come out as ready
                    </li>
                    <li class="disclaimer">
                        consuming raw, undercooked, or unpasteurized foods may increase your risk of food-borne illness
                    </li>
                    <li class="disclaimer">
                        not all ingredients are listed; please inform us of any allergies
                    </li>
                </ul>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import {mapState} from "pinia";

import {useFoodMenuStore} from "@/stores/food-menu.js";

import MenuCategory from "@/components/menu/menu-category.vue";

export default {
    name      : 'FoodMenu',
    components: {
        MenuCategory,
    },
    data() {
        return {
            store: null,
        };
    },
    computed: {
        ...mapState(useFoodMenuStore, [
            'getSnacks',
            'getConserva',
            'getBoards',
            'getVeganConserva',
            'getFinale',
            'getLilBuddies',
            'getLilBuddies'
        ])
    },
};
</script>

<style scoped lang="scss">
.hero {
    position: relative;
    overflow: hidden;
    height: 250px;
}

.hero-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
}

.layer-background {
    background-image: url('@/assets/bg/terrazzo.png');
    transform: translateZ(-2px) scale(3);
}

.layer-foreground {
    z-index: 1;
}

.menu {
    background-color: #fff6ec;
}

.disclaimers {
    padding: 2rem 3rem;
    background-color: #ffe6cb;

    .disclaimer {
        font-family: "Assistant", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
        margin: 1rem 0;
    }
}
</style>