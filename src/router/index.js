import { createWebHistory, createRouter } from "vue-router";
import FrequencySelector from "../views/FrequencySelector.vue";
import RankMaintenance from "../views/RankMaintenance.vue";
const routes = [
  {
    path: "/",
    redirect: "/frequency-selector",
  },
  {
    path: "/frequency-selector",
    name: "FrequencySelector",
    component: FrequencySelector,
  },
  {
    path: "/rank-maintenance",
    name: "RankMaintenance",
    component: RankMaintenance,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
