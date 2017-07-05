<template>
  <main-layout>
    <top></top>
    <label>Search Results: {{companies.length}}</label>
    <div v-for="n in companies">
      <company :company=n>
        <v-link href="/add">Edit</v-link>
      </company>
    </div>
<!--     <p> {{names}} </p> -->
    <v-link href="/add">New company</v-link>
    <button v-on:click="add">Test add</button>
  </main-layout>
</template>

<script>
import company from '../components/company.vue'
import MainLayout from '../layouts/Main.vue'
import top from '../components/top.vue'
import feed from '../components/feed.vue'
import VLink from '../components/VLink.vue'

export default {
  components: {
    top,
    feed,
    MainLayout,
    VLink,
    company
  },
  data () {
    return {
      range: 5,
      companies: [
        {name: "mercedes", category: "cars"},
        {name: "zalando" , category: "clothes"},
        {name: "BMW" , category: "cars"}
      ]
    }
  },
  methods: {
    add: function(){
      //Vue.set(companies, name, "Z3");
      //this.$set(this.names[1], "apellido" , "Undefined");
      this.companies.push ({name: "XXXX"});
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

