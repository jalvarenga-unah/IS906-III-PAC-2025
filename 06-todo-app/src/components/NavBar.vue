<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="bg-white p-5 flex space-x-6 shadow-md m-5 rounded-2xl items-center">
    <h1 class="text-2xl font-bold text-blue-600">Gestor de tareas</h1>
    <RouterLink class="text-gray-600 hover:text-blue-600 pb-2 transition duration-150" to="/"
      >Lista de tareas</RouterLink
    >
    <RouterLink class="text-gray-600 hover:text-blue-600 pb-2 transition duration-150" to="/add"
      >Crear una tarea</RouterLink
    >
  </nav>
</template>

<style scoped>
.router-link-active {
  color: oklch(48.8% 0.243 264.376);
}
</style>
