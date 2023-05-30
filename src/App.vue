<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';

export default {
    name: "App",

    data() {
        return {

        };
    },

    components: {
        AppHeader,
        AppFooter,
    }
}
</script>

<template>
    <AppHeader></AppHeader>

    <router-view></router-view>

    <AppFooter></AppFooter>
</template>

<style lang="scss" scoped></style>