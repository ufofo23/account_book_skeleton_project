<template>
  <li class="list-group-item">
    <span class="fw-bold">거래처</span> {{}}
    <span class="fw-bold">카테고리</span> {{}}
    <span class="fw-bold">금액</span> {{}}
    <span class="fw-bold">메모</span> {{}}

    <span class="float-end badge bg-secondary pointer m-1"> 수정 </span>

    <span class="float-end badge bg-secondary pointer m-1" @click="">
      삭제</span
    >
  </li>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject } from 'vue';

defineProps({
  historyList: { Type: Object, required: true },
});

const router = useRouter();
// const { deleteHistory } = inject("actions");
</script>
