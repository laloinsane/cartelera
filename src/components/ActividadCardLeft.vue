<template>
  <div class="uk-card uk-card-default uk-grid-collapse uk-child-width-1-2@s uk-margin" uk-grid>
      <div class="uk-card-media-left uk-cover-container">
          <img :src="actividad.RutaImg" alt="" uk-cover>
          <canvas width="600" height="400"></canvas>
      </div>
      <div>
          <div class="uk-card-body">
            <div class="uk-card-badge uk-label" :style="{ background: actividad.color_area + '!important' }">{{ actividad.area }}</div>
              <h3 class="uk-card-title mar-top"> {{ actividad.actividad }}</h3>
              <p>{{ actividad.Fecha_ini }}</p>
              <p>{{ actividad.Descripcion }}</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'ActividadCardLeft',
  props: {
    actividad: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.mar-top {
  margin-top: 40px !important;
}
</style>