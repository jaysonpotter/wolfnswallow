<template>
    <ul>
        <li
            v-for="(section, index) in menu"
            :key="index"
        >
            <div v-if="section.category === 'Snacks'">
                <h1>{{ section.category }}</h1>
                <h2>{{ section.description }}</h2>
                <ul>
                    <li
                        v-for="(item, itemIndex) in section.items"
                        :key="itemIndex"
                    >
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                    </li>
                </ul>
            </div>
        </li>
    </ul>

    <ul>
        <li
            v-for="(section, index) in menu"
            :key="index"
        >
            <div v-if="section.category === 'Conserva'">
                <h1>{{ section.category }}</h1>
                <h2>{{ section.description }}</h2>
                <ul>
                    <li
                        v-for="(item, itemIndex) in section.items"
                        :key="itemIndex"
                    >
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                    </li>
                </ul>
            </div>
        </li>
    </ul>

    <ul>
        <li
            v-for="(section, index) in menu"
            :key="index"
        >
            <div v-if="section.category === 'Boards'">
                <h1>{{ section.category }}</h1>
                <h2>{{ section.description }}</h2>
                <ul>
                    <li
                        v-for="(item, itemIndex) in section.items"
                        :key="itemIndex"
                    >
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                    </li>
                </ul>
            </div>
        </li>
    </ul>

    <ul>
        <li
            v-for="(section, index) in menu"
            :key="index"
        >
            <div v-if="section.category === 'Vegan conserva'">
                <h1>{{ section.category }}</h1>
                <h2>{{ section.description }}</h2>
                <ul>
                    <li
                        v-for="(item, itemIndex) in section.items"
                        :key="itemIndex"
                    >
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                    </li>
                </ul>
            </div>
        </li>
    </ul>

    <ul>
        <li
            v-for="(section, index) in menu"
            :key="index"
        >
            <div v-if="section.category === 'Finale'">
                <h1>{{ section.category }}</h1>
                <h2>{{ section.description }}</h2>
                <ul>
                    <li
                        v-for="(item, itemIndex) in section.items"
                        :key="itemIndex"
                    >
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                    </li>
                </ul>
            </div>
        </li>
    </ul>

    <ul>
        <li
            v-for="(section, index) in menu"
            :key="index"
        >
            <div v-if="section.category === 'Lil buddies'">
                <h1>{{ section.category }}</h1>
                <h2>{{ section.description }}</h2>
                <ul>
                    <li
                        v-for="(item, itemIndex) in section.items"
                        :key="itemIndex"
                    >
                        <h3>{{ item.name }}</h3>
                        <p>{{ item.description }}</p>
                    </li>
                </ul>
            </div>
        </li>
    </ul>

    <ul class="disclaimers">
        <li>our food is served family style and will come out as ready</li>
        <li>consuming raw, undercooked, or unpasteurized foods may increase your risk of food-borne illness</li>
        <li>not all ingredients are listed; please inform us of any allergies</li>
    </ul>
</template>

<script>
import {mapState} from "pinia";

import {useFoodMenuStore} from "@/stores/food-menu.js";

export default {
    name: 'FoodMenu',
    data() {
        return {
            store: null,
        };
    },
    computed: {
        ...mapState(useFoodMenuStore, ['menu'])
    },
};
</script>

<style scoped lang="scss">
.title {
    font-family: "Special Elite", system-ui;
    font-weight: 400;
    font-style: normal;
}

.cantora-one-regular {
    font-family: "Cantora One", sans-serif;
    font-weight: 400;
    font-style: normal;
}

// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 200 to 800

.assistant {
    font-family: "Assistant", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.special-elite-regular {
    font-family: "Special Elite", serif;
    font-weight: 400;
    font-style: normal;
}

.disclaimers {
    background-color: #ffe6cb;
}
</style>