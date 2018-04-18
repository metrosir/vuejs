import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'

Vue.use(Router)

const routes = [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/Login',
    	name: 'Login',
    	component: Login
    }
  ]

 // const router = new VueRouter ({
 // 	routes: routes
 // })

 // const app = new Vue ({
 // 	router
 // }).$mount("#app");

// export default {
// 	computed: {
// 		username() {
// 			return this.$route.params.username
// 		}
// 	},
// 	methods: {
// 		goBack() {
// 			window.history.length > 1
//         	? this.$router.go(-1)
//         	: this.$router.push('/')
// 		}
// 	}
// }

export default new Router({
  routes : routes
})
