<template>
  <section class="comment-section">
    <h4>Comments</h4>
    <div
      v-if="!!comments.length"
      class="comment-section-comments"
    >
      <p
        v-for="(comment, i) in comments"
        :key="i"
      >
        {{comment}}
      </p>
    </div>
    <textarea
      v-model="comment"
      rows="10"
    ></textarea>
    <button @click="!!comment.length && handleClick()"> Add comment </button>
  </section>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data: () => ({
    comments: [],
    comment: '',
  }),
  methods: {
    handleClick() {
      this.comments.push(this.comment);
      this.comment = '';
    },
    ...mapMutations(['UPDATE_COMMENT_FOR_BOOK']),
  },
  watch: {
    comments() {
      this.UPDATE_COMMENT_FOR_BOOK({ bookSlug: this.slug, comments: this.comments });
    },
  },
  props: ['slug'],
};
</script>

<style lang="scss">
@import "@/assets/styles/_variables.scss";
.comment-section {
  padding-bottom: $space-m;
  &-comments {
    @extend %default-border-radius;
    border: $space-xxs solid $highlight;
    margin-bottom: $space-l;
    p {
      padding: $space-xs;
      margin: 0;
      border-bottom: $space-xxs solid $light-gray;
      &:nth-child(2n) {
        background-color: $body-bg;
      }
    }
  }
  textarea {
    width: 100%;
    resize: vertical;
    box-sizing: border-box;
    margin-bottom: $space-s;
  }
  button {
    float: right;
  }
}
</style>
