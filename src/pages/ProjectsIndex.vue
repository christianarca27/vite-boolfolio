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

            currentPage: 1,

            totalPages: 1,

            totalRes: 0,

            nextPageUrl: '',

            prevPageUrl: '',
        }
    },

    methods: {
        getProjects() {
            let queryUrl = '';

            if (this.filteredCategoryId) {
                queryUrl = 'http://127.0.0.1:8000/api/projects?page=' + this.currentPage + '&type_id=' + this.filteredCategoryId;
            }
            else {
                queryUrl = 'http://127.0.0.1:8000/api/projects?page=' + this.currentPage;
            }

            axios.get(queryUrl).then(res => {
                console.log(res);
                this.querySuccess = res.data.success;

                if (this.querySuccess) {
                    this.projects = res.data.results.data;

                    this.currentPage = res.data.results.current_page;
                    this.totalPages = res.data.results.last_page;
                    this.totalRes = res.data.results.total;
                    this.types = res.data.types;
                }
                else {
                    this.error = res.data.error;
                }

                this.queryReady = true;
            });
        },

        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;

                this.getProjects();
            }
        },

        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;

                this.getProjects();
            }
        },

        setPage(page) {
            if (this.currentPage != page) {
                this.currentPage = page;

                this.getProjects();
            }
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
        <div v-if="queryReady" class="container">
            <div v-if="querySuccess" id="projects">
                <h1>Progetti</h1>

                <div class="input-group mb-3">
                    <select @change="getProjects()" class="form-select" v-model="filteredCategoryId">
                        <option value="" selected>Tutti</option>

                        <option v-for="singleType in types" :value="singleType.id">{{ singleType.name }}</option>
                    </select>
                </div>

                <pre>{{ totalRes }} risultati trovati</pre>

                <div class="row mb-3">
                    <div class="col-12 col-md-6 col-lg-4 g-4" v-for="project in projects">
                        <ProjectCard :project="project"></ProjectCard>
                    </div>
                </div>

                <ul class="pagination d-flex justify-content-center">
                    <li class="page-item" :class="currentPage > 1 ? '' : 'disabled'">
                        <button @click="prevPage()" class="page-link">
                            <i class="fa-solid fa-chevron-left"></i>
                        </button>
                    </li>

                    <li v-for="page in totalPages" class="page-item" :class="currentPage == page ? 'active' : ''">
                        <button @click="setPage(page)" class="page-link" :class="currentPage == page ? 'active' : ''">{{
                            page }}</button>
                    </li>

                    <li class="page-item" :class="currentPage < totalPages ? '' : 'disabled'">
                        <button @click="nextPage()" class="page-link">
                            <i class="fa-solid fa-chevron-right"></i>
                        </button>
                    </li>
                </ul>
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