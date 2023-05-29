<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: 'AppMain',

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

    created() {
        this.getProjects();
    },

    components: {
        ProjectCard,
    }
}
</script>

<template>
    <main>
        <div class="container py-5">
            <h1>Lista progetti</h1>

            <div class="row">
                <div class="col-4 g-4" v-for="project in projects">
                    <ProjectCard :project="project"></ProjectCard>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>