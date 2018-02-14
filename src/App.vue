<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>
      <router-link to="/agenda">agenda</router-link>
      <router-link to="/categoria">categoria</router-link>
      <router-link to="/api">api</router-link>
      <router-link to="/pokeapi">pokeapi</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
