import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CartView from '@/views/CartView.vue';
import CategoryView from '@/views/CategoryView.vue';
import ProductView from '@/views/ProductView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView,
    },
    {
      path: '/category/:categoryId',
      name: 'category',
      component: CategoryView,
    },
    {
      path: '/product/:productId',
      name: 'product',
      component: ProductView,
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
