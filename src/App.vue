<script setup>
import { useStore } from "vuex";

const store = useStore();
const start = () => store.commit("startup");
start();
</script>

<template>
  <RouterView></RouterView>
</template>
