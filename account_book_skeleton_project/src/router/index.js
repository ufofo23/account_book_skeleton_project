import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/index', name: 'home', component: Home },
    { path: '/summary', name: 'summary', component: Summary },
    {
      path: '/history',
      name: 'history',
      component: historyList,
      children: [
        { path: '/add', name: 'history/add', component: createHistory },
        { path: '/edit', name: 'history/edit', component: editHistory },
      ],
    },
  ],
});

export default router;
