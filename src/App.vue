<template>
    <json-ld />
    <v-app>
        <AppHeader />
        <router-view :key="$route.fullPath" />
        <AppFooter />
    </v-app>
</template>

<script>
import JsonLd from "@/components/json-ld.vue";

import AppFooter from "@/components/AppFooter.vue";
import AppHeader from "@/components/AppHeader.vue";

export default {
    components: {JsonLd,
        AppHeader,
        AppFooter}
};
</script>
