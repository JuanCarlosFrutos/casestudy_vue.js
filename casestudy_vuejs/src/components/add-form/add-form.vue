@Component({
  </q><template src="./add-form.html"></template>
})

<script>

import {Vue} from 'av-ts'

/*
 * Form to add information about the compay or create new company.
 */

export default class App extends Vue {

  // Data property
  range = 0

    // Lifecycle hook
  mounted () {
  }

    /*
     * the method add new key-value input to the company.
     */

  addKeyValue () {
    this.range += 1
  }

}

</script>


<style src="./add-form.scss"></style>

