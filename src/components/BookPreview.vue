<template>
  <div class="book-preview">
    <div class="book-preview-description">
      <h2 @click="$router.push({path: slug, params: {slug: slug}})">
        {{order}} {{title}} <span class="rating">({{rating}}/10)</span>
      </h2>
      <p class="caption">{{author}}</p>
      <p>{{synopsis.slice(0, 200)}}...</p>
      <book-upvotes
        :slug="slug"
        :upvotes="upvotes"
        :upvoted="upvoted"
      />
    </div>
    <img
      class="book-preview-image"
      @click="$router.push({path: slug, params: {slug: slug}})"
      :src="cover"
      :alt="title"
    >
  </div>
</template>

<script>
export default {
  components: { BookUpvotes: () => import('@/components/micro/BookUpvotes.vue') },
  props: ['title', 'author', 'synopsis', 'upvoted', 'upvotes', 'cover', 'rating', 'order', 'slug'],
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.book-preview {
  padding: $space-l;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  text-align: left;
  @include media-support(768) {
    flex-wrap: wrap-reverse;
    justify-content: center;
    text-align: center;
    padding: $space-m;
  }
  &-description {
    max-width: 80%;
    flex: 1 1 80%;
    margin-right: $space-l;
    h2 {cursor: pointer;}
    @include media-support(768) {
      flex: 1 1 100%;
      max-width: 100%;
      margin-right: 0;
    }
  }
  &-image {
    @extend %default-border-radius;
    @extend %default-box-shadow;
    cursor: pointer;
    max-width: 20%;
    flex: 1 1 20%;
    @include media-support(768) {
      flex: 1 1 100%;
      max-width: 50%;
      margin: auto;
      object-fit: cover;
      height: auto;
    }
  }
  &:nth-child(2n) {
    background-color: $body-bg;
  }
}
</style>
