import { createRouter, createWebHistory } from 'vue-router';

import CreateHistory from '@/pages/CreateHistory.vue';
import Home from '@/pages/Home.vue';
import Summary from '@/pages/Summary.vue';
import EditHistory from '@/pages/EditHistory.vue';
import HistoryList from '@/pages/HistoryList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/summary', name: 'Summary', component: Summary },
    {
      path: '/history',
      name: 'History',
      component: HistoryList,
    },
    { path: '/history/add', name: 'CreateHistory', component: CreateHistory },
    { path: '/history/edit/:id', name: 'EditHistory', component: EditHistory },
  ],
});

export default router;
