<script>
    export default {
      props: [
        'name'
      ],
      methods: {
        sayHello() {
          this.$emit('buttonPressed', this.name)
        }
      }
    }
</script>

<template>
    <div>
        <h3>{{ name }}</h3>
        <button @click="sayHello">Saludar</button>
    </div>
</template>