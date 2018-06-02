import Vue from 'vue'
import Router from 'vue-router'

import InicioView from '@/views/Inicio'
import ActividadesView from '@/views/Actividades'
import ActividadView from '@/views/Actividad'
import CategoriasView from '@/views/Categorias'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index.html',
      name: 'Inicio',
      component: InicioView
    },
    {
      path: '/actividades.html',
      name: 'Actividades',
      component: ActividadesView
    },
    {
      path: '/actividad/:id.html',
      name: 'Actividad',
      component: ActividadView
    },
    {
      path: '/categorias.html',
      name: 'Categorias',
      component: CategoriasView
    }
  ],
  mode: 'history',
})
