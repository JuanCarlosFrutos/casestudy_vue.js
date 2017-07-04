<template>
    <form method=GET action="http://www.google.es/search">
    <fieldset>
        <input type=hidden name=ie value=UTF-8 />
        <input type=hidden name=oe value=UTF-8 />
                        
        <input type=text id="s" name="q" value="" size="50" />
        <font size=-1>
                        
        <input type=hidden name=domains value="http://www.uterra.com" /><br>
                        
        <INPUT type=submit  id="x" name=btnG VALUE="Buscar" />
        </font>
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
