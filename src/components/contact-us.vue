<template>
    <v-card
        elevation="0"
        color="transparent"
        class="contact-us-card"
    >
        <v-card-title>Contact Us</v-card-title>
        <v-list-item
            prepend-icon="mdi-map-marker"
        >
            <a :href="mapUrl">414 Central Ave SE<br>
                Albuquerque, NM 87102</a>
        </v-list-item>
        <v-list-item
            prepend-icon="mdi-phone-classic"
        >
            <a href="tel:+1-517-667-8355">(517) 667-8355</a>
        </v-list-item>
    </v-card>
</template>

<script>
export default {
    name    : "ContactUs",
    computed: {
        mapUrl() {
            const encodedAddress = encodeURIComponent('414 Central Ave SE,Albuquerque, NM 87102');
            if (navigator.userAgent.match(/iPhone|iPad|Mac/i)) {
                return `http://maps.apple.com/?q=${encodedAddress}`;
            } else if (navigator.userAgent.match(/Android/i)) {
                return `geo:0,0?q=${encodedAddress}`;
            } else {
                return `https://www.google.com/maps?q=${encodedAddress}`;
            }
        }
    }
};
</script>



<style scoped lang="scss">
a {
    color: #003366;

    &:visited {
        color: #003366;
    }

    &:hover {
        color: #33cccc;
    }
}

.contact-us-card {
    .v-card-title,
    .v-list-item {
        color: #003366;
    }

    .v-card-title {
        font-size: 1.5rem;
    }

    .v-list-item {
        :deep(.v-list-item__prepend) {
            > .v-icon {
                opacity: 1 !important;
            }
        }
    }
}
</style>