<template>
  <div id="app">
   <!--<img src="./assets/logo.png">--> 
    <b>
      <router-link to="/">Inicio</router-link>
      <router-link to="/listado-actividades">Actividades</router-link>
      <router-link to="/categorias">Categorias</router-link>
    </b>

    <router-view/>
    
  </div>
</template>

<script>

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 50px;
}
</style>
