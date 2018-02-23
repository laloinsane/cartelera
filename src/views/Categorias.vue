<template>
  <section>
    <div class="uk-section uk-section-muted">
      <div class="uk-container uk-container-center uk-text-center">
        <form class="uk-form-stacked">
          <div class="uk-margin">
            <label class="uk-form-label uk-text-large" for="form-stacked-select">Selecciona tu categoria preferida:</label>
            <div class="uk-form-controls">
              <select class="uk-select" id="form-stacked-select" v-model="select">
                <option v-for="categoria in categorias"
                  :key="categoria.id">
                  {{categoria.area}}
                </option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="uk-section uk-section-default" v-if="select !== ''">
      <div class="uk-container uk-container-center uk-text-center">
        <label class="uk-form-label uk-text-large">Listado de actividades:</label>
        <ul class="uk-list">
          <li v-for="(item, index) in filteredCategoria" 
            :key="index"
            @click.prevent="goToActividad(item)">
            <section v-if="(index % 2) === 0">
              <actividad-card-right :actividad="item"></actividad-card-right>
            </section>
            <section v-else>
              <actividad-card-left :actividad="item"></actividad-card-left>
            </section>
          </li>
        </ul>
      </div>
    </div>
  </section>

</template>

<script>
import ActividadCard from '@/components/ActividadCard'
import ActividadCardRight from '@/components/ActividadCardRight'
import ActividadCardLeft from '@/components/ActividadCardLeft'
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
    ActividadCard,
    ActividadCardRight,
    ActividadCardLeft
  }
}
</script>
