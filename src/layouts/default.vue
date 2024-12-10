<template>
    <v-app>
        <v-main>
            <router-view />
        </v-main>

        <AppFooter />
    </v-app>
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";

export default {
    name      : 'DefaultLayout',
    components: {
        AppFooter
    }
};
</script>
