<template>
  <div>

    <ol>
      <company-search></company-search>
    </ol>
    <button>Add</button>
  </div>
</template>

<script>
import companySearch from '@/components/companySearch'
export default {
  components: {
    'companySearch': companySearch
  },
  name: 'feed',
  data () {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ],
      msg: 'Hola'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
