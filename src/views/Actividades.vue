<template>
  <div>
    <h1>Lista de todas las actividades</h1>
    <ul>
			<li v-for="actividad in actividades" 
          :key="actividad.id" 
          @click.prevent="goToActividad(actividad)">
          <actividad-card :actividad="actividad"></actividad-card>
  		</li>
		</ul>
  </div>
</template>

<script>
import ActividadCard from '@/components/ActividadCard'
import {getActividades} from '@/services/api'
export default {
  name: 'ActividadesView',
  data() {
    return {
	  actividades: []
    }
  },
  created () {
    getActividades().then(response => {
      console.log(response.data)
      this.actividades = response.data
    }).catch(err => console.error(err))
  },
  methods: {
    goToActividad (actividad) {
      this.$router.push({
        params: {
          id: actividad.id,
          actividad: actividad
        },
        name: 'Actividad'
      })
    }
  },
  components: {
    ActividadCard
  }
}
</script>

