import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardDetail from "../components/CardDetail.vue"
import CartProduct from "../components/CartProduct.vue"
import CheckOut from "../components/CheckOut.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:id",
      name: "CardDetail",
      component: CardDetail,
    },
    {
      path: "/cart",
      name: "CartProduct",
      component: CartProduct,
    },
    {
      path: "/checkout",
      name: "CheckOut",
      component: CheckOut,
    },
    {
      path: '/',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
  ],
});

export default router;
