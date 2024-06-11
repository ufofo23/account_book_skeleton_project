<template>
  <div>
    <ul>
      <History
        v-for="History in HistoryList"
        :key="History.id"
        :history="History"
      />
    </ul>
    {{ historyList.category }}
    &nbsp;
  </div>
</template>

<script setup>
import History from "";

data();
return {
  HistoryList: [
    {
      id: 1,
      accountName: "",
      date: "요일",
      purchaseMethod: "구매수단",
      category: "",
      amount: "",
      memo: "",
    },
    {
      id: 2,
      accountName: "",
      date: "요일",
      purchaseMethod: "구매수단",
      category: "",
      amount: "",
      memo: "",
    },
    {
      id: 3,
      accountName: "",
      date: "요일",
      purchaseMethod: "구매수단",
      category: "",
      amount: "",
      memo: "",
    },
    {
      id: 4,
      accountName: "",
      date: "요일",
      purchaseMethod: "구매수단",
      category: "",
      amount: "",
      memo: "",
    },
    {
      id: 5,
      accountName: "",
      date: "요일",
      purchaseMethod: "구매수단",
      category: "",
      amount: "",
      memo: "",
    },
  ],
  methods: {
    on,
  },
};
</script>

<style lang="scss" scoped></style>
