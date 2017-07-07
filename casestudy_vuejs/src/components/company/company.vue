
<style src="./company.scss"></style>

<template src="./company.html"></template>

<script>

	import {Vue} from 'av-ts'
	//  import keyValue from '../key-value/key-value'

	/*
	 * Form to add information about the compay or create new company.
	 */

	export default class Company extends Vue {

	  // Data property
	  range = 0

	    // Lifecycle hook
	  mounted () {
	  }

	    /*
	     * the method add new key-value input to the company.
	     */

	  addKeyValue () {
	    this.range += 1
	  }

	}

</script>
