// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VRouter from 'vue-router'
import vueResource from 'vue-resource'
import Index from './pages/index'
import products from './pages/products'
import detail from './pages/detail'
import Layout from './components/layout'
import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.config.productionTip = false
Vue.use(VRouter)
Vue.use(vueResource)
Vue.use(VueAwesomeSwiper)

let router = new VRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: Index
		},
		{
			path: '/products',
			component: products
		},
		{
			path: '/detail',
			component: detail
		}
	]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
