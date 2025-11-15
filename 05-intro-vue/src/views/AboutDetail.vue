<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

const route = useRoute() // composable
const router = useRouter()

console.log(route.params)
</script>

<template>
  <div>Detalle de: {{ $route.params.id }}</div>

  <button
    @click="
      router.replace({
        name: 'home',
        query: {
          foo: 'bar',
        },
      })
    "
  >
    volver al inicio
  </button>
</template>

<style scoped></style>
