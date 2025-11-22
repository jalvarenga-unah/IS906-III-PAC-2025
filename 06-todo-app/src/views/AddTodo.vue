<script setup lang="ts">
import { useTodo } from '@/composables/useTodo'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const title = ref('')
const description = ref('')
const { addTodo } = useTodo()
const router = useRouter()

const handleSubmit = async () => {
  if (title.value.length === 0) {
    // Mostrar una alerta
    return
  }

  await addTodo(title.value, description.value)

  title.value = ''
  description.value = ''
  router.push({
    name:'home'
  })

}
</script>

<template>
  <div class="bg-white p-8 rounded-xl shadow-lg">
    <h2 class="text-2xl font-bold mb-6 text-gray-800">Añadir Nueva Tarea</h2>
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <input
        v-model="title"
        type="text"
        placeholder="Título de la tarea (Requerido)..."
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
        required
      />

      <textarea
        v-model="description"
        placeholder="Descripción detallada (Opcional)..."
        rows="3"
        class="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition"
      ></textarea>

      <button
        type="submit"
        class="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300 disabled:bg-indigo-300"
      >
        Guardar Tarea
      </button>
    </form>
  </div>
</template>
