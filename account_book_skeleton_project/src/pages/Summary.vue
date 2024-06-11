<template lang="">
  <Header />
  <div class="container" style="top: 100px">
    <div>
      <span>수입: {{ budget.monthIncome }}</span>
      <span>지출: {{ budget.monthExpense }}</span>
      <span>순수익: {{ budget.netIncome }}</span>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
const router = useRouter();
const { createHistory } = useHistoryListStore();

const createHistoryHandler = () => {};
</script>
<style></style>
