<template>
  <div>
    <section>
      <label>Selecciona tu categoria:</label>
      <select v-model="select">
        <option v-for="categoria in categorias"
          :key="categoria.id">
          {{categoria.area}}
        </option>
      </select>
    </section>
    <section v-if="select !== ''">
      <h1>Lista de todas las actividades</h1>
      <ul>
        <li v-for="actividad in filteredCategoria" 
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
import {getCategorias} from '@/services/api'
import {getActividades} from '@/services/api'
import _ from 'lodash'
export default {
  name: 'CategoriasView',
  data() {
    return {
    categorias: [],
    select: '',
    actividades: []
    }
  },
  created () {
    getCategorias().then(response => {
      //console.log(response.data)
      this.categorias = response.data
    }).catch(err => console.error(err))
    getActividades().then(response => {
      //console.log(response.data)
      this.actividades = response.data
    }).catch(err => console.error(err))
  },
  computed: {
    filteredCategoria () {
      let filteredCategoria = (this.select === '') ? this.actividades : this.actividades.filter(item => {
        return _.includes(item.area, this.select)
      })
      return filteredCategoria.slice(0, this.limit)
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
