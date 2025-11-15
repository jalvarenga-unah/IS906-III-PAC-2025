<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <div class="p-5 max-w-[60%] mx-auto">
    <NavBar />
    <RouterView />
  </div>
</template>

<style scoped></style>
