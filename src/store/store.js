import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      movies: [
        { to: "/", title: "Stranded" },
        {
          to: "/",
          title: "Space Cadet",
        },
        { to: "/", title: "Reboot" },
        { to: "/", title: "Delima" },
        {
          to: "/",
          title: "The Butch",
        },
        { to: "/", title: "Broken" },
        { to: "/", title: "Overwatch" },
        { to: "/", title: "Box Boy" },
      ],
      activemovies: null,
    };
  },
  getters: {},
  mutations: {
    startup(state) {
      // movies mutations
      for (let i = 0; i < state.movies.length; i++) {
        // images
        state.movies[i].img = new URL(
          `../assets/img/portrait/img${i + 1}.jpg`,
          import.meta.url
        );

        // movies
        state.movies[i].src = new URL(
          `../assets/video/${i+1}.mp4`,
          import.meta.url
        );
      }
    },
    next(state) {
      if (state.songindex < state.currentsongs.length - 1) {
        state.songindex++;
        state.activesong = state.currentsongs[state.songindex];
      }
    },
    prev(state) {
      if (state.songindex > 0) {
        state.songindex--;
        state.activesong = state.currentsongs[state.songindex];
      }
    },
    fetchsongs(state, id) {
      state.currentsongs = state.songs.filter((song) => song.artist === id);
    },
  },
});

export default store;
