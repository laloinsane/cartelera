<template>
  <div id="app">
    <img src="./assets/logo.png">
    <component></component>

    <p>
      <router-link to="/agenda">agenda</router-link>
      <router-link to="/agenda/hoy">Admin ChildRoutes</router-link>
      <router-link to="/categoria">categoria</router-link>
      <router-link to="/api">api</router-link>
      <router-link to="/pokeapi">pokeapi</router-link>
    </p>

    <p class="title">Hola {{ name }}</p>
    <hr>
    <input v-model="userName">
    <button @click="addUser">Añadir</button>
    <hr>
    <user
            v-for="user in users"
            :name="user"
            @buttonPressed="sayHello"
    ></user>

    <router-view/>
  </div>
</template>

<script>
import Component from './components/Component'
import User from './components/User'

export default {
  name: 'App',
  components: {
    Component,
    User
  },

  data () {
      return {
        name: 'Laraveles',
        userName: '',
        users: []
      }
    },
    methods: {
      addUser() {
        this.users.push(this.userName)
        this.userName = ''
      },
      sayHello(name) {
        this.name = name
      }
    }
    
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
