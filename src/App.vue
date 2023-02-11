<script setup>
    import Header from './components/Header.vue';
</script>

<template>
    <div class="container">
        <div class="container__header">
            <Header/>
        </div>
        <div class="container__main">
            <router-view></router-view>
        </div>
    </div>
</template>

<style scoped
       lang="scss">
    @import "./styles/variables";

    .container {
        &__header {
            max-width: 1200px;
            width: 100%;
            height: 50px;
            position: sticky;
            top: 0;
            left: 0;
            background-color: $header-bg;
            margin: 0 auto;
        }

        &__main {
            max-width: 1200px;
            width: 100%;
            height: 100%;
            min-height: calc(100vh - 50px);
            background-color: $white;
            margin: 0 auto;
        }
    }
</style>
