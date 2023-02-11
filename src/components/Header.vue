<script setup>
    import Search from './Search.vue';
    import Menu from './Menu.vue';
</script>

<template>
    <header class="header">
        <img
                class="header__logo"
                src="../assets/logo.jpg"
                alt="Logo"
        >

        <div class="header__menu">
            <Menu />
        </div>

        <div class="header__search">
            <Search/>
        </div>
    </header>
</template>

<style scoped
       lang="scss">
    .header {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;

        &__logo {
            max-height: 40px;
        }

        &__menu {

        }
    }
</style>