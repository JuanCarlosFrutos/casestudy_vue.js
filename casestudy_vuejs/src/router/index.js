import Vue from 'vue'
import Router from 'vue-router'
import searchForm from '@/components/search-form/search-form'
import addForm from '@/components/add-form/add-form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/search',
      name: 'Search',
      component: searchForm
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
