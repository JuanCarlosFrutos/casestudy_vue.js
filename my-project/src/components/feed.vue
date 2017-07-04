<template>
  <div><company></company></div>
</template>

<script>
import company from '@/components/company'
export default {
  components: {
    'company': company
  },
  name: 'feed',
  data () {
    return {
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
