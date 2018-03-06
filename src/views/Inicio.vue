<template>
<section class="principal">
  <div uk-spinner="ratio: 4" class="uk-position-center uk-overlay spin"></div>
  <div class="uk-position-relative uk-visible-toggle uk-light slid" uk-slideshow="animation: fade; autoplay: true">
    <ul class="uk-slideshow-items">
      <li v-for="(item, index) in actividades"
        :key="index"
        v-if="actividades && actividades.length > 0 && index <= limited">
          <img :src="item.RutaImg" alt="" uk-cover>
          <div class="uk-overlay uk-overlay-primary uk-position-right uk-text-center uk-transition-slide-right uk-width-medium">
            <h3 class="uk-margin-remove">{{item.actividad}}</h3>
            <p class="uk-margin-remove">{{item.Descripcion}}</p>
          </div>
      </li>
    </ul>
    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>
  </div>
</section>
</template>

<script>
import {getActividades} from '@/services/api'
export default {
  name: 'InicioView',
  data () {
    return {
      actividades: [],
      limited: 4
    }
  },
  created () {
    this.loadActividades();
  },
  methods: {
    loadActividades: function () {
      getActividades()
      .then(data => this.actividades = data)
      .then(function() {
        document.querySelector('.uk-spinner').style.display = 'none';
      });
    }
  }
}
</script>

<style scoped>
.spin {
  position: absolute; 
  z-index: 2;
}
.slid {
  position: absolute; 
  z-index: 1;
}
.principal {
  position: relative;
}
</style>