<template>
  <!-- video and picture -->
    <div
      class="bg-[url('./assets/img/landscape/img1.jpg')] md:bg-left bg-cover w-full object-cover aspect-[20/10] md:aspect-[20/9] md:bg-fixed"
      v-show="!playing"
    ></div>
    <video
      src="../../assets/videos/vid5.mp4"
      ref="video"
      class="bg-cover w-full object-cover aspect-[20/10] md:aspect-[20/9] bg-fixed"
      muted="true"
      v-show="playing"
    ></video>

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
      <article class="text-xs mt-3 font-semibold text-zinc-50/90 md:text-50/70">
        This is only a netflix look-alike and is not in any way related to the
        company Netflix. also do well to check out my
        <a href="https://spotofy.netlify.app" target="_blank" class="underline"
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
</template>
<script setup>
import { ref, watchEffect } from "vue";
import{PlusSmIcon, PlayIcon} from '@heroicons/vue/outline';
//autoplay video
const video = ref(null);
const playing = ref(false);
const autoplay = () => {
  // playing.value = true;
  // video.value.play();
  // video.value.addEventListener("ended", () => {
  //   playing.value = false;
  // });
};

watchEffect(() => {
  //autoplay
  if (video.value) {
    setTimeout(autoplay, 10000);
  }
});
</script>
