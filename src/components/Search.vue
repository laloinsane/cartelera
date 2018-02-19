<template>
	<form class="search">
		<input v-model="buscarCategoriaInput" type="text" placeholder="Ingrese una categoria">
		<button  @click="buscarCategoria" >Buscar</button>
		<p>{{ buscando }}</p>
	</form>
</template>

<script>
export default {
	name: 'search',
		data () {
		return {
			buscando: '',
			buscarCategoriaInput:''
		}
	},
	methods:{
			buscarCategoria() {
			this.buscando = 'Buscando actividades de '+this.buscarCategoriaInput
			this.buscarCategoriaInput = ''
		},
	}
}
	
</script>