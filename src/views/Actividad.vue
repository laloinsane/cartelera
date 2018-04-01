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

          <div class="uk-container uk-container-center pad-top">
            <div class="uk-card uk-card-default">
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex-middle" uk-grid>
                  <div class="uk-width-expand">
                    <h3 class="uk-card-title uk-margin-remove-bottom">{ actividad.actividad }</h3>
                    <p class="uk-text-meta uk-margin-remove-top">Publicado: { actividad.fechaLAnzamiento } / Fecha inicio: { actividad.fecha_inicio_formato } / Duración: { actividad.duracion }.</p>
                  </div>
                </div>
              </div>
              <div class="uk-card-body uk-text-center">
                <p>{ actividad.Descripcion }</p>
              </div>
              <div class="uk-card-body uk-text-center">
                <img src={ actividad.RutaImg }/>
              </div>
              <div class="uk-card-footer">
                <p class="uk-text-meta uk-margin-remove-top">Dirección: { actividad.direccion }.<br></br>Lugar: { actividad.lugar }.</p>
              </div>
            </div>
          </div>

      </section>
    }
  }
}
</script>

<style scoped>
.pad-top {
  margin-top: 30px !important;
  margin-bottom: 30px !important;
}
</style>
