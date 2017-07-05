<template>
  <div>
    <label>Key:</label>
    <label> Nombre </label>
    <label>Value:</label>
    <label> {{company.name}} </label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    company: {
      type: Object,
      required: true
    }
  },
  name: 'company',
  data () {
    return {
      counter: 0
    }
  }
}
</script>

<style scoped>
h1 {
  display: inline;
}
</style>

