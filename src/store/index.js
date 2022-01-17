import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    filteredBooks: [],
  },
  mutations: {
    UPDATE_UPVOTE_STATE: (state, bookSlug) => {
      const index = state.books.findIndex((book) => book.slug === bookSlug);
      state.books[index].upvoted = !state.books[index].upvoted;
      if (state.books[index].upvoted) state.books[index].upvotes += 1;
      else state.books[index].upvotes -= 1;
    },
    UPDATE_COMMENT_FOR_BOOK: (state, { bookSlug, comments }) => {
      const index = state.books.findIndex((book) => book.slug === bookSlug);
      state.books[index].comments = comments;
    },
    FILTER_BY_KEYWORD(state, input) {
      state.filteredBooks = state.books.filter(
        (book) => book.title.toLowerCase().includes(input.toLowerCase())
          || book.synopsis.toLowerCase().includes(input.toLowerCase()),
      );
    },
  },
  actions: {
    async fillStore({ state }) {
      try {
        const { books } = await fetch('http://localhost:3000/books').then((response) => response.json());
        state.books = books;
        state.filteredBooks = books;
      } catch {
        state.books = [];
        state.filteredBooks = [];
      }
    },
  },
});
