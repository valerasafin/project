import { createRouter, createWebHistory } from "vue-router";
import Modify from "../views/Modify.vue";
import Create from "../views/Create.vue";
import Edit from "../views/Edit.vue";
import Home from "../views/Home.vue";
import Contacts from "../views/Contacts.vue";
import Services from "../views/Services.vue";

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Modify",
    path: "/Modify",
    component: Modify,
  },
  {
    name: "Edit",
    path: "/edit/:id",
    component: Edit,
  },
  {
    name: "Create",
    path: "/create",
    component: Create,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    name: "Contacts",
    path: "/Contacts",
    component: Contacts,
  },
  {
    name: "Services",
    path: "/Services",
    component: Services,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
