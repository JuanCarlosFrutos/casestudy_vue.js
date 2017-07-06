import Vue from 'vue'
import Router from 'vue-router'
import search-form from '@/components/Search'
import add-form from '@/components/addForm/addForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: search-form
    },
    {
      path: '/new',
      name: 'Add',
      component: add-form
    },
    {
      path: '/edit/:id',
      props: true,
      component: add-form
    }
  ]
})
