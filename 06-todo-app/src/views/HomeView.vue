<script setup lang="ts">
import ItemTodo from '@/components/ItemTodo.vue'
import { useTodo } from '@/composables/useTodo'
import { onMounted } from 'vue'

const { isLoading, pendingTodos, completedTodos, getAllTodos, toggleTodo } = useTodo()

//ciclo de vida
onMounted(async () => {
  console.log('onMounted')
  await getAllTodos()
})
</script>

<template>
  <main class="space-y-10">
    <div v-if="isLoading">
      <div class="mx-auto w-full max-w-sm rounded-md border border-blue-300 p-4">
        <div class="flex animate-pulse space-x-4">
          <div class="size-10 rounded-full bg-gray-200"></div>
          <div class="flex-1 space-y-6 py-1">
            <div class="h-2 rounded bg-gray-200"></div>
            <div class="space-y-3">
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 h-2 rounded bg-gray-200"></div>
                <div class="col-span-1 h-2 rounded bg-gray-200"></div>
              </div>
              <div class="h-2 rounded bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <template v-else>
      <div class="bg-white p-5 shadow-lg rounded-2xl">
        <h2>Tareas pendientes</h2>

        <ul class="space-y-3">
          <ItemTodo @toggle="toggleTodo" v-for="todo in pendingTodos" :key="todo.id" :todo="todo" />
        </ul>
      </div>

      <div class="bg-white p-5 shadow-lg rounded-2xl">
        <h2>Tareas completadas</h2>

        <ul class="space-y-3">
          <ItemTodo @toggle="toggleTodo" v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
        </ul>
      </div>
    </template>
  </main>
</template>
