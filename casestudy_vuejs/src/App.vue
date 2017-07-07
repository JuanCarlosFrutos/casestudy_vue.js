<template>
	  <div id="app">
	    <router-view></router-view>
	  </div>
	</template>
<script>
	// import dependency
	import {Vue, Component} from 'av-ts'
	// decorat vue class
	@Component
	export default class App extends Vue {
	  // undecorated property will be packed in `data` option
	  name = 'world'
	  // undecorated method is just method
	  hello () {
	    alert('hello ' + this.name)
	  }
	}
</script>

<style>
	body {
	  border: solid;
	  width: 75%;
	  margin: auto;
	  padding: 10px;
	  font-family: sans-serif;
	}
</style>
