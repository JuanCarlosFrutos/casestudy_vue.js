<template>
  <div id="app">
<!--     <img src="./assets/logo.png"> -->
    <top></top>
<!--     <router-view></router-view> -->
    <feed></feed>
  </div>
</template>

<script>
  import company from './components/company'
  import top from './components/top'
  import feed from './components/feed'
  export default {
    components: {
      'company': company,
      'top': top,
      'feed': feed
    },
    name: 'app'
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
