<template>
  <book-detail
    v-if="content"
    :title="content.title"
    :author="content.author"
    :synopsis="content.synopsis"
    :upvoted="content.upvoted"
    :upvotes="content.upvotes"
    :cover="content.cover"
    :rating="content.rating"
    :slug="content.slug"
  >
    <template #bonus="{slug}">
      <book-comments :slug="slug" />
    </template>
  </book-detail>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {
    BookDetail: () => import('../components/BookDetail.vue'),
    BookComments: () => import('@/components/micro/BookComments.vue'),
  },
  computed: {
    ...mapState(['books']),
    content() {
      return this.books.find((book) => book.slug === this.$route.params.slug);
    },
  },
};
</script>
