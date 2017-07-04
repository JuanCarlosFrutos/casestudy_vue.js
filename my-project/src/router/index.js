import Vue from 'vue'
import Router from 'vue-router'
import addForm from '@/components/addForm'

Vue.use(Router)

export default new Router({
  routes: [
{path: '/addForm', component: addForm}
  ]
})
