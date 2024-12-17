<template>
    <v-container>
        <v-row>
            <v-col
                cols="12"
            >
                <v-card>
                    <template #text>
                        <p>
                            Wolf 'n' Swallow offers a whimsical and exclusive culinary adventure for those seeking something
                            extraordinary. Our charcuterie and provisions are crafted in-house, blending classic comfort
                            with multicultural twists, while our wine selection features a thoughtfully curated mix of
                            natural and small-production wines. Chef Houla’s expertise shines through in his dry curing,
                            fermenting, pickling, and scratch baking, delivering flavors and techniques you won’t find
                            elsewhere. We proudly partner with local farms and businesses to bring you the freshest
                            ingredients.
                        </p>
                        <p>
                            Join us to savor fine wines, handcrafted cocktails, small plates, caviar service, and artisanal
                            charcuterie, all from a seasonally inspired menu that changes weekly.
                        </p>
                    </template>
                    <v-btn class="button-53">
                        Testing
                    </v-btn>
                    <!-- HTML !-->
                    <button
                        class="mt-8 button-53"
                        role="button"
                    >
                        Button 53
                    </button>

                    <v-btn class="button-4">
                        Testing
                    </v-btn>
                    <button
                        class="mt-8 button-4"
                        role="button"
                    >
                        Button 53
                    </button>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: "Intro"
};
</script>


<style scoped lang="scss">
p {
    margin-bottom: 1rem;
}

/* CSS */
.button-53 {
    background-color: #3DD1E7;
    border: 0 solid #E5E7EB;
    box-sizing: border-box;
    color: #000000;
    display: flex;
    font-family: ui-sans-serif,system-ui,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
    font-size: 1rem;
    font-weight: 700;
    justify-content: center;
    line-height: 1.75rem;
    padding: .75rem 1.65rem;
    position: relative;
    text-align: center;
    text-decoration: none #000000 solid;
    text-decoration-thickness: auto;
    width: 100%;
    max-width: 460px;
    cursor: pointer;
    transform: rotate(-2deg);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}

.button-53:focus {
    outline: 0;
}

.button-53:after {
    content: '';
    position: absolute;
    border: 1px solid #000000;
    bottom: 4px;
    left: 4px;
    width: calc(100% - 1px);
    height: calc(100% - 1px);
}

.button-53:hover:after {
    bottom: 2px;
    left: 2px;
}


.button-4 {
    background-image: repeating-linear-gradient(45deg, #b3b2ff 12px 36px, #c08aff 36px 60px, #ffd6fa 60px 84px, #ff97c5 84px 108px, #ffecec 108px 132px);
    color: #010138;
    background-size: 300% 150%;
}

.button-4:hover {
    background-position: 20% center;
}

.button-4:active:after {
    width: 0;
}
.button-4:after {
    content: "";
    position: absolute;
    width: calc(100% - 14px);
    height: calc(100% - 14px);
    transform-origin: center;
    background: #fffef7;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    z-index: -1;
    border-radius: 7px;
}


@media (min-width: 768px) {
    .button-53 {
        padding: .75rem 3rem;
        font-size: 1.25rem;
    }
}
</style>