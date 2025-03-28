const routes = [
  {
    path: "/Ch07GlobalState/Exam01RootState",
    component: () => import(/* webpackChunkName: "Ch07GlobalState" */ '@/views/Ch07GlobalState/Exam01RootState.vue')
  },
  {
    path: "/Ch07GlobalState/Exam02CounterState",
    component: () => import(/* webpackChunkName: "Ch07GlobalState" */ '@/views/Ch07GlobalState/Exam02CounterState.vue')
  }
];

export default routes;