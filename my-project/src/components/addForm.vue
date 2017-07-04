<template>
  <div>
      <div v-for="n in range">
        <keyValue></keyValue>
      </div>

      <button v-on:click="addKeyValue">+</button>

    <button>Save</button>
    <button v-on:click="close">Close</button>
  </div>
</template>

<script>
import keyValue from '@/components/keyValue'

export default {
  components: {
    'keyValue': keyValue
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

