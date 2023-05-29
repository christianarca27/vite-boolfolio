<script>
import axios from 'axios';
import AppCard from './AppCard.vue';

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
        AppCard,
    }
}
</script>

<template>
    <main>
        <div class="container py-5">
            <h1>Lista progetti</h1>

            <div class="row">
                <div class="col-4 g-4" v-for="project in projects">
                    <AppCard :project="project"></AppCard>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>