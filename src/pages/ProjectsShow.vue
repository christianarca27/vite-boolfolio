<script>
import axios from 'axios'

export default {
    data() {
        return {
            slug: this.$route.params.slug,

            project: {},

            queryReady: false,

            querySuccess: false,

            error: '',
        }
    },

    methods: {
        getProject() {
            axios.get('http://127.0.0.1:8000/api/projects/' + this.slug).then(res => {
                this.querySuccess = res.data.success;

                if (this.querySuccess) {
                    this.project = res.data.result;
                    document.title += ' - ' + this.project.title;
                }
                else {
                    this.error = res.data.error;
                }

                this.queryReady = true;
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
        <div v-if="queryReady" class="container">
            <div class="project" v-if="querySuccess">
                <h1>{{ project.title }}</h1>

                <div class="mb-3">
                    <strong>Tipo: </strong>
                    <span>{{ project.type.name }}</span>
                </div>

                <div class="pills d-flex gap-1 mb-3">
                    <strong>Tecnologie: </strong>
                    <span v-for="technology in project.technologies" class="badge rounded-pill"
                        :style="{ backgroundColor: technology.color }">{{
                            technology.name }}</span>
                </div>

                <div class="project-preview mb-3">
                    <img v-if="project.preview" :src="preview" alt="Project preview">
                    <img v-else src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                        class="card-img-top" alt="Project preview">
                </div>

                <div class="project-description">
                    <strong>Descrizione: </strong>
                    <p>{{ project.description }}</p>
                </div>

                <a class="btn btn-warning" :href="project.url" target="_blank" rel="noopener noreferrer">GitHub</a>

                <hr class="mb-3">

                <router-link :to="{ name: 'projects.index' }">Torna alla lista completa</router-link>
            </div>

            <div v-else class="alert alert-danger" role="alert">
                {{ error }}
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