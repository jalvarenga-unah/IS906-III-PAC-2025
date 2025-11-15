<script setup lang="ts">
import { todoApi } from '@/api/todoApi'
import ItemTodo from '@/components/ItemTodo.vue'
import type { Todo } from '@/interfaces/todo.interface'
import { computed, ref, onMounted } from 'vue'

//TODO: crear el composable para las acciones

//variables reactivas
const todos = ref<Todo[]>([])

//funciones computadas
const pendingTodos = computed(() => todos.value.filter((todo) => !todo.completed))
const completedTodos = computed(() => todos.value.filter((todo) => todo.completed))

//ciclo de vida
onMounted(async () => {
  console.log('onMounted')
  const { data } = await todoApi.get<Todo[]>('/todos')
  todos.value = data
})
</script>

<template>
  <main class="space-y-10">
    <div class="bg-white p-5 shadow-lg rounded-2xl">
      <h2>Tareas pendientes</h2>

      <ul class="space-y-3">
        <ItemTodo v-for="todo in pendingTodos" :key="todo.id" :todo="todo" />
      </ul>
    </div>

    <div class="bg-white p-5 shadow-lg rounded-2xl">
      <h2>Tareas completadas</h2>

      <ul class="space-y-3">
        <ItemTodo v-for="todo in completedTodos" :key="todo.id" :todo="todo" />
      </ul>
    </div>
  </main>
</template>
