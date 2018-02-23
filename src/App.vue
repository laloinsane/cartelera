<template>
  <div id="app">
    <default-layout>
      <section slot="contenido">
        <b>
          <router-link to="/">Inicio</router-link>
          <router-link to="/actividades">Actividades</router-link>
          <router-link to="/categorias">Categorias</router-link>
        </b>
        <router-view/>
      </section>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/layouts/Default'
export default {
  name: 'App',
  components: {
    DefaultLayout
  }
}
</script>
