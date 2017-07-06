<style src="./key-value.scss"></style>

<template src="./key-value.html"></template>

<script>

/*
 * Show information about the company selected.
 */

export default {
  props: {

    /*
     * Company name.
     */

    name: {
      type: String,
      required: true
    }
  },
  name: 'keyValue'
}
</script>
