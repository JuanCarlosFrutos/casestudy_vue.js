import Vue from 'vue'
import Router from 'vue-router'
import Search from '@/components/Search'
import addForm from '@/components/addForm/addForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/new',
      name: 'Add',
      component: addForm
    },
    {
      path: '/edit/:id',
      props: true,
      component: addForm
    }
  ]
})
