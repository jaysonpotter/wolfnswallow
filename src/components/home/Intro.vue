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
                Opening Soon!
            </h4>
        </div>
    </v-parallax>
    <v-container>
        <v-row>
            <v-col
                cols="12"
            />
            <v-col
                cols="12"
            >
                <v-card>
                    <template #title>
                        Welcome
                    </template>
                    <template #text>
                        <p>
                            Wolf 'n' Swallow offers a whimsical and exclusive culinary adventure for those seeking something
                            extraordinary. Our charcuterie and provisions are crafted in-house, blending classic comfort
                            with multicultural twists, while our wine selection features a thoughtfully curated mix of
                            natural and small-production wines. Chef Houla’s expertise shines through in his dry curing,
                            fermenting, pickling, and scratch baking, delivering flavors and techniques you won’t find
                            elsewhere. We proudly partner with local farms and businesses to bring you the freshest
                            ingredients.
                        </p>
                        <p>
                            Join us to savor fine wines, handcrafted cocktails, small plates, caviar service, and artisanal
                            charcuterie, all from a seasonally inspired menu that changes weekly.
                        </p>
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
                        Hungy? Check out what's on the slab.
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col
                cols="12"
                sm="4"
            >
                <v-card
                    clickable
                    to="/wine-menu"
                    class="wine-menu-button"
                >
                    <v-img
                        src="@/assets/photos/wine-menu-button.jpg"
                    />
                    <v-card-title>Wine Menu</v-card-title>
                    <v-card-subtitle>wines with distinction</v-card-subtitle>
                    <v-card-text>
                        We know you're thirsty.
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
                        First rule is we talk about Flight Club.
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

.food-menu-button {

}
</style>