<script>
export default {
  name: 'ActividadView',
  render (h) {
    let actividad = this.$route.params.actividad
    if (!actividad) {
      this.$router.push({ name: 'Inicio' })
    } else {
      //console.log(actividad)
      return <section>
        <h3>{ actividad.Creado_El }</h3>
        <h3>{ actividad.id }</h3>
        <h3>{ actividad.Fecha }</h3>
        <h3>{ actividad.Fecha_ini }</h3>
        <h3>{ actividad.Hora_Ini }</h3>
        <h3>{ actividad.Hora_Fin }</h3>
        <h3>{ actividad.actividad }</h3>
        <h3>{ actividad.Descripcion }</h3>
        <h3>{ actividad.direccion }</h3>
        <h3>{ actividad.lugar }</h3>
        <h3>{ actividad.En_Cartelera }</h3>
        <h3>{ actividad.area }</h3>
        <h3>{ actividad.color_area }</h3>
        <h3>{ actividad.subarea }</h3>
        <img src={ actividad.RutaImg }/>
        <h3>{ actividad.cuantoFalta }</h3>
        <h3>{ actividad.fechaLAnzamiento }</h3>
        <h3>{ actividad.duracion }</h3>
        <h3>{ actividad.Fecha_fin }</h3>
      </section>
    }
  }
}
</script>
