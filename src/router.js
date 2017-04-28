import Index from './components/Index.vue'
import Cart from './components/Cart.vue'

export default{
  routes: [
        { path: '/', component: Index },
        { path: '/index', component: Index },
        { path: '/cart', component: Cart }
  ]
}
