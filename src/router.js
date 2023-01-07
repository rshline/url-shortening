import { createWebHistory, createRouter } from "vue-router";

const routes =  [
    {
      path: "/",
      alias: "/home",
      name: "LandingPage",
      component: () => import("./pages/LandingPage")
    }
  ];
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;