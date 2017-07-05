<template>
  <div id=company>
    <label>Key:</label><input :value=name type="text" name="fname">
    <label>Value:</label><input type="text" name="lname">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type:String,
      required: true 
    }
  },
  name: 'keyValue',
  data () {
    return {
      counter: 0,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#company{
  background-color: red;
  border: solid;
}
</style>
