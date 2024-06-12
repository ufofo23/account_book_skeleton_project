<template lang="">
  <Header />
  <div class="container" style="top: 100px">
    <div>
      <span>수입: {{ budget.monthIncome }}</span>
      <span>지출: {{ budget.monthExpense }}</span>
      <span>순수익: {{ budget.netIncome }}</span>
    </div>
    <div class="topContainer"></div>
    <div v-for="(History, index) in topItems" :key="index" class="HistoryList">
        <h4>{{ History.HistoryList }}</h4>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { reactive } from "vue";
import { useHistoryStore } from "@/stores/historyList.js";
import {} from "vue-char.js";

const router = useRouter();
const { createHistory } = useHistoryListStore();

const createHistoryHandler = () => {};
</script>
<style></style>
