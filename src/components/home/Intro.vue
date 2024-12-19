<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
                sm="6"
            >
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
            </v-col>
            <v-col
                cols="12"
                sm="6"
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
            <v-col>
                <v-card
                    class="ma-4"
                    color="secondary"
                    dark
                    height="150"
                    width="300"
                    clickable
                    to="/food-menu"
                >
                    <v-card-title>Click Me</v-card-title>
                    <v-card-text>
                        This is a clickable card acting as a large block button.
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
</style>