<template>
  <DialogPanel
    class="w-full md:w-1/2 h-full md:h-[95vh] md:shadow-2xl rounded-sm bg-black text-slate-400 overflow-y-auto"
  >
    <div class="relative">
      <!-- image and auto play -->
      <XIcon
        class="absolute top-2 right-2 h-8 w-8 text-slate-50 cursor-pointer z-50"
        @click="$emit('closedDialog')"
      ></XIcon>
        <div
          class="bg-[url('./assets/img/landscape/img1.jpg')] bg-contain bg-bottom w-full object-cover aspect-[20/10] md:aspect-[20/9] md:bg-fixed"
        ></div>
      <div
        class="h-full w-full absolute pl-4 top-0 bg-gradient-to-b from-black/25 to-black/25 md:from-black/0 md:to-black grid justify-center items-center"
      >
        <PlayIcon class="h-14 w-14 shadow-sm text-slate-200"></PlayIcon>
      </div>
    </div>

    <!-- series title and details -->
    <DialogTitle
      class="-mt-10 px-10 z-10 relative text-2xl font-bold text-slate-50"
      >Stranded</DialogTitle
    >
    <DialogDescription class="flex px-10 items-center gap-4 text-sm relative">
      <span class="text-green-500">93% match</span>
      <span>June 2015</span>
      <span class="py-0.5 px-1 border border-slate-400">13+</span>
      <span>3 seasons</span>
    </DialogDescription>

    <!-- episode details -->
    <div class="px-10 pb-10">
      <p class="py-2 text-sm">
        <span class="text-slate-200 capitalize">S1E1</span> The cast away
      </p>
      <p class="text-sm text-slate-200">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum nam
        eaque impedit aperiam cumque dolorem quia, nihil facere, dignissimos
        nesciunt adipisci facilis numquam odio animi quam expedita officiis
        debitis ullam!
      </p>
      <p class="py-2 text-sm">
        Cast: John Doe, James Harper <br />
        Creators: Jessica Doe, Jahan Hamza
      </p>
      <div class="flex py-4 gap-10 font-thin text-slate-300">
        <div class="flex flex-col">
          <PlusIcon class="h-10 w-10"></PlusIcon>
          <div>My list</div>
        </div>
        <div class="flex flex-col">
          <ThumbUpIcon class="h-10 w-10"></ThumbUpIcon>
          <div>Rate</div>
        </div>
      </div>

      <!-- episodes list -->
      <select
        class="border-4 py-1 px-2 bg-slate-800 border-slate-600 outline-none"
      >
        <option class="outline-none">Season 1</option>
      </select>

      <div class="grid grid-cols-2 gap-2 mt-4">
        <div class="flex flex-col gap-2 p-1 hover:bg-slate-50/5" v-for="i in 6">
          <img
            src="../../assets/img/landscape/img1.jpg"
            class="aspect-[2/1] bg-cover object-cover cursor-pointer"
            alt=""
          />
          <article class="text-sm pb-4 cursor-default">
            <span class="font-bold text-slate-200"
              >{{ i }}. Lorem ipsum dolor</span
            >
            <br />
            sit amet consectetur, adipisicing elit. t commodi voluptatum ipsum
            voluptatem molestias ratione.
          </article>
        </div>
      </div>
    </div>
  </DialogPanel>
</template>
<script setup>
import { DialogTitle, DialogDescription, DialogPanel } from "@headlessui/vue";
import { PlusIcon, PlayIcon, ThumbUpIcon, XIcon } from "@heroicons/vue/outline";
</script>
