<style src="./add-form.scss"></style>

<template src="./add-form.html"></template>

<script>

import keyValue from '../key-value/key-value'

export default {

  components: {
    keyValue
  },
  name: 'addForm',
  data () {
    return {
      range: 0
    }
  },
  methods: {
    addKeyValue: function () {
      this.range += 1
    }
  }
}

</script>
