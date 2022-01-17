<template>
  <section :class="['book-upvotes', {reversed}]">
    <button
      :aria-pressed="upvoted"
      aria-expanded
      type="button"
      :class="['book-upvotes-button', {upvoted}]"
      @click="UPDATE_UPVOTE_STATE(slug)"
    >
      {{upvoted ? 'Upvoted' : 'Upvote'}}
    </button>
    <span class="book-upvotes-description">Upvoted {{upvotes}} times</span>
  </section>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  props: ['upvotes', 'upvoted', 'slug', 'reversed'],
  methods: mapMutations(['UPDATE_UPVOTE_STATE']),
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.book-upvotes {
  display: flex;
  align-items: center;
  &-button {
    + span {
      margin-left: $space-m;
      margin-right: $space-m;
      @include media-support(768) {
        margin-left: $space-m;
        margin-right: 0;
      }
    }
  }
  &.reversed {
    flex-direction: row-reverse;
    .book-upvotes-button {
      + .book-upvotes-description {
        @include media-support(768) {
          margin-left: 0;
          margin-right: $space-m;
        }
      }
    }
  }
}
</style>
