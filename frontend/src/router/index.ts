import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import PingView from '../views/PingView.vue';

const routes = [
    { path: '/', component: HomeView},
    {path: '/ping', component: PingView}
];

export default createRouter({
  history: createWebHistory(),
  routes
});
