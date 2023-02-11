<script setup>
    import {ref} from 'vue';

    const menuList = ref([
        {
            title: 'Home',
        },
        {
            title: 'Top',
        },
        {
            title: 'Favorites',
        }
    ]);
</script>

<template>
    <div class="menu-list">
        <span
            class="menu-list__item"
            v-for="item of menuList"
            :key="item.title"
        >
            {{item.title}}
        </span>
    </div>
</template>

<style scoped
       lang="scss">
    @import "../styles/variables";
    .menu-list {
        display: flex;
        align-items: center;
        gap: 25px;

        &__item {
            color: $primary;
            font-size: 20px;
            cursor: pointer;
        }
    }
</style>