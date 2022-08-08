<template>
  <div class="text-zinc-50 p-0 bg-black">
    <!-- header video -->
    <div class="w-full relative z-10">
      <!-- video and picture -->
      <transition-group name="fade">
        <div
          class="bg-[url('./assets/img/landscape/img1.jpg')] md:bg-left bg-cover w-full object-cover aspect-[20/10] md:aspect-[20/9] md:bg-fixed"
          v-show="!playing"
        ></div>
        <video
          src="../assets/videos/vid5.mp4"
          ref="video"
          class="bg-cover w-full object-cover aspect-[20/10] md:aspect-[20/9] bg-fixed"
          muted="true"
          v-show="playing"
        ></video>
      </transition-group>

      <!-- writeup -->
      <div
        class="h-full w-full absolute pl-4 top-0 bg-gradient-to-b from-black/25 to-black/25 md:from-black/0 md:to-black grid grid-cols-4 items-center"
      >
        <div class="flex flex-col col-span-3 md:col-span-1">
          <h1 class="text-4xl md:5xl">Stranded</h1>

          <div class="hidden md:flex mb-2 mt-4">
            <button
              class="text-xs bg-black/50 pr-4 pl-2 py-1 rounded-sm flex capitalize"
            >
              <play-icon class="h-4 mr-1"></play-icon>
              <div>play</div>
            </button>
            <button
              class="text-xs bg-black/50 pr-4 pl-2 py-1 ml-2 rounded-sm flex capitalize"
            >
              <PlusSmIcon class="h-4 mr-1"></PlusSmIcon>
              <div>my list</div>
            </button>
          </div>
          <article
            class="text-xs mt-3 font-semibold text-zinc-50/90 md:text-50/70"
          >
            This is only a netflix look-alike and is not in any way related to
            the company Netflix. also do well to check out my
            <a
              href="https://spotofy.netlify.app"
              target="_blank"
              class="underline"
              >spotify</a
            >
            look alike
          </article>
          <div class="flex md:hidden mt-2">
            <button
              class="text-xs bg-black/50 pr-4 pl-2 py-1 rounded-sm flex capitalize"
            >
              <play-icon class="h-4 mr-1"></play-icon>
              <div>play</div>
            </button>
            <button
              class="text-xs bg-black/50 pr-4 pl-2 py-1 ml-2 rounded-sm flex capitalize"
            >
              <PlusSmIcon class="h-4 mr-1"></PlusSmIcon>
              <div>my list</div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!--movies section -->
    <div class="p-4 pt-0 md:-mt-28 pb-0 z-50 relative">
      <div v-for="title in titles">
        <!-- header -->
        <header class="flex justify-between items-baseline mt-6 mb-4">
          <h1 class="font-semibold text-2xl">{{ title }}</h1>
        </header>

        <!-- cards -->
        <swiper :slides-per-view="spv" :space-between="10">
          <swiper-slide
            class="bg-zinc-700/25 shadow-sm relative"
            v-for="movie in movies"
          >
            <img
              :src="movie.img"
              class="col-span-2 bg-cover object-cover aspect-[3/4]"
              alt=""
            />
            <h1
              class="text-zinc-100 text-center w-full font-bold cursor-pointer absolute top-3/4"
              style="text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.7)"
            >
              {{ movie.title }}
            </h1>
          </swiper-slide>
        </swiper>
      </div>
      <footer class="text-center text-xs md:mt-10 py-2 text-zinc-600">
        &copy;{{ year }} Notflix inc.
      </footer>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch, watchEffect } from "vue";
import { useStore } from "vuex";
import { PlayIcon, PlusSmIcon } from "@heroicons/vue/outline";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

//get pictures and videos
const store = useStore();
const start = () => store.commit("startup");
start();
let movies = computed(() => store.state.movies);
const titles = ["Only on Notflix", "Watch Again", "Thrillers & Horror"];

//autoplay video
const video = ref(null);
const playing = ref(false);
const autoplay = () => {
  playing.value = true;
  video.value.play();
  video.value.addEventListener("ended", () => {
    playing.value = false;
  });
};

watchEffect(() => {
  //autoplay
  if (video.value) {
    setTimeout(autoplay, 10000);
  }
});

//swiper
const spv = ref();
const screenwidth = screen.width;
const calcspv = () => {
  if (screenwidth < 640) {
    spv.value = 3;
  } else if (screenwidth > 1024) {
    spv.value = 8;
  } else if (screenwidth > 768) {
    spv.value = 7;
  } else if (screenwidth > 640) {
    spv.value = 5;
  }
};
calcspv();
watch(
  () => screen.width,
  () => {
    calcspv();
  }
);

const date = new Date();
const year = date.getFullYear();
</script>

<style>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: all 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
