<template>
  <section class="book-shelves">
    <ul class="book-shelves-pagination">
      <li
        v-for="i in Math.ceil(count/ perPage)"
        :key="`list-${i}`"
      >
        <button
          :class="{'upvoted': active !== i}"
          @click="active = i"
        >{{i}} </button>
      </li>
    </ul>
    <div
      v-for="i in Math.ceil(count / perPage)"
      :key="`view-${i}`"
    >
      <section
        class="shelf"
        v-show="active === i"
      >
        <slot :name="`shelf-${i}`" />
      </section>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    active: 1,
  }),
  props: {
    perPage: {
      type: Number,
      default: 5,
    },
    activeIndex: {
      type: Number,
      default: 1,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  methods: {
    reset() {
      this.active = 1;
    },
  },
  created() {
    this.active = this.activeIndex;
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_variables.scss";
.book-shelves {
  &-pagination {
    position: fixed;
    padding: 0;
    margin: 0;
    left: 0;
    top: 0;
    list-style: none;
    button {
      border-radius: 0;
    }
  }
}
</style>
