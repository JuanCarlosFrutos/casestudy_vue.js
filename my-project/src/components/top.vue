<template>
    <form method=GET action="">
    <fieldset>       
        <input type=text id="s" name="q" value="" size="50" />                             
        <input type=submit  id="x" name=btnG value="Go!" />
    </fieldset>
    </form> 
</template>

<script>
  export default {
    name: 'top',
    data () {
      return {
        msg: 'Header'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
