<template>
    <v-parallax
        src="@/assets/bg/food-menu.jpg"
        scale="0.7"
    >
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1>
                Example Drink Menu
            </h1>
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
                <h1>coming soon</h1>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name      : 'DrinkMenu',
    components: {
    },
    computed: {
    },
};
</script>

<style scoped lang="scss">
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