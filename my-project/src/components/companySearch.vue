<template>
  <div id=SearchResultItem>
    <h1>Key:</h1>
    <label>Key 1</label>
    <h1>Value:</h1>
    <label>{{counter}}</label>
    <button v-on:click="counter += 1">Edit</button>
  </div>
</template>

<script>
export default {
  name: 'companySearch',
  data () {
    return {
      counter: 0
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  display: inline;
}

label{
  display: inline;
}
</style>

