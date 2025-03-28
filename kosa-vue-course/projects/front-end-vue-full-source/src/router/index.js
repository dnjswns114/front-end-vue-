import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Ch02ComponentRouting from './Ch02ComponentRouting';
import Ch03DataBinding from "./Ch03DataBinding";
import Ch04EventHandlingWatch from "./Ch04EventHandlingWatch";
import Ch05DataDelivery from "./Ch05DataDelivery";
import Ch06LifecycleHook from "./Ch06LifecycleHook";
import Ch07GlobalState from "./Ch07GlobalState";
import Ch08RestAPI from "./Ch08RestAPI";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  ...Ch02ComponentRouting,
  ...Ch03DataBinding,
  ...Ch04EventHandlingWatch,
  ...Ch05DataDelivery,
  ...Ch06LifecycleHook,
  ...Ch07GlobalState,
  ...Ch08RestAPI
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
