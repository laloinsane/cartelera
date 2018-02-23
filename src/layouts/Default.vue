<template>
    <div class="default-layout">
        <div><slot name="contenido"></slot></div>
        <footer-partial></footer-partial>
    </div>
</template>

<script>
import HeaderPartial from '@/partials/Header'
import FooterPartial from '@/partials/Footer'
export default {
  name: 'DefaultLayout',
  components: {
    HeaderPartial,
    FooterPartial
  }
}
</script>
