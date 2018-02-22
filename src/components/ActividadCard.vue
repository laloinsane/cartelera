<template>
    <div class="actividad-card">
        <a href="#"><h3> {{ actividad.id }}</h3></a>
        <h3> {{ actividad.Fecha }}</h3>
        <h3> {{ actividad.actividad }}</h3>
        <h3> {{ actividad.direccion }}</h3>
    </div>
</template>

<script>
export default {
  name: 'ActividadCard',
  props: {
    actividad: {
      type: Object,
      required: true
    }
  }
}
</script>