<template>
    <div>
        <json-ld />
        <router-view :key="$route.fullPath" />
    </div>
</template>

<script>
import JsonLd from "@/components/json-ld.vue";

export default {
    components: {JsonLd}
};
</script>
