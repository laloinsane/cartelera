<template>
  <div>
  	<h1>Pokemon</h1>
  	<div>
      <h3>{{ pokemons.name }}</h3>
      <img :src="pokemons.sprites.front_default">
      <img :src="pokemons.sprites.back_default">
  	</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      pokemons: [],
      errors: []    }
  },
  mounted() {
  	var self = this;
  	axios.get('https://pokeapi.co/api/v2/pokemon/1/')
  	.then(function(res){
  		self.pokemons = res.data
  		console.log('Data: ', res.data);
  	})
  	.catch(function(error){
  		console.log('Error: ', error);
  	})
  },
}
</script>