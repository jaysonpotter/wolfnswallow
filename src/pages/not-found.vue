<template>
    <v-parallax
        src="@/assets/bg/404.jpg"
        scale="0.7"
    >
        <div class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1>
                Page Not Found
            </h1>
            <h4>
                Oopsie doopsie!
            </h4>
        </div>
    </v-parallax>
</template>

<script>
export default {
    name: 'NotFound',
};
</script>
