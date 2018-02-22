<template>
  <div>
    <section>
      <label>Busca tu actividad:</label>
      <input
          type="text"
          v-model="filter"
          placeholder="Introduce el nombre de tu actividad">
      <small>Actualmente solo se pueden hacer búsquedas por nombre</small>
    </section>
    <section>    
      <h1>Lista de todas las actividades</h1>
      <ul>
        <li v-for="actividad in filteredActividad" 
            :key="actividad.id" 
            @click.prevent="goToActividad(actividad)">
            <actividad-card :actividad="actividad"></actividad-card>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import ActividadCard from '@/components/ActividadCard'
import {getActividades} from '@/services/api'
import _ from 'lodash'
export default {
  name: 'ActividadesView',
  data() {
    return {
    actividades: [],
    filter: ''
    }
  },
  created () {
    getActividades().then(response => {
      //console.log(response.data)
      this.actividades = response.data
    }).catch(err => console.error(err))
  },
  computed: {
    filteredActividad () {
      let filteredActividad = (this.filter === '') ? this.actividades : this.actividades.filter(item => {
        return _.includes(item.actividad.toLowerCase(), this.filter.toLowerCase())
      })
      return filteredActividad.slice(0, this.limit)
    }
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

