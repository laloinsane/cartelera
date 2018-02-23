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
/*.tm-middle,
.tm-section,*/
.cartelera-footer { 
  padding: 40px 0px 50px 0px !important; 
}

/* Tablet and bigger */
@media (min-width: 768px) {
  /*.tm-middle,
  .tm-section,*/
  .cartelera-footer { 
    padding: 70px 0px 80px 0px !important; 
  }
}

/* Large screen and bigger */
/*@media (min-width: 1220px) {
  .tm-middle,
  .tm-section,
  .cartelera-footer { 
    padding: 110px 0px 120px 0px !important; 
  }
}*/
</style>
