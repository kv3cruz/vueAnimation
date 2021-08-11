import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
   mode: 'history',
   base: process.env.BASE_URL,
   routes: [
      {
         path: '/',
         name: 'home',
         component: Home
      },
      {
         path: '/about',
         name: 'about',
         component: () =>
            import(/* webpackChunkName: "about" */ './views/About.vue')
      },
      {
         path: '/list',
         name: 'list',
         component: () =>
            import(/* webpackChunkName: "list" */ './views/List.vue')
      },
      {
         path: '/drawer',
         name: 'drawer',
         component: () =>
            import(/* webpackChunkName: "Drawer" */ './views/Drawer.vue')
      },
      {
         path: '/simple',
         name: 'simple',
         component: () =>
            import(/* webpackChunkName: "Simple" */ './views/Simple.vue')
      },
      {
         path: '/stagger',
         name: 'stagger',
         component: () =>
            import(/* webpackChunkName: "Stagger" */ './views/Stagger.vue')
      }
   ]
})
