<template>
  <section>
    <div class="uk-section uk-section-muted">
      <div class="uk-container uk-container-center uk-text-center">
        <form class="uk-form-stacked">
          <div class="uk-margin">
            <label class="uk-form-label uk-text-large" for="form-stacked-text">Encuentra tu actividad preferida:</label>
            <div class="uk-form-controls">
              <input class="uk-input" 
                id="form-stacked-text" 
                type="text" 
                v-model="filter"
                placeholder="Introduce el nombre de tu actividad">
            </div>
            <p class="uk-text-small uk-text-muted">Actualmente solo se pueden realizar búsquedas por nombre de actividad.</p>
          </div>
        </form>
      </div>
    </div>

    <div class="uk-section uk-section-default">
      <div class="uk-container uk-container-center uk-text-center">
        <label class="uk-form-label uk-text-large">Listado de actividades:</label>
        <ul class="uk-list">
          <li v-for="actividad in filteredActividad" 
              :key="actividad.id" 
              @click.prevent="goToActividad(actividad)">
              <actividad-card :actividad="actividad"></actividad-card>
          </li>
        </ul>
      </div>
    </div>
  </section>
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

