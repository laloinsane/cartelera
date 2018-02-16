<template>
  <div id="app">

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
 

  </div>
</template>

<script>
import Component from './Component'
import User from './User'

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


