import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/mandate" },
  {
    path: "/mandate",
    name: "Mandate",
    component: () => import("@/views/Mandate.vue"),
  },
  {
    path: "/account",
    name: "Account",
    component: () => import("@/views/Account.vue"),
  },
  {
    path: "/board",
    name: "Board",
    component: () => import("@/views/Board.vue"),
  },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHistory(),
  routes, // `routes: routes` 的缩写
});

export default router;
