import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'



Vue.use(Router)

Vue.config.productionTip = false

const routes = [
  {
    path:'/',
    name: 'home',
    component: Home
  },
  {
    path:'/login',
    name: 'login',
    component: Login
  }
];

const router = new Router({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
