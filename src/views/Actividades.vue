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

        <div uk-spinner="ratio: 4" class="uk-position-center uk-overlay"></div>
        
        <div v-if="filter === ''">
          <p class="uk-text-small uk-text-muted uk-text-left">{{totalActividades}} actividades encontradas.</p>

          <div class="pad-top">
            <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>  
              <div class="uk-width-1-2@m"
              v-for="(item, index) in actividades"
              :key="index"
              @click.prevent="goToActividad(item)">
                <actividad-card-right v-if="(index % 2) === 0" :actividad="item"></actividad-card-right>
                <actividad-card-left v-else :actividad="item"></actividad-card-left>
              </div>
            </div>

            <div class="pad-top">
              <button class="uk-button uk-button-secondary" @click.prevent="mostrarMasActividades">Cargar más actividades</button>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-if="busqueda == 0">
            <p class="uk-text-small uk-text-muted uk-text-left">No se encontraron actividades.</p>
          </div>
          <div v-else-if="busqueda == 1">
            <p class="uk-text-small uk-text-muted uk-text-left">{{busqueda.length}} actividad encontrada.</p>
          </div>
          <div v-else>
            <p class="uk-text-small uk-text-muted uk-text-left">{{busqueda.length}} actividades encontradas.</p>
          </div>

          <div class="pad-top">
            <div class="uk-grid-match uk-grid-small uk-text-center" uk-grid>  
              <div class="uk-width-1-2@m"
              v-for="(item, index) in busqueda"
              :key="index"
              @click.prevent="goToActividad(item)">
                <actividad-card-right v-if="(index % 2) === 0" :actividad="item"></actividad-card-right>
                <actividad-card-left v-else :actividad="item"></actividad-card-left>
              </div>
            </div>

            <div class="pad-top">
              <button class="uk-button uk-button-secondary" @click.prevent="mostrarMasActividades">Cargar más actividades</button>
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
  name: 'ActividadesView',
  data() {
    return {
      filter: '',
      limit: 12,
      limite: 10
    }
  },
  created () {
    if(this.contador === 0){
      this.$store.dispatch('loadActividades');
    }
  },
  watch: {
    filter: function (newFilter, oldFilter) {
      this.a = 'Waiting for you to stop typing...'
      this.getBus()
    }
  },
  computed:
  {
    actividades() {
      return this.$store.state.actividades;
    },
    totalActividades() {
      return this.$store.state.total;
    },
    contador() {
      return this.$store.state.count;
    },
    busqueda() {
      return this.$store.state.busqueda;
    },
  },
  methods: {
        getBus: _.debounce(
      function () {
        if (this.filter !== '') {
          this.$store.dispatch('loadBusquedaActividades', this.filter);
        }
        //this.answer = 'Thinking...'
        //this.$store.dispatch('loadBusquedaActividades');
        /*var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })*/
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
    ),
    getAnswer: _.debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = 'Questions usually contain a question mark. ;-)'
          return
        }
        this.answer = 'Thinking...'
        var vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            vm.answer = _.capitalize(response.data.answer)
          })
          .catch(function (error) {
            vm.answer = 'Error! Could not reach the API. ' + error
          })
      },
      // This is the number of milliseconds we wait for the
      // user to stop typing.
      500
    ),

    showMoreActividades () {
      this.limit += 12
    },

    mostrarMasActividades () {
      this.$store.dispatch('loadActividades');
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