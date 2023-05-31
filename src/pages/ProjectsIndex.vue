<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsIndex',

    data() {
        return {
            projects: [],
        }
    },

    methods: {
        getProjects() {
            axios.get('http://127.0.0.1:8000/api/projects').then((res) => {
                this.projects = res.data.results;
            });
        }
    },

    mounted() {
        this.getProjects();
    },

    components: {
        ProjectCard,
    }
}
</script>

<template>
    <main>
        <div v-if="projects.length > 0" class="container py-5">
            <h1>Lista progetti</h1>

            <div class="row">
                <div class="col-12 col-md-6 col-lg-4 col-xl-3 g-4" v-for="project in projects">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
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
    .loading {
        height: calc(100vh - 56px - 112px);
    }
}
</style>