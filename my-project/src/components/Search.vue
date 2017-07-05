<template>
  <div>
    <top></top>
    <label>Search Results: {{companies.length}}</label>
    <div v-for="n in companies">
      <company :company=n>
        <button v-on:click="edit(n)">Edit</button>
      </company>
    </div>
     <router-link to="/new"><button id=addbutton v-on:click="add">Add</button></router-link>
  </div>
</template>

<script>
import company from './company.vue'
import top from './top.vue'

export default {
  components: {
    top,
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

