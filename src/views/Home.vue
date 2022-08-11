<template>
  <div class="text-zinc-50 p-0 bg-black">
    <!-- header video -->
    <div class="w-full relative z-10">
     <PreviewVideo></PreviewVideo>
    </div>

    <!--movies section -->
    <div class="p-4 pt-0 md:-mt-28 pb-0 z-50 relative">
      <Slides></Slides>
      <footer class="text-center text-xs md:mt-10 py-2 text-zinc-600">
        &copy;{{ year }} Notflix inc.
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from "vue";
import Slides from "../components/home/Slides.vue";
import PreviewVideo from "../components/home/Video.vue";

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
