<script setup>
import LeftNav from './components/app/LeftNav.vue';
</script>

<template>
  <Suspense>
    <template #default>
        <RouterView></RouterView>
    </template>
    <template #fallback>
      <div class="w-[100vw] h-[100vh] bg-red-500">

      </div>
    </template>
  </Suspense>
</template>
