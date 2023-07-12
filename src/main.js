import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue'
import ProductList from './components/ProductList.vue'
import ProductDetail from './components/ProductDetail.vue'
import ShoppingChart from './components/ShoppingChart.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
         { path: '/products/', component: ProductList },
         { path: '/products/productDetail/:productId', component: ProductDetail, props: true },
         { path: '/shoppingChart', component : ShoppingChart }
    ],
    linkActiveClass: 'active'
  });
  
  const app = createApp(App);
  
  app.use(router);
  
  app.mount('#app');