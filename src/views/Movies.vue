<script setup>
    import {ref} from 'vue'
    import Movie from '../components/movies/Movie.vue';
    const movies = ref([
        {
            id: 1,
            title: "Batman",
            desc: "Desc batman",
            imgUrl: 'https://alfa.tj/poster/1636821015965.jpg'
        },
        {
            id: 2,
            title: "Spider man",
            desc: "Desc Spider man",
            imgUrl: 'https://alfa.tj/poster/1636821015965.jpg'
        }
    ])

</script>

<template>
    <div class="movie-container">
        <h2 class="movie-container__title">All movies</h2>

        <div class="movie-list">
            <Movie v-for="movie of movies"
                   :key="movie.id"
                   :movie="movie"
            />
        </div>
    </div>
</template>

<style scoped
       lang="scss">
    .movie-container {
        padding: 50px;

        &__title {
            margin-bottom: 20px;
        }
    }

    .movie-list {
        display: flex;
        gap: 50px;
    }
</style>