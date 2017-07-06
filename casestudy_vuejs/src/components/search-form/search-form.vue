<style src="./search-form.scss"></style>

<template src="./search-form.html"></template>

<script>

import company from '../company/company'
import searchBar from '../search-bar/search-bar'

/*
 * First page of app, you can search comapnies and see the results.
 */

export default {
  components: {
    searchBar,
    company
  },
  data () {
    return {
      companies: [
        {id: 0, name: 'mercedes', category: 'cars'},
        {id: 1, name: 'zalando', category: 'clothes'},
        {id: 2, name: 'BMW', category: 'cars'}
      ]
    }
  },
  methods: {

    /*
     * When user click on edit button redirect to route /edit/:id. id identifies the company selected
     */

    edit: function (n) {
      //  Vue.set(companies, name, "Z3");
      //  this.$set(this.names[1], "apellido" , "Undefined");
      //  this.companies.push({name: 'XXXX'})
      //  this.$route.router.go('/new/' + n.id)
      this.$router.push('/edit/' + n.id)
      //  router.go('/new/' + n.id)
    }
  }
}
</script>

