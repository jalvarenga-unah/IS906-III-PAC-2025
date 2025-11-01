<script lang="ts" setup>
// Typescript y composition API

import { reactive } from 'vue'
import MyCounter from './components/MyCounter.vue'

const nombre = 'Juan'

interface Postre {
  description: string
  calories: number
}

const form = reactive<Postre>({
  description: '',
  calories: 0,
})

const postres: Postre[] = reactive([
  {
    description: 'Pie de limon',
    calories: 300,
  },
  {
    description: 'Galletas de chocolate',
    calories: 30,
  },
])

const guardarPostre = () => {
  postres.unshift({ ...form })

  form.description = ''
  form.calories = 0
}
</script>

<template>
  <h1>Mi primer App en Vue!</h1>
  <h2>Hola soy {{ nombre }}</h2>

  <hr />

  <my-counter :value="10" :title="nombre" />
  <MyCounter :value="4" />
  <MyCounter :value="1" />

  <hr />

  <div>
    <input
      @keypress.enter="guardarPostre"
      v-model="form.description"
      type="text"
      placeholder="descripción"
    />
    <input v-model="form.calories" type="text" placeholder="calorías" />
    <button @click="guardarPostre">guardar</button>
  </div>

  <ul>
    <li v-for="({ description, calories }, index) in postres" :key="index">
      {{ index + 1 }} - {{ description }}
      <blockquote>{{ calories }}</blockquote>
    </li>
  </ul>
</template>

<style scoped>
h1 {
  color: blue;
}
</style>
