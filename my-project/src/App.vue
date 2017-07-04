<template>
  <div id="app">
    <top></top>
    <feed></feed>
    <router-view class="view"></router-view>
<!--   <addForm></addForm> -->
  </div>
</template>

<script>
  import companySearch from './components/companySearch'
  import top from './components/top'
  import feed from './components/feed'
  import addForm from './components/addForm'

  export default {
    components: {
      'company-search': companySearch,
      'top': top,
      'feed': feed,
      'addForm': addForm
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
