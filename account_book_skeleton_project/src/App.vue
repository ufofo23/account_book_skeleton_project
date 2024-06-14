<template>
  <div>
    <Header />
    <RouterView />
    <!-- <div style="margin-top: 120px">회원 : {{ memberList }}</div>
    <hr />
    <div style="margin-top: 20px">전체 내역 : {{ historyList }}</div>
    <hr />
    <div style="margin-top: 20px">정기 : {{ periodicExpenseList }}</div>
    <hr />
    <div style="margin-top: 20px">수입 내역 : {{ historyIncome }}</div>
    <hr />
    <div style="margin-top: 20px">expense : {{ historyExpense }}</div>
    <hr />
    <div style="margin-top: 20px">카테고리(식비) : {{ search }}</div>
    <hr />
    <div style="margin-top: 20px">오늘 날짜 : {{ dateString }}</div>
    <hr />
    <div style="margin-top: 20px">금일 내역 : {{ todayHistory }}</div>
    <hr />
    <div style="margin-top: 20px">금월 내역 : {{ thisMonthHistory }}</div>
    <hr />
    <div style="margin-top: 20px">금주 내역 : {{ thisWeekHistory }}</div>
    <hr />
    <div style="margin-top: 20px">카테고리 목록 : {{ expenseOrder }}</div>
    <div style="margin-top: 20px">금월 내역 : {{ thisMonthHistory }}</div> -->
  </div>
</template>
<script setup>
import { computed } from 'vue';
import Header from '@/components/Header.vue';
import { useHistoryListStore } from './stores/counter';
const historyListStore = useHistoryListStore();

// const { getMonthList } = historyListStore;
// const historyListStore = useHistoryListStore();
// console.log(getMonthList(202406));
// const { getSearchList } = historyListStore;
// const search = getSearchList('식비');

// const { getMonthList } = historyListStore;
// const historyListStore = useHistoryListStore();
// console.log(getMonthList(202406));
// const { getSearchList } = historyListStore;
// const search = getSearchList('식비');

// const today = new Date();
// const today = new Date();

// const year = today.getFullYear();
// const month = ('0' + (today.getMonth() + 1)).slice(-2);
// const day = ('0' + today.getDate()).slice(-2);
// const year = today.getFullYear();
// const month = ('0' + (today.getMonth() + 1)).slice(-2);
// const day = ('0' + today.getDate()).slice(-2);

// const dateString = year + month + day;
// const dateString = year + month + day;

// const memberList = computed(() => historyListStore.memberList);
// const historyList = computed(() => historyListStore.historyList);
// const periodicExpenseList = computed(
//   () => historyListStore.periodicExpenseList
// );
// const historyIncome = computed(() => historyListStore.historyIncome);
// const historyExpense = computed(() => historyListStore.historyExpense);
// const todayHistory = computed(() => historyListStore.todayHistory);
// const thisMonthHistory = computed(() => historyListStore.thisMonthHistory);
// const thisWeekHistory = computed(() => historyListStore.thisWeekHistory);
// const expenseOrder = computed(() => historyListStore.expenseOrder);
// const memberList = computed(() => historyListStore.memberList);
// const historyList = computed(() => historyListStore.historyList);
// const periodicExpenseList = computed(
//   () => historyListStore.periodicExpenseList
// );
// const historyIncome = computed(() => historyListStore.historyIncome);
// const historyExpense = computed(() => historyListStore.historyExpense);
// const todayHistory = computed(() => historyListStore.todayHistory);
// const thisMonthHistory = computed(() => historyListStore.thisMonthHistory);
</script>
<style></style>
