<template>
  <div id="app" class="uk-offcanvas-content">
    <default-layout>
      <section slot="contenido">
        <nav class="uk-navbar-container" uk-navbar>
          <div class="uk-navbar-left">
            <a class="uk-navbar-item uk-logo" href="#">Logo</a>
          </div>
          <div class="uk-navbar-right">
            <ul class="uk-navbar-nav uk-visible@m">
              <li><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/actividades">Actividades</router-link></li>
              <li><router-link to="/categorias">Categorias</router-link></li>
            </ul>
            <a class="uk-navbar-toggle uk-hidden@m" uk-navbar-toggle-icon uk-toggle="target: #offcanvas-push"></a>
          </div>
        </nav>
        <div >
          <div id="offcanvas-push" uk-offcanvas="mode: push; overlay: true">
            <div class="uk-offcanvas-bar uk-flex uk-flex-column">
              <ul class="uk-nav uk-nav-primary uk-nav-center uk-margin-auto-vertical">
              <li><router-link to="/">Inicio</router-link></li>
              <li><router-link to="/actividades">Actividades</router-link></li>
              <li><router-link to="/categorias">Categorias</router-link></li>
              </ul>
            </div>
          </div>
        </div>
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

<style scoped>
.tm-navbar-color {
  background: black !important;
}
</style>