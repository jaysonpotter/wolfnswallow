<template>
    <v-parallax
        src="@/assets/photos/welcome.jpg"
        :scale="$vuetify.display.mdAndAbove ? 1 : 0.7"
    >
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1>
                Wolf n Swallow
            </h1>
            <h4>
                opening early 2025
            </h4>
        </div>
    </v-parallax>
    <v-container>
        <v-row>
            <v-col
                cols="12"
            >
                <v-card>
                    <template #text>
                        <v-row>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <p class="service">
                                    Wine
                                </p>
                                <p class="service">
                                    Beer
                                </p>
                                <p class="service">
                                    Amaro
                                </p>
                                <p class="service">
                                    Cocktails
                                </p>
                            </v-col>
                            <v-col
                                cols="12"
                                md="6"
                            >
                                <p class="service">
                                    Small Plates
                                </p>
                                <p class="service">
                                    Charcuterie
                                </p>
                                <p class="service">
                                    Caviar
                                </p>
                                <p class="service">
                                    Conserva
                                </p>
                            </v-col>
                        </v-row>
                    </template>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col
                cols="12"
                sm="4"
            >
                <v-card
                    clickable
                    to="/food-menu"
                    class="food-menu-button"
                >
                    <v-img
                        src="@/assets/photos/food-menu-button.jpg"
                    />
                    <v-card-title>Food Menu</v-card-title>
                    <v-card-subtitle>seasonal and daily delights</v-card-subtitle>
                    <v-card-text>
                        hungy? check out an example of what's on the slab.
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                cols="12"
                sm="4"
            >
                <v-card
                    clickable
                    to="/drink-menu"
                    class="drink-menu-button"
                >
                    <v-img
                        src="@/assets/photos/wine-menu-button.jpg"
                    />
                    <v-card-title>Drink Menu</v-card-title>
                    <v-card-subtitle>refreshments with distinction</v-card-subtitle>
                    <v-card-text>
                        we know you're thirsty.
                        <span class="coming-soon">Coming Soon</span>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                cols="12"
                sm="4"
            >
                <v-card
                    clickable
                    to="/flight-club"
                    class="flight-club-button"
                >
                    <v-img
                        src="@/assets/photos/flight-club-button.jpg"
                    />
                    <v-card-title>Flight Club</v-card-title>
                    <v-card-subtitle>continue as long as necessary</v-card-subtitle>
                    <v-card-text>
                        first rule is we talk about Flight Club.
                        <span class="coming-soon">Coming Soon</span>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Intro"
};
</script>


<style scoped lang="scss">
p {
    font-family: "Assistant", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    margin-bottom: 1rem;
}

.service {
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-weight: 700;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-align: center;
}
.coming-soon {
    color: #ff6666;
    display: block;
}
</style>