<script>
import AppForm from '../components/AppForm.vue';

export default {
    name: "AppHome",

    data() {
        return {

        };
    },

    components: {
        AppForm
    },
}
</script>

<template>
    <main>
        <div class="container">
            <h1>Homepage</h1>

            <AppForm></AppForm>
        </div>
    </main>
</template>

<style lang="scss" scoped></style>