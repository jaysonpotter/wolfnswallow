<template>
    <v-footer
        height="40"
        app
    >
        <a
            v-for="item in items"
            :key="item.title"
            :href="item.href"
            :title="item.title"
            class="d-inline-block mx-2 social-link"
            rel="noopener noreferrer"
            target="_blank"
        >
            <v-icon
                :icon="item.icon"
                :size="item.icon === '$vuetify' ? 24 : 16"
            />
        </a>

        <div
            class="text-caption text-disabled"
            style="position: absolute; right: 16px;"
        >
            &copy; {{ (new Date()).getFullYear() }} <span>Wolf n Swallow</span>
        </div>
    </v-footer>
</template>

<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            items: [
                {
                    title: 'Wolf n Swallow on Instagram',
                    icon : `mdi-instagram`,
                    href : 'https://www.instagram.com/wolfnswallow/',
                },
                {
                    title: 'Wolf n Swallow on Facebook',
                    icon : 'mdi-facebook',
                    href : 'https://www.facebook.com/Wolfnswallow/',
                },
            ]
        };
    },
};
</script>

<style scoped lang="sass">
.social-link :deep(.v-icon)
    color: rgba(var(--v-theme-on-background), var(--v-disabled-opacity))
    text-decoration: none
    transition: .2s ease-in-out

    &:hover
        color: rgba(25, 118, 210, 1)
</style>
