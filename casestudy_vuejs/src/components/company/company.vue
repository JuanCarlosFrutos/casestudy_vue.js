
<style src="./company.scss"></style>

<template src="./company.html"></template>

<script>

/*
 * Contain all information about a company , but only shows the first row.
 */

export default {
  props: {

  	/*
 	 * Contain all information about the company.
 	 */

    company: {
      type: Object,
      required: true
    }
  },
  name: 'company'
}

</script>
