import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import QuotesView from "../views/QuotesView.vue";
import AboutView from "../views/AboutView.vue";

const routes = [
  {
    path: "/HomeView",
    name: "home",
    component: HomeView,
  },
  {
    path: "/AboutView",
    name: "about",
    component: AboutView,
  },
  {
    path: "/ContactView",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/QuotesView",
    name: "quotes",
    component: QuotesView,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "Not Found",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,

  linkActiveClass: "active-link",
});

export default router;
