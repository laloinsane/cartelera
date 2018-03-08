<template>
  <section>
    <div class="uk-section uk-section-muted">
      <div class="uk-container uk-container-center uk-text-center">
        <form class="uk-form-stacked">
          <div class="uk-margin">
            <label class="uk-form-label uk-text-large" for="form-stacked-select">Selecciona tu categoria preferida:</label>
            <div class="uk-form-controls">
              <select class="uk-select" id="form-stacked-select" v-model="select" v-on:change="reset">
                <option v-for="categoria in categorias"
                  :key="categoria.id">
                  {{categoria.area}}
                </option>
              </select>
            </div>
          </div>
        </form>

        <div v-if="select !== ''">
          <div v-if="filteredCategoria == 0">
            <p class="uk-text-small uk-text-muted uk-text-left">No se encontraron actividades.</p>
          </div>
          <div v-else-if="filteredCategoria == 1">
            <p class="uk-text-small uk-text-muted uk-text-left">{{filteredCompleto.length}} actividad encontrada.</p>
          </div>
          <div v-else>
            <p class="uk-text-small uk-text-muted uk-text-left">{{filteredCompleto.length}} actividades encontradas.</p>
          </div>
          
          <div class="pad-top">
            <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>  
              <div class="uk-width-1-2@m"
              v-for="(item, index) in filteredCategoria"
              :key="index"
              @click.prevent="goToActividad(item)">
                <actividad-card-right v-if="(index % 2) === 0" :actividad="item"></actividad-card-right>
                <actividad-card-left v-else :actividad="item"></actividad-card-left>
              </div>
            </div>

            <div class="pad-top" v-if="filteredCategoria.length == limit">
              <button class="uk-button uk-button-secondary" @click.prevent="showMoreActividades">Cargar más actividades</button>
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
import _ from 'lodash'
export default {
  name: 'CategoriasView',
  data() {
    return {
    select: '',
    limit: 12
    }
  },
  created () {
    this.fetchEventos();
    this.fetchCategorias();
  },
  computed: {
    filteredCategoria () {
      let filteredCategoria = (this.select === '') ? this.eventos : this.eventos.filter(item => {
        return _.includes(item.area, this.select)
      })
      return filteredCategoria.slice(0, this.limit)
    },
    filteredCompleto () {
      let filteredCompleto = (this.select === '') ? this.eventos : this.eventos.filter(item => {
        return _.includes(item.area, this.select)
      })
      return filteredCompleto.slice(0)
    },
    eventos() {
      return this.$store.state.eventos
    },
    categorias() {
      return this.$store.state.categorias
    }
  },
  methods: {
    fetchEventos() {
      this.$store.dispatch('fetchEventos')
    },
    fetchCategorias() {
      this.$store.dispatch('fetchCategorias')
    },
    reset() {
      this.limit = 12
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