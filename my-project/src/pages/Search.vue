<template>
  <main-layout>
    <top></top>
    
    <div v-for="n in range">
      <key-value>
        <button>Edit</button>
      </key-value>
    </div>

    <v-link href="/add">Add</v-link>
  </main-layout>
</template>

<script>
import keyValue from '../components/keyValue.vue'
import MainLayout from '../layouts/Main.vue'
import top from '../components/top.vue'
import feed from '../components/feed.vue'
import VLink from '../components/VLink.vue'

export default {
  components: {
    top,
    feed,
    MainLayout,
    VLink,
    keyValue
  },
  data () {
    return {
      range: 5
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

