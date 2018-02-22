<script>
export default {
  name: 'ActividadView',
  render (h) {
    let actividad = this.$route.params.actividad
    if (!actividad) {
      this.$router.push({ name: 'Inicio' })
    } else {
      console.log(actividad)
      return <section>
        <h3>{ actividad.id }</h3>
        <h3>{ actividad.Fecha }</h3>
        <h3>{ actividad.actividad }</h3>
        <h3>{ actividad.direccion }</h3>
      </section>
    }
  }
}
</script>
