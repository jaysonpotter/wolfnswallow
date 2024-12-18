<template>
    <div class="menu-category">
        <h1 class="menu-category-name">
            {{ menuCategoryData.category }}
        </h1>
        <h2 class="menu-category-description">
            {{ menuCategoryData.description }}
        </h2>
        <em
            v-if="menuCategoryData.exceptions"
            class="menu-category-exception"
        >{{ menuCategoryData.exceptions }}</em>
        <ul class="menu-items">
            <li
                v-for="(item, itemIndex) in menuCategoryData.items"
                :key="itemIndex"
                class="menu-item"
            >
                <h3 class="menu-item-name">
                    {{ item.name }}
                </h3>
                <p class="menu-item-description">
                    {{ item.description }}
                </p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name : "MenuCategory",
    props: {
        menuCategoryData: {
            type    : Object,
            required: true,
        }
    }
};
</script>

<style scoped lang="scss">
.menu-category {
    .menu-category-name {
        font-family: "Special Elite", serif;
        font-weight: 400;
        font-style: normal;
        text-transform: uppercase;

        line-height: 2rem;
        color: #ff6666;
    }
    .menu-category-description,
    .menu-category-exception {
        font-family: "Assistant", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;

        font-size: 1rem;
        white-space: pre-wrap;
    }
    .menu-items {
        list-style: none;

        .menu-item {
            margin: 1.5rem 0;

            .menu-item-name {
                font-family: "Open Sans", sans-serif;
                font-optical-sizing: auto;
                font-weight: 700;

                text-transform: uppercase;
            }
            .menu-item-description {
                font-family: "Assistant", sans-serif;
                font-optical-sizing: auto;
                font-weight: 400;

                text-transform: uppercase;
            }
        }
    }
}
.special-elite-regular {
    font-family: "Special Elite", serif;
    font-weight: 400;
    font-style: normal;
}

// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 200 to 800

.assistant {
    font-family: "Assistant", sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
}

.cantora-one-regular {
    font-family: "Cantora One", sans-serif;
    font-weight: 400;
    font-style: normal;
}
</style>