<template>
  <main class="book">
    <button
      @click="$router.push('/')"
      class="back-button"
    >&#8592;</button>
    <header>
      <h1>{{title}}</h1>
      <book-upvotes
        :reversed="true"
        :slug="slug"
        :upvotes="upvotes"
        :upvoted="upvoted"
      />
      <span class="caption">{{author}}</span>
    </header>
    <img
      class="book-image"
      :src="cover"
      :alt="title"
    >
    <h3>Synopsis</h3>
    <p>{{synopsis}}</p>
    <footer>
      <h4>Rating: {{rating}}/10</h4>
    </footer>
    <slot
      name="bonus"
      :slug="$route.params.slug"
    />
  </main>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  components: { BookUpvotes: () => import('@/components/micro/BookUpvotes.vue') },
  methods: {
    ...mapMutations(['UPDATE_UPVOTE_STATE']),
  },
  props: ['title', 'author', 'synopsis', 'upvoted', 'upvotes', 'cover', 'rating', 'slug'],
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.book {
  padding-left: 0;
  padding: $space-l;
  margin-right: 0;
  @extend %default-box-shadow;
  @include media-support(768) {
    margin-right: $space-s;
    padding: 0 $space-m $space-l $space-xl;
  }
  .back-button {
    position: fixed;
    top: 0;
    left: 0;
    width: $space-l;
    line-height: 100vh;
    border-radius: 0;
    transition: all 0.5s ease-in-out;
    &:hover {
      text-indent: -$space-xl;
      color: $highlight;
    }
  }
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .caption {
      width: 100%;
    }
  }
  &-image {
    display: block;
    margin: $space-l auto;
    @extend %default-border-radius;
    @extend %default-box-shadow;
  }
}
</style>
