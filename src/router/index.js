import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Agenda from '@/components/Agenda'
import Hoy from '@/components/Hoy'
import Categoria from '@/components/Categoria'
import Api from '@/components/Api'
import Pokeapi from '@/components/Pokeapi'
import Pokemon from '@/components/Pokemon'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/agenda',
      name: 'Agenda',
      component: Agenda,
      children: [
        {
            //agenda/hoy
            path: 'hoy',
            component: Hoy
        }
      ]
    },
    {
      path: '/categoria',
      name: 'Categoria',
      component: Categoria
    },
    {
      path: '/api',
      name: 'Api',
      component: Api
    },
    {
      path: '/pokeapi',
      name: 'Pokeapi',
      component: Pokeapi
    },
    {
      path: '/pokemon/:nombre_pokemon',
      name: 'Pokemon',
      component: Pokemon,
      props: true
    }
  ]
})
