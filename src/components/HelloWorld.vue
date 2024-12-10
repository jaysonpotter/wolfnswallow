<template>
    <v-container class="fill-height">
        <v-responsive
            class="align-centerfill-height mx-auto"
            max-width="900"
        >
            <v-img
                class="mb-4"
                height="150"
                src="@/assets//logo/logo.png"
            />

            <div class="text-center">
                <div class="text-body-2 font-weight-light mb-n1">
                    Welcome to
                </div>

                <h1 class="text-h2 font-weight-bold">
                    Vuetify
                </h1>
            </div>

            <div class="py-4" />

            <v-row>
                <v-col
                    cols="12"
                    sm="6"
                >
                    <v-card>
                        <template #text>
                            <p>
                                "Wolf 'n' Swallow offers a whimsical and exclusive culinary adventure for those seeking something
                                extraordinary. Our charcuterie and provisions are crafted in-house, blending classic comfort with
                                multicultural twists, while our wine selection features a thoughtfully curated mix of natural and
                                small-production wines. Chef Houla’s expertise shines through in his dry curing, fermenting, pickling,
                                and scratch baking, delivering flavors and techniques you won’t find elsewhere. We proudly partner with
                                local farms and businesses to bring you the freshest ingredients.
                            </p>
                            <p>
                                Join us to savor fine wines, handcrafted cocktails, small plates, caviar service, and artisanal
                                charcuterie, all from a seasonally inspired menu that changes weekly."
                            </p>
                        </template>
                    </v-card>
                    <v-card
                        class="py-4"
                        color="surface-variant"
                        image="https://cdn.vuetifyjs.com/docs/images/one/create/feature.png"
                        prepend-icon="mdi-rocket-launch-outline"
                        rounded="lg"
                        variant="outlined"
                    >
                        <template #image>
                            <v-img position="top right" />
                        </template>

                        <template #title>
                            <h2 class="text-h5 font-weight-bold">
                                Get started
                            </h2>
                        </template>

                        <template #subtitle>
                            <div class="text-subtitle-1">
                                Replace this page by removing
                                <v-kbd>
                                    {{ `<HelloWorld/>` }}
                                </v-kbd>
                                in
                                <v-kbd>pages/index.vue</v-kbd>
                                .
                            </div>
                        </template>

                        <v-overlay
                            opacity=".12"
                            scrim="primary"
                            contained
                            model-value
                            persistent
                        />
                    </v-card>
                </v-col>

                <v-col cols="6">
                    <v-card
                        append-icon="mdi-open-in-new"
                        class="py-4"
                        color="surface-variant"
                        href="https://vuetifyjs.com/"
                        prepend-icon="mdi-text-box-outline"
                        rel="noopener noreferrer"
                        rounded="lg"
                        subtitle="Learn about all things Vuetify in our documentation."
                        target="_blank"
                        title="Documentation"
                        variant="text"
                    >
                        <v-overlay
                            opacity=".06"
                            scrim="primary"
                            contained
                            model-value
                            persistent
                        />
                    </v-card>
                </v-col>

                <v-col cols="6">
                    <v-card
                        append-icon="mdi-open-in-new"
                        class="py-4"
                        color="surface-variant"
                        href="https://vuetifyjs.com/introduction/why-vuetify/#feature-guides"
                        prepend-icon="mdi-star-circle-outline"
                        rel="noopener noreferrer"
                        rounded="lg"
                        subtitle="Explore available framework Features."
                        target="_blank"
                        title="Features"
                        variant="text"
                    >
                        <v-overlay
                            opacity=".06"
                            scrim="primary"
                            contained
                            model-value
                            persistent
                        />
                    </v-card>
                </v-col>

                <v-col cols="6">
                    <v-card
                        append-icon="mdi-open-in-new"
                        class="py-4"
                        color="surface-variant"
                        href="https://vuetifyjs.com/components/all"
                        prepend-icon="mdi-widgets-outline"
                        rel="noopener noreferrer"
                        rounded="lg"
                        subtitle="Discover components in the API Explorer."
                        target="_blank"
                        title="Components"
                        variant="text"
                    >
                        <v-overlay
                            opacity=".06"
                            scrim="primary"
                            contained
                            model-value
                            persistent
                        />
                    </v-card>
                </v-col>

                <v-col cols="6">
                    <v-card
                        append-icon="mdi-open-in-new"
                        class="py-4"
                        color="surface-variant"
                        href="https://discord.vuetifyjs.com"
                        prepend-icon="mdi-account-group-outline"
                        rel="noopener noreferrer"
                        rounded="lg"
                        subtitle="Connect with Vuetify developers."
                        target="_blank"
                        title="Community"
                        variant="text"
                    >
                        <v-overlay
                            opacity=".06"
                            scrim="primary"
                            contained
                            model-value
                            persistent
                        />
                    </v-card>
                </v-col>
            </v-row>
        </v-responsive>
    </v-container>
</template>

<script setup>
//
</script>
