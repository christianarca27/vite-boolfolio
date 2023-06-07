<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container">
                <router-link class="navbar-brand" :to="{ name: 'home' }">Boolfolio</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link class="nav-link" :class="$route.name == 'home' ? 'active' : ''"
                                :to="{ name: 'home' }">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :class="$route.name == 'home' ? 'projects.index' : ''"
                                :to="{ name: 'projects.index' }">Progetti</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :class="$route.name == 'home' ? 'about' : ''"
                                :to="{ name: 'about' }">About me</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped></style>