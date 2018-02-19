<template>
  <div>

    <p>{{ title }}</p>

     <search> </search>
 
  </div>
</template>

<script>
import Search from './Search'

export default {
  components: {
    Search,
  },

  data () {
      return {
        title: 'Buscar actividades por categorias',
      }
    },
    
}
</script>

<style scoped>

</style>


