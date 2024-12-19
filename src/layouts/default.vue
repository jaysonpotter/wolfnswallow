<template>
    <v-main class="pb-0">
        <router-view />
    </v-main>
    <v-row class="footer-details ma-0">
        <v-col class="px-0 pb-12">
            <v-container>
                <contact-us />
            </v-container>
        </v-col>
    </v-row>
</template>

<script>

import ContactUs from "@/components/contact-us.vue";

export default {
    name      : 'DefaultLayout',
    components: {
        ContactUs
    }
};
</script>

<style scoped lang="scss">
.v-main {
    background-color: #1a1a1a;
}

.footer-details {
    background-color: #b5b5b5;
}
</style>