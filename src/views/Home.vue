<template>
  <main
    v-if="!!filteredBooks.length"
    class="home"
  >
    <book-filter @filtering="$refs.shelf.reset()" />
    <h1>Top books of all time</h1>
    <book-shelf
      ref="shelf"
      :count="filteredBooks.length"
    >
      <book-preview
        :slot="`shelf-${Math.ceil(i / 5)}`"
        v-for="(book, i) in filteredBooks"
        :key="book.slug"
        :title="book.title"
        :author="book.author"
        :synopsis="book.synopsis"
        :upvoted="book.upvoted"
        :upvotes="book.upvotes"
        :cover="book.cover"
        :rating="book.rating"
        :slug="book.slug"
        :order="++i"
      />
    </book-shelf>
  </main>
  <main v-else>
    <book-loader />
  </main>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['filteredBooks']),
  },
  components: {
    BookFilter: () => import('@/components/BookFilter.vue'),
    BookShelf: () => import('@/components/BookShelf.vue'),
    BookPreview: () => import('@/components/BookPreview.vue'),
    BookLoader: () => import('@/components/BookLoader.vue'),
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.home {
  @extend %default-box-shadow;
  margin: $space-xxl auto $space-l;
  @include media-support(768) {
    margin: $space-xxl $space-s $space-l $space-s;
  }
  h1 {
    margin: 0;
    padding: $space-l;
  }
}
</style>
