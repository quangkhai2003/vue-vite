import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CardDetail from "../components/CardDetail.vue"
import CartProduct from "../components/CartProduct.vue"
import CheckOut from "../components/CheckOut.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
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
  ],
});

export default router;
