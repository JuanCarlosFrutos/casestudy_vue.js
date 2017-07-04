<template>
  <main-layout>
	  <div>
	      <div v-for="n in range">
	        <key-value key="test"></key-value>
	      </div>

	      <button v-on:click="addKeyValue">+</button>

	    <button>Save</button>
	    <v-link href="/search">Close</v-link>
	  </div>
  </main-layout>
</template>

<script>
import keyValue from '../components/keyValue.vue'
import MainLayout from '../layouts/Main.vue'
import VLink from '../components/VLink.vue'

export default {
  components: {
    keyValue,
    MainLayout,
    VLink
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


