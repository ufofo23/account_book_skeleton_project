<!--기존 데이터 받아올 수 있도록 수정-->
<template>
  <div class="container" style="margin-top: 150px">
    <div class="row">
      <div class="col p-3">
        <h1>내역 수정</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="form-group">
          <label for="name">거래처</label>
          <input
            type="text"
            class="form-control"
            id="name"
            :placeholder="name"
          />
        </div>
        <div class="form-group">
          <label for="amount">금액</label>
          <input
            type="text"
            class="form-control"
            id="amount"
            :placeholder="amount"
          />
        </div>
        <div class="form-group">
          <label for="date" class="me-3 d-inline-block">날짜</label>
          <button type="button" class="btn btn-outline-warning btn-sm">
            <!--click이벤트 추가 필요-->
            고정지출
          </button>
          <input type="date" class="form-control" id="date" />
          <!--v-model="date" 추가 필요-->
        </div>
        <div class="form-group">
          <label for="category">카테고리</label>
          <select
            name="category"
            class="form-control"
            id="category"
            style="width: 200px"
            v-model="history.category"
            :value="hi"
          >
            <option
              v-if="parseInt(history.amount) >= 0"
              v-for="cat in incomeCategory"
              :value="cat"
            >
              {{ cat }}
            </option>
            <option v-else v-for="cat in expenseCategory" :value="cat">
              {{ cat }}
            </option>
          </select>
        </div>
        <div class="form-group d-flex justify-content-center">
          <!--click이벤트 추가 필요-->
          <button type="button" class="btn btn-primary mx-4 my-3">추 가</button>
          <button type="button" class="btn btn-secondary mx-4 my-3">
            취 소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHistoryListStore } from '@/stores/counter';
import { reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const currentRoute = useRoute();

const incomeCategory = [
  '카테고리를 선택하세요',
  '월급',
  '용돈',
  '성과금',
  '환급금',
  '더치페이',
  '기타',
];

// 출금 카테고리 배열
const expenseCategory = [
  '카테고리를 선택하세요',
  '식비',
  '교통비',
  '공과금',
  '유흥',
  '문화',
  '생활',
  '저축',
  '투자',
  '기타',
];

// store에서 가져오기(객체)
const historyListStore = useHistoryListStore();

// 분할할당으로 변수 넘겨주기
const { getHistoryById } = historyListStore;

// id 값으로 편집할 History 가져오기
const findHistory = getHistoryById(currentRoute.params.id);

const history = reactive({
  id: findHistory[0].id,
  name: findHistory[0].name,
  amount: findHistory[0].amount,
  date: findHistory[0].date,
  category: findHistory[0].catogory,
  purchaseMethod: findHistory[0].purchaseMethod,
  isPeriodic: findHistory[0].isPeriodic,
  memo: findHistory[0].memo,
});
</script>
<style>
.form-group {
  margin: 20px auto;
}
label {
  margin-bottom: 10px;
}
</style>
