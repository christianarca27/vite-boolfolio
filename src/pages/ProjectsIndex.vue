<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';

export default {
    name: 'ProjectsIndex',

    data() {
        return {
            projects: [],

            types: [],

            queryReady: false,

            querySuccess: false,

            error: '',

            filteredCategoryId: '',
        }
    },

    methods: {
        getProjects() {
            let queryUrl = '';

            if (this.filteredCategoryId) {
                queryUrl = 'http://127.0.0.1:8000/api/projects?type_id=' + this.filteredCategoryId;
            }
            else {
                queryUrl = 'http://127.0.0.1:8000/api/projects';
            }

            axios.get(queryUrl).then(res => {
                this.querySuccess = res.data.success;

                if (this.querySuccess) {
                    this.projects = res.data.results;
                    this.types = res.data.types;
                }
                else {
                    this.error = res.data.error;
                }

                this.queryReady = true;
            });
        },
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
        <div v-if="queryReady" class="container py-5">
            <div v-if="querySuccess" id="projects">
                <h1>Lista progetti</h1>

                <div class="input-group">
                    <select @change="getProjects()" class="form-select" v-model="filteredCategoryId">
                        <option value="" selected>Tutti</option>

                        <option v-for="singleType in types" :value="singleType.id">{{ singleType.name }}</option>
                    </select>
                </div>

                <div class="row">
                    <div class="col-12 col-md-6 col-lg-4 col-xl-3 g-4" v-for="project in projects">
                        <ProjectCard :project="project"></ProjectCard>
                    </div>
                </div>
            </div>

            <div v-else class="alert alert-info" role="alert">
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
    .loading {
        height: calc(100vh - 56px - 112px);
    }
}
</style>