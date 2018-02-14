// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  	/*data(){
		return {
			usuarios: [],
			cantidadResultados: 5
			//el maximo de resultados que devuelve este API es de 12 por pagina
		}
	},
	methods: {
		leerAPI(){
			axios.get('https://reqres.in/api/users', {
				params: {
					'per_page': this.cantidadResultados
				}
			}).then(response => {
				this.usuarios = response.data.data
			}).catch(e => {
				console.log(e)
			})
		}
	},
	created(){
		this.leerAPI()
	}*/
})
