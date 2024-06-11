<template>
  <li class="list-group-item">
    <div><span class="fw-bold">거래처</span> {{ historyList.merchant }}</div>
    <div><span class="fw-bold">카테고리</span> {{ historyList.category }}</div>
    <div><span class="fw-bold">금액</span> ₩{{ historyList.amount }}</div>
    <div><span class="fw-bold">메모:</span> {{ historyList.memo }}</div>

    <span
      class="float-end badge bg-secondary pointer m-1"
      @click="router.push(`/transactions/edit/${historyList.id}`)"
    >
      수정
    </span>

    <span
      class="float-end badge bg-secondary pointer m-1"
      @click="deleteHistory(historyList.id)"
    >
      삭제</span
    >
  </li>
</template>

<script setup>
import { useRouter } from "vue-router";
import { inject } from "vue";

defineProps({
  historyList: { Type: Object, required: true },
});

const router = useRouter();
const { deleteHistory } = inject("actions");
</script>
