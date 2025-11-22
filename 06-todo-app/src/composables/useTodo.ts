import { todoApi } from '@/api/todoApi'
import type { Todo } from '@/interfaces/todo.interface'
import { isAxiosError } from 'axios'
import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'

const API_URL = '/todos'

export const useTodo = () => {
  const toast = useToast()

  const todos = ref<Todo[]>([])
  const isLoading = ref<boolean>(false)
  const pendingTodos = computed(() => todos.value.filter((todo) => !todo.completed))
  const completedTodos = computed(() => todos.value.filter((todo) => todo.completed))

  const getAllTodos = async () => {
    isLoading.value = true
    const { data } = await todoApi.get<Todo[]>(API_URL)
    todos.value = data
    isLoading.value = false
  }

  const addTodo = async (title: string, description: string | null) => {
    try {
      await todoApi.post(API_URL, {
        title,
        description,
      })

      toast.success('Tarea creada correctamente')
    } catch (e) {
      if (isAxiosError(e)) {
        toast.warning(e.message)
      } else toast.error('Algo salio mal')
    }
  }

  const toggleTodo = async (id: string) => {
    //TODO: El llamado al endpoint para cambiar el estado

    const todo = todos.value.find((todo) => todo.id === id)

    if (todo) {
      todo.completed = !todo.completed
    }
  }

  return {
    pendingTodos,
    completedTodos,
    isLoading,

    getAllTodos,
    addTodo,
    toggleTodo,
  }
}
