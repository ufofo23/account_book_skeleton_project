import { createRouter, createWebHistory } from 'vue-router';

import CreateHistory from '@/pages/CreateHistory.vue';
import Home from '@/pages/Home.vue';
import Summary from '@/pages/Summary.vue';
import EditHistory from '@/pages/EditHistory.vue';
import HistoryList from '@/pages/HistoryList.vue';

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
    { path: '/history/add', name: 'createHistory', component: CreateHistory },
    { path: '/history/edit/:id', name: 'editHistory', component: EditHistory },
  ],
});

export default router;
