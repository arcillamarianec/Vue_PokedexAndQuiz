import { createRouter, createWebHistory } from "vue-router";
import Oak from "@/components/Oak.vue";
import Pokedex from "../src/components/pokedex/MainBack.vue";
import Backpack from "@/components/backpackHome/MainBack.vue";

const Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Oak",
      component: Oak,
    },
    {
      path: "/backpack/pokedex",
      name: "Pokedex",
      component: Pokedex,
    },
    {
      path: "/backpack",
      name: "Backpack",
      component: Backpack,
    },
  ],
});
export default Router;
