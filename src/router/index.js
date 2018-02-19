import Vue from 'vue'
import Router from 'vue-router'
import Inicio from '@/components/Inicio'
import Categorias from '@/components/Categorias'
import ListadoActividades from '@/components/ListadoActividades'
import Actividad from '@/components/Actividad'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
   
    {
      path: '/categorias',
      name: 'Categorias',
      component: Categorias
    },

    {
      path: '/listado-actividades',
      name: 'ListadoActividades',
      component: ListadoActividades
    },
  /*  {
      path: '/pokemon/:nombre_pokemon',
      name: 'Pokemon',
      component: Pokemon,
      props: true
    }*/
  ]
})
