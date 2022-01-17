<template>
  <main v-if="!!books.length" class="home">
    <template v-if="!!filteredBooks.length">
      <book-filter ref="bookFilter" @filtering="$refs.shelf.reset()" />
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
    </template>
    <template v-else>
      <div class="not-found">
        <h2>No books, found.</h2>
        <button @click="RESET_FILTERED_BOOKS">Ok!</button>
      </div>
    </template>
  </main>
  <main v-else>
    <book-loader />
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed: {
    ...mapState(['filteredBooks', 'books']),
  },
  methods: {
    ...mapMutations(['RESET_FILTERED_BOOKS']),
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
  .not-found {
    padding: $space-l;
    text-align: center;
  }
}
</style>
