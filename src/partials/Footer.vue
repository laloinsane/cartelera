<template>
  <div class="uk-section uk-section-muted cartelera-footer">
    <div class="uk-container uk-container-center uk-text-center">
      <div class="uk-panel">
        <p class="uk-text-small">
          Copyright © 2018 Cartelera.
          <br>
          Todos los derechos reservados. 
          <br>
          Puerto Montt, Chile.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPartial'
}
</script>

<style scoped>
.cartelera-footer { 
  padding: 40px 0px 50px 0px !important; 
}
@media (min-width: 768px) {
  .cartelera-footer { 
    padding: 70px 0px 80px 0px !important; 
  }
}
</style>
