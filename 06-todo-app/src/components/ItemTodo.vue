<script setup lang="ts">
import type { Todo } from '@/interfaces/todo.interface'

//TODO: crear la funcion para cambiar estado a una tarea

interface Prop {
  todo: Todo
}

defineProps<Prop>()
</script>

<template>
  <li
    :class="[
      'flex justify-between p-3 rounded-lg hover:shadow-sm hover:cursor-pointer transition duration-150',
      todo.completed
        ? 'bg-green-50 opacity-70 text-gray-500 line-through'
        : 'bg-gray-50 border border-gray-50',
    ]"
  >
    <!-- Contenido de la Tarea -->
    <div class="flex flex-col grow mr-4">
      <span :class="['font-medium', todo.completed ? '' : 'text-gray-800']">{{ todo.title }}</span>
      <!-- Muestra la descripción si existe -->
      <span v-if="todo.description" class="text-sm italic mt-1">
        {{ todo.description }}
      </span>
    </div>

    <button
      :class="[
        'shrink-0 text-sm px-3 py-1 rounded-full transition-colors',
        todo.completed
          ? 'bg-gray-300 text-gray-700 hover:bg-gray-400'
          : 'bg-indigo-500 text-white hover:bg-indigo-600',
      ]"
    >
      {{ todo.completed ? 'Deshacer' : 'Completar' }}
    </button>
  </li>
</template>

<style scoped></style>
