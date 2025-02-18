import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '../views/ProductsView.vue'
import FavoritesView from '../views/FavoritesView.vue'
import CartView from '../views/CartView.vue'
import CheckOutView from '../views/CheckOutView.vue'
import ProductDetails from '../components/ProductDetails.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductsView
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: FavoritesView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOutView
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: ProductDetails,
    props: (route) => ({
      product: JSON.parse(route.query.product),
    }),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
