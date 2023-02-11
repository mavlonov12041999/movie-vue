<script setup>
    import {defineProps} from 'vue';

    const { movie } = defineProps(['movie'])
</script>

<template>
    <div class="movie">
        <img :src="movie.imgUrl" alt="Preview">
        <span>{{movie.title}}</span>
        <span>{{movie.desc}}</span>
    </div>
</template>

<style scoped
       lang="scss">

</style>