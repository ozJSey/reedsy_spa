<template>
  <section class="filter">
    <span>Find:</span>
    <input
      @input="FILTER_BY_KEYWORD($event.target.value); $emit('filtering');"
      v-model="Search"
    />
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    Search: '',
  }),
  methods: {
    ...mapMutations([
      'FILTER_BY_KEYWORD',
    ]),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.filter {
  position: fixed;
  top: 0;
  right: 0;
  padding: $space-m;
  width: 45%;
  background-color: $highlight;
  border-bottom-left-radius: $space-s;
  color: $white;
  @extend %default-box-shadow;
  input {
    background-color: transparent;
    border: none;
    outline: 0;
    width: 90%;
    color: $white;
    border-bottom: $space-xxs solid $white;
  }
}
</style>
