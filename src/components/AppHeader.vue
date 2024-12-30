<template>
    <v-app-bar
        class="wns-app-bar"
        theme="dark"
    >
        <v-app-bar-title
            class="app-bar-logo"
        >
            <router-link
                to="/"
            >
                <v-img
                    class="ma-4"
                    src="@/assets/logo/logo-light.svg"
                    alt="Wolf n Swallow logo"
                    max-height="4rem"
                    min-height="4rem"
                />
            </router-link>
        </v-app-bar-title>
        <v-spacer />
        <template #append>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            />
        </template>
    </v-app-bar>

    <v-navigation-drawer
        v-model="drawer"
        location="right"
        app
        class="wns-nav-drawer"
    >
        <v-list>
            <v-list-item
                v-for="item in navItems"
                :key="item.title"
                :to="item.to"
                :prepend-icon="item.icon"
                router
                exact
            >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            drawer  : false,
            navItems: [
                { title: 'Homepage', icon: 'mdi-home', to: '/' },
                { title: 'Food Menu', icon: 'mdi-food-apple', to: '/food-menu' },
                { title: 'Drink Menu', icon: 'mdi-glass-wine', to: '/drink-menu' },
                { title: 'Flight Club', icon: 'mdi-cards-club', to: '/flight-club' },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
.wns-app-bar.v-app-bar.v-toolbar {
    background-color: #1a1a1a;
}
.wns-nav-drawer {
    background-color: #fedada;
    border: none;
}
.wns-nav-contact-us {
    background-color: #eb8288;
}
.app-bar-logo {
    min-width: 15.625rem;
}
</style>
