<template>
  <nav>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
</template>
<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 4;
}

li {
  margin: 0 12px;
}

a {
  font-weight: 800;
  font-size: 1.5rem;
  color: #26A69A;
  text-decoration: none;
}

.router-link-active {

  background-color: #26A69A;
  color: #E0F2F1;
  padding: 5px;
}
</style>
