<style src="./add-form.scss"></style>

<template src="./add-form.html"></template>

<script>

import keyValue from '../key-value/key-value'

/*
 * Form to add information about the compay or create new company.
 */

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

    /*
     * the method add new key-value input to the company.
     */

    addKeyValue: function () {
      this.range += 1
    }
  }
}

</script>
