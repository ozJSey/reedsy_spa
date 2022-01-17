<template>
  <router-view />
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions([
      'fillStore',
    ]),
  },
  created() {
    this.fillStore();
  },
};
</script>
<style lang="scss">
@import "assets/styles/global.scss";
</style>
