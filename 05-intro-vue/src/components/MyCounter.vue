<script setup lang="ts">
import { ref } from 'vue'

// const props = defineProps({
//   value: Number,
//   title: {
//     type: String,
//     required: true,
//   },
// })

interface Props {
  value: number
  title?: string
}

// las props son de solo lectura
const props = defineProps<Props>()

const contador = ref<number>(props.value) // objeto reactivos

const incrementar = () => {
  console.log('se hizo clic')
  contador.value++
}
</script>

<template>
  <h1>titulo: {{ props.title }}</h1>
  <h3>Contador: {{ contador }}</h3>
  <br />

  <div>
    <button @click="incrementar">+1</button>

    <button v-if="contador >= 0" @click="contador--">-1</button>
    <span v-else-if="contador === -1"> El boton de resta ya no está disponible </span>
    <span v-else> Solo accesible desde las Vue Dev tools </span>
  </div>
</template>

<style scoped></style>
