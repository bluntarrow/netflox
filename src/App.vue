<script setup>
import { useStore } from "vuex";
import { Dialog } from "@headlessui/vue";
import DialogContent from "./components/app/DialogContent.vue";

import { computed } from "vue";

const store = useStore();
const isOpen = computed(() => store.state.isOpen);

const setIsOpen = (a) => {
  store.commit("setIsOpen", a);
};
const closeDialog = () => {
  setIsOpen(false);
};
const start = () => store.commit("startup");
start();
</script>

<template>
  <RouterView></RouterView>
  <transition name="fade">
    <Dialog :open="isOpen" class="relative z-50">
      <div class="fixed inset-0 bg-black/50" aria-hidden="true" />
      <div class="fixed inset-0">
        <div class="flex h-full items-end justify-center">
          <DialogContent @closed-dialog="closeDialog"></DialogContent>
        </div>
      </div>
    </Dialog>
  </transition>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
