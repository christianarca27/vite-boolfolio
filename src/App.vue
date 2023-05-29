<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
    }
  },

  components: {
    AppMain,
    AppHeader
  },
}
</script>

<template>
  <AppHeader></AppHeader>

  <AppMain></AppMain>
</template>

<style lang="scss" scoped></style>
