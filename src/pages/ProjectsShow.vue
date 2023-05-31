<script>
import axios from 'axios'

export default {
    data() {
        return {
            slug: '',

            project: [],

            queryLoading: false,

            querySuccess: false,
        }
    },

    methods: {
        getProject() {
            this.slug = this.$route.params.slug;

            axios.get('http://127.0.0.1:8000/api/projects/' + this.slug).then(res => {
                this.querySuccess = res.data.success;

                if (this.querySuccess) {
                    this.project = res.data.result;
                }

                this.queryLoading = true;
            });
        }
    },

    mounted() {
        this.getProject();
    },

    computed: {
        preview() {
            return 'http://127.0.0.1:8000/storage/' + this.project.preview;
        },
    },
}
</script>

<template>
    <main>
        <div v-if="this.queryLoading" class="container py-5">
            <div class="project" v-if="this.querySuccess">
                <h1>{{ this.project.title }}</h1>

                <img v-if="project.preview" :src="preview" alt="Project preview">
                <img v-else src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                    class="card-img-top" alt="Project preview">

                <p>{{ project.description }}</p>

                <a :href="project.url" target="_blank" rel="noopener noreferrer">Github</a>
            </div>

            <div v-else class="alert alert-danger" role="alert">
                Progetto non esistente!
            </div>
        </div>

        <div v-else class="loading d-flex justify-content-center align-items-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    .project {
        img {
            height: 300px;
            object-fit: contain;
        }
    }

    .loading {
        height: calc(100vh - 56px - 112px);
    }
}
</style>