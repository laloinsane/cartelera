<template>
  <div>
  	<h1>API</h1>
  	<div>
  	  	<div class="pokemon" v-for="pokemon in pokemons">
  	  		<h3>Titulo: {{ pokemon.name }}</h3>
  	  		

          <router-link :to="{ path: 'pokemon/'+pokemon.name }">{{pokemon.name}}</router-link>

  	  		<p>Descripción: {{pokemon.url}}</p>
  		</div>
  	</div>
  </div>

  
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemons: [],
      errors: []
    }
  },
  mounted() {
  	var self = this;
  	axios.get('https://pokeapi.co/api/v2/pokemon')
  	.then(function(res){
  		self.pokemons = res.data.results
  		console.log('Data: ', res.data.results);
  	})
  	.catch(function(error){
  		console.log('Error: ', error);
  	})
  },
}
</script>