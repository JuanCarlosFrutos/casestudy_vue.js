<template>
  <div>
      <key-value><button>Edit</button></key-value>
  </div>
</template>

<script>
import keyValue from './keyValue.vue'
export default {
  component: {
    keyValue
  },
  name: 'feed'
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
