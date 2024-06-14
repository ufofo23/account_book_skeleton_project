import { createRouter, createWebHistory } from "vue-router";

<<<<<<< HEAD
import CreateHistory from "@/pages/CreateHistory.vue";
import Home from "@/pages/Home.vue";
import Summary from "@/pages/Summary.vue";
import EditHistory from "@/pages/EditHistory.vue";
import HistoryList from "@/pages/HistoryList.vue";
=======
import CreateHistory from '@/pages/CreateHistory.vue';
import Home from '@/pages/Home.vue';
import Summary from '@/pages/Summary.vue';
import EditHistory from '@/pages/EditHistory.vue';
import HistoryList from '@/pages/HistoryList.vue';
>>>>>>> 0f992555a91406eff03046fba034e2b2ad4c491b

const router = createRouter({
  history: createWebHistory(),
  routes: [
<<<<<<< HEAD
    { path: "/", name: "Home", component: Home },
    { path: "/summary", name: "Summary", component: Summary },
    { path: "/", name: "Home", component: Home },
    { path: "/summary", name: "Summary", component: Summary },
    {
      path: "/history",
      name: "History",
      name: "History",
      component: HistoryList,
    },
    { path: "/history/add", name: "CreateHistory", component: CreateHistory },
    { path: "/history/edit/:id", name: "EditHistory", component: EditHistory },
=======
    { path: '/', name: 'Home', component: Home },
    { path: '/summary', name: 'Summary', component: Summary },
    {
      path: '/history',
      name: 'History',
      component: HistoryList,
    },
    { path: '/history/add', name: 'CreateHistory', component: CreateHistory },
    { path: '/history/edit/:id', name: 'CditHistory', component: EditHistory },
>>>>>>> 0f992555a91406eff03046fba034e2b2ad4c491b
  ],
});

export default router;
