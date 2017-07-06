<style src=“./search-form.css”></style>

<template src=“./search-form.html”></template>

<script>

import company from '../company/company'
import search-bar from '../search-bar/search-bar'

export default {
  components: {
    search-bar,
    company
  },
  data () {
    return {
      range: 5,
      companies: [
        {id: 0, name: 'mercedes', category: 'cars'},
        {id: 1, name: 'zalando', category: 'clothes'},
        {id: 2, name: 'BMW', category: 'cars'}
      ]
    }
  },
  methods: {
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

