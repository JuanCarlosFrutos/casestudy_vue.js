<template>
  <div>
	  <div>
	      <div v-for="n in range">
	        <key-value></key-value>
	      </div>

	    <button id="plusbutton" v-on:click="addKeyValue">+</button>
	    <router-link id="savebutton" to="/search"><button>Save</button></router-link>
	    <router-link id="closebutton" to="/search"><button id="pulsa">Close</button></router-link>
	  </div>
  </div>
</template>

<script>
import keyValue from './keyValue.vue'

export default {
  components: {
    keyValue
  },
  name: 'addForm',
  data () {
    return {
      range: 0
    }
  },
  methods: {
    addKeyValue: function () {
      this.range += 1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
