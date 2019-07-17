import Vue from 'vue'
import Router from 'vue-router'
import Mine from "../components/chw/mine/mine.vue"
import Mywallet from "../components/chw/mine/my_wallet.vue"
import Myorder from "../components/chw/mine/my_order.vue"
import Paysuccess from "../components/chw/paysuccess/pay_success.vue"
import StoreDetails from "../components/myt/StoreDetails/StoreDetails.vue"
import CarDetails from "../components/myt/carDetails/carDetails.vue"
import Pcomments from './../components/DMH/Pcomments/comments'
import Evaluation from './../components/DMH/Evaluation/Evaluation'
import Recharge from './../components/DMH/Recharge/Recharge'
import Choice from './../components/DMH/UrbanChoice/Choice'
import Start from '../components/zzy/start/start'
import intro from '../components/zzy/start/intro'
import Shop from '../components/zzy/shop/shop'
import Login from './../components/swh/login/login'
import Registered from './../components/swh/registered/registered'


Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path:'/',
      redirect:'/login'
=======
      path: '/paysuccess',
      name: 'Paysuccess',
      component: Paysuccess,
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine,
    },
    {
      path: '/my_wallet',
      name: 'Mywallet',
      component: Mywallet,
    },
    {
      path: '/my_order',
      name: 'Myorder',
      component: Myorder,
    },
    {
      path: '/paysuccess',
      name: 'Paysuccess',
      component: Paysuccess,
    },
    {
      path: '/StoreDetails',
      name: 'StoreDetails',
      component:StoreDetails
    },
    {
      path:"/carDetails",
      name:"CarDetails",
      component:CarDetails
>>>>>>> 4a47dd152cf5140a41327d79ce9b85e34564e464
    },
    {
      path: '/comments',
      name: 'Pcomments',
      component: Pcomments
    },
    {
      path:'/evaluation',
      name: 'Evaluation',
      component:Evaluation
    },
    {
      path:'/recharge',
      name:'Recharge',
      component:Recharge
    },
    {
      path:'/choice',
      name:'Choice',
      component:Choice
    },
    {
      path: '/intro',
      name: 'intro',
      component: intro
    },
    {
      path: '/shop',
      name: 'shop',
      component: Shop
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/registered',
      name: 'Registered',
      component: Registered
    },
    {
      path: '/start',
      name: 'start',
      component: Start
    },
    
  ]
})
