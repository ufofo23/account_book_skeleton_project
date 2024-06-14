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
            :placeholder="findHistory[0]['name']"
            v-model="history.name"
          />
        </div>
        <div class="form-group">
          <label for="amount" class="me-3 d-inline-block">금액</label>
          <button
            type="button"
            class="btn btn-outline-warning btn-sm"
            v-if="findHistory[0]['purchaseMethod'] === 'card'"
            @click="() => (findHistory[0]['purchaseMethod'] = 'cash')"
          >
            카드
          </button>
          <button
            type="button"
            class="btn btn-warning btn-sm"
            v-else
            @click="() => (findHistory[0]['purchaseMethod'] = 'card')"
          >
            현금
          </button>
          <input
            type="text"
            class="form-control"
            id="amount"
            :placeholder="findHistory[0]['amount']"
            v-model.number="history.amount"
          />
        </div>
        <div class="form-group">
          <label for="date" class="me-3 d-inline-block">날짜</label>
          <button
            type="button"
            class="btn btn-outline-warning btn-sm"
            v-if="history.isPeriodic === 'false'"
            @click="() => (history.isPeriodic = 'true')"
          >
            고정지출
          </button>
          <button
            type="button"
            class="btn btn-warning btn-sm"
            v-else
            @click="() => (history.isPeriodic = 'false')"
          >
            고정지출
          </button>
          <input
            type="date"
            class="form-control"
            id="date"
            v-model="history.date"
          />
          <!-- :value="
              findHistory[0]['date'].substring(0, 4) +
              '-' +
              findHistory[0]['date'].substring(4, 6) +
              '-' +
              findHistory[0]['date'].substring(6) -->
          <!-- 초기값 넣기 -->
        </div>
        <div class="form-group">
          <label for="category">카테고리</label>
          <select
            name="category"
            class="form-control"
            id="category"
            style="width: 200px"
            v-model="history.category"
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
        <div class="form-group">
          <label for="memo">메모</label>
          <textarea
            class="form-control"
            id="memo"
            placeholder="메모를 입력하세요."
            v-model="history.memo"
          />
        </div>
        <div class="form-group d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-primary mx-4 my-3"
            @click="updateHistoryHandler"
          >
            수 정
          </button>
          <button
            type="button"
            class="btn btn-secondary mx-4 my-3"
            @click="router.push('#')"
          >
            취 소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHistoryListStore } from '@/stores/counter';
import { reactive, onBeforeMount, ref, computed } from 'vue';
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

// 변경 전 id params로 받아오기
const beforeId = currentRoute.params.id;

// store에서 가져오기(객체)
const historyListStore = useHistoryListStore();

// 분할할당으로 변수 넘겨주기
const { getHistoryById, updateHistoryList } = historyListStore;

// id 값으로 편집할 History 가져오기
const findHistory = getHistoryById(beforeId);
console.log('findHistory  : ', findHistory);
console.log('findHistory.value : ', findHistory.value);

// 전달할 데이터
const history = reactive({
  name: '',
  amount: 0,
  date: '',
  category: '카테고리를 선택하세요',
  purchaseMethod: 'card',
  isPeriodic: 'false',
  memo: '',
});

// updateHistoryHandler 다음에 처리할 로직과 함께 정의
const updateHistoryHandler = () => {
  let { name, amount, date, category, purchaseMethod, isPeriodic, memo } =
    history;

  if (
    !name ||
    name.trim() === '' ||
    !amount ||
    amount === 0 ||
    !date ||
    date.trim() === '' ||
    category === '카테고리를 선택하세요'
  ) {
    alert('내용을 입력해주세요.');
    return;
  }

  history.date = history.date.replace(/-/g, '');
  updateHistoryList(beforeId, { ...history }, () => {
    router.push('/');
  });
};
</script>
<style>
.form-group {
  margin: 20px auto;
}
label {
  margin-bottom: 10px;
}
</style>
