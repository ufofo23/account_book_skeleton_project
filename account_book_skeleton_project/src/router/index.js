import { createRouter, createWebHistory } from 'vue-router';

import CreateHistory from '@/pages/createHistory.vue';
import Home from '@/pages/Home.vue';
import Summary from '@/pages/Summary.vue';
import EditHistory from '@/pages/editHistory.vue';
import HistoryList from '@/pages/historyList.vue';

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
