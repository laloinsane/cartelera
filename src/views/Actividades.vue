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
          </div>
        </form>

        <div v-if="filter === ''">
          <p class="uk-text-small uk-text-muted uk-text-left">{{actividades.length}} actividades encontradas.</p>
        </div>
        <div v-else>
          <div v-if="filteredActividad == 0">
            <p class="uk-text-small uk-text-muted uk-text-left">No se encontraron actividades.</p>
          </div>
          <div v-else-if="filteredActividad == 1">
            <p class="uk-text-small uk-text-muted uk-text-left">{{filteredCompleto.length}} actividad encontrada.</p>
          </div>
          <div v-else>
            <p class="uk-text-small uk-text-muted uk-text-left">{{filteredCompleto.length}} actividades encontradas.</p>
          </div>
        </div>
        
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

          <div class="pad-top" v-if="filteredActividad.length == limit">
            <button class="uk-button uk-button-secondary" @click.prevent="showMoreActividades">Cargar más actividades</button>
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
    filter: '',
    limit: 12
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
    },
    filteredCompleto () {
      let filteredCompleto = (this.filter === '') ? this.actividades : this.actividades.filter(item => {
        return _.includes(item.actividad.toLowerCase(), this.filter.toLowerCase())
      })
      return filteredCompleto.slice(0)
    }
  },
  methods: {
    loadActividades: function () {
      getActividades().then(data => this.actividades = data);
    },
    showMoreActividades () {
      this.limit += 12
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