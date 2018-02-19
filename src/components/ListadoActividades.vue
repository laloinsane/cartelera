<template>
  <div>
  	<h1>Lista de todas las actividades</h1>
		<ul>
			<li class="actividad" v-for="actividad in actividades" :key="actividad.id">
  	  	<a href="#"><h3> {{ actividad.title }}</h3></a>	
					<img :src="actividad.img_url">
        	<!--  <router-link :to="{ path: 'actividad/'+actividad.title }">{{actividad.actividad}}</router-link>-->
  	  	<small> {{actividad.descripcion}} </small> 
  		</li>
		</ul>
							
	</div>


  
</template>

<script>
import axios from 'axios';
 

export default {
  data() {
    return {
      actividades: [],
      errors: []
    }
  },
  mounted() {
  	var self = this;
		self.actividades =	require('../assets/actividades.json');

	/*	ax.get('actividades.json')
  	.then(function(res){
  		self.actividades = res.data.results
  		console.log('Data: ', res.data.results);
  	})
  	.catch(function(error){
  		console.log('Error: ', error);
  	})*/
  },
}
</script>

<style scoped>

ul {
  list-style-type: none;
  padding: 0;
}
.actividad {
	padding:20px;
	border:1px solid black;
  display: inline-block;
  margin: 10px;
}
a {
  color:#009cb4;
}
</style>
