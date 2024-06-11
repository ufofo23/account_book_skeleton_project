<template lang="">
  <div></div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
import { useHistoryStore } from '@/stores/historyList.js';

const router = useRouter();
const { createHistory } = useHistoryListStore();

const reateHistoryHandler = () => {};
</script>
<style></style>
