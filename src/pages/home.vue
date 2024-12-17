<template>
    <v-img
        class="mb-4"
        height="150"
        src="@/assets//logo/logo.svg"
    />
    <Intro />
</template>

<script>
import Intro from "@/components/home/Intro.vue";

export default {
    name      : 'Home',
    components: {
        Intro
    }
};

</script>
