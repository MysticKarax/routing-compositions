import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

// AQUI SE CREAN LAS RUTAS
const routes = [
  { path: "/", name: "Home", component: Home },

  // ROUTE PARAMS WITH ROUTER
  {
    // FIMXE: BORRE destination/:id/ PARA SOLO LEER SLUG, QUE ES EL NOMBRE DE LA PAGINA ACTUAL.
    // EN DestinationShow.vue y ExperienceCard.vue DEJE DE RECIBIR E INTENTAR LEER EL ID DE LA URL.
    path: "/destinations/:id",
    name: "destination.show",
    // LAZY LOADING
    component: () => import("@/views/DestinationShow.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

// FIXME: ESTA MANERA SOLO CREA EL ASSET INDEX.JS E INDEX.CSS

// import Brazil from "@/views/Brazil.vue";
// import Hawaii from "@/views/Hawaii.vue";
// import Jamaica from "@/views/Jamaica.vue";
// import Panama from "@/views/Panama.vue";

// const routes = [
//   { path: "/", name: "Home", component: Home },
//   { path: "/about", name: "About", component: About },
//   { path: "/brazil", name: "brazil", component: Brazil },
//   { path: "/hawaii", name: "hawaii", component: Hawaii },
//   { path: "/jamaica", name: "jamaica", component: Jamaica },
//   { path: "/panama", name: "panama", component: Panama },
// ];
