<template lang="">
  <!-- <Header />
  <div class="container" style="top: 100px">
    <div>
      <!-- <span>수입: {{ budget.monthIncome }}</span>
      <span>지출: {{ budget.monthExpense }}</span>
      <span>순수익: {{ budget.netIncome }}</span> -->
    </div>
    <div class="chart-wrapper">
      <canvas id="chartCanvas"></canvas>
    </div>
    <div class="topContainer"></div>
    <div v-for="(History, index) in topItems" :key="index" class="HistoryList">
<<<<<<< HEAD
      <h4>{{ History.HistoryList }}</h4>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { reactive } from "vue";
// import { useHistoryStore } from "@/stores/historyList.js";

// const { createHistory } = useHistoryListStore();
const router = useRoute();

const createHistoryHandler = () => {};

import { onMounted } from "vue";
import { Chart } from "chart.js/auto";
import dbData from "/db.json";

//html 요소를 찾아서 처리해야 하므로, onMounted에 올려서 사용해야 함
onMounted(() => {
  //카테고리 별로 라벨링
  //amount를 차트 값으로 설정
  const labels = dbData.budget.map((item) => item.category);
  const values = dbData.budget.map((item) => Math.abs(item.amount));

  console.log(labels);
  console.log(values);

  const chartElement = document.querySelector("#chartCanvas").getContext("2d");
  const chartCanvas = new Chart(chartElement, {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          data: values,
          backgroundColor: [
            "#1E90FF",
            "#FFD700",
            "#32CD32",
            "#FF4500",
            "#6A5ACD",
          ],
          hoverOffset: 4,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: "월간 사용 금액",
          font: {
            size: 20,
          },
        },
        legend: {
          display: true,
          position: "bottom",
          labels: {
            font: {
              size: 15,
            },
          },
        },
      },
      responsive: true,
      maintainAspectRatio: false,
    },
  });
});
=======
        <h4>{{ History.HistoryList }}</h4>
  </div> -->
</template>
<script setup>
// import { useRoute } from 'vue-router';
// import { reactive } from 'vue';
// import { useHistoryStore } from '@/stores/historyList.js';
// import {} from 'vue-char.js';

// const { createHistory } = useHistoryListStore();
// import { useRoute } from 'vue-router';
// import { reactive } from 'vue';
// const router = useRoute();

// const createHistoryHandler = () => {};
>>>>>>> 0f992555a91406eff03046fba034e2b2ad4c491b
</script>
<style scoped>
.chart-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 557px;
  height: 370px;

  padding: 0 10px;
}

canvas {
  border: 1px solid black;
  width: 330px;
  height: 330px;
}
</style>
