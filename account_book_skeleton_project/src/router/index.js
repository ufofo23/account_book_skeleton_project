import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/index', name: 'home', component: Home },
    { path: '/summary', name: 'summary', component: Summary },
    {
      path: '/history',
      name: 'history',
      component: HistoryList,
    },
    { path: 'history/add', name: 'history/add', component: CreateHistory },
    { path: 'history/edit/:id', name: 'history/edit', component: EditHistory },
  ],
});

export default router;
