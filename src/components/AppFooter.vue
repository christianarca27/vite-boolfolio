<script>
export default {
    name: 'AppFooter',

    data() {
        return {

        }
    },
}
</script>

<template>
    <footer class="bg-body-tertiary border-top">
        <div class="container h-100 d-flex flex-wrap justify-content-between align-items-center">
            <div class="col-md-4 d-flex align-items-center">
                <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                    logo
                </a>
                <span class="mb-3 mb-md-0 text-muted">© 2023 Christian Arca</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3">
                    <a class="text-muted" href="#">
                        <i class="fa-brands fa-twitter"></i>
                    </a>
                </li>
                <li class="ms-3">
                    <a class="text-muted" href="#">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </li>
                <li class="ms-3">
                    <a class="text-muted" href="#">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </li>
            </ul>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
footer {
    height: 60px;
}

i {
    font-size: 1.5rem;
}
</style>