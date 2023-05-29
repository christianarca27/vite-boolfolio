<script>
export default {
    name: 'AppCard',

    data() {
        return {

        }
    },

    props: {
        project: Object,
    },
}
</script>

<template>
    <div class="card">
        <img v-if="project.preview" :src="'http://127.0.0.1:8000/storage/' + project.preview" class="card-img-top"
            alt="Project preview">
        <img v-else="project.preview" src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
            class="card-img-top" alt="Project preview">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <p class="card-text">{{ project.description }}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
        </div>
    </div>
</template>

<style lang="scss">
.card {
    max-height: 300px;
    height: 100%;
    overflow-y: hidden;

    img {
        height: 200px;
        object-fit: cover;
        object-position: center;
    }
}
</style>