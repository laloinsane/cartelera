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

        <label class="uk-form-label uk-text-large">Listado de actividades:</label>
        <div class="pad-top">
          <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>  
            <div class="uk-width-1-2@m"
            v-for="(item, index) in filteredActividad"
            :key="index"
            @click.prevent="goToActividad(item)">
              <actividad-card-right v-if="(index % 2) === 0" :actividad="item"></actividad-card-right>
              <actividad-card-left v-else :actividad="item"></actividad-card-left>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ActividadCard from '@/components/ActividadCard'
import ActividadCardRight from '@/components/ActividadCardRight'
import ActividadCardLeft from '@/components/ActividadCardLeft'
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
    this.loadActividades()
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
    loadActividades: function () {
      getActividades().then(data => this.actividades = data);
    },
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
    ActividadCard,
    ActividadCardRight,
    ActividadCardLeft
  }
}
</script>

<style scoped>
.pad-top {
  margin-top: 30px !important;
}
</style>