<template>
  <div class="container" style="margin-top: 150px">
    <div class="row">
      <div class="col p-3">
        <h1>내역 추가</h1>
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
            placeholder="거래처를 입력해주세요."
            v-model="history.name"
          />
        </div>
        <div class="form-group">
          <label for="amount" class="me-3 d-inline-block">금액</label>
          <button type="button" class="btn btn-outline-warning btn-sm">
            <!--click이벤트 추가 필요-->
            현금
          </button>
          <input
            type="number"
            class="form-control"
            id="amount"
            placeholder="금액을 입력해주세요"
            v-model.number="history.amount"
          />
        </div>
        <div class="form-group">
          <label for="date" class="me-3 d-inline-block">날짜</label>
          <button type="button" class="btn btn-outline-warning btn-sm">
            <!--click이벤트 추가 필요-->
            고정지출
          </button>
          <input
            type="date"
            class="form-control"
            id="date"
            v-model="history.date"
          />
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
            placeholder="메모를 입력해주세요."
            v-model="history.memo"
          />
        </div>
        <div class="form-group d-flex justify-content-center">
          <button
            type="button"
            class="btn btn-primary mx-4 my-3"
            @click="addTodoHandler"
          >
            추 가
          </button>
          <button type="button" class="btn btn-secondary mx-4 my-3">
            취 소
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useHistoryListStore } from "@/stores/counter";
import { ref, reactive, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

// 입금 카테고리 배열
const incomeCategory = [
  "카테고리를 선택하세요",
  "월급",
  "용돈",
  "성과금",
  "환급금",
  "더치페이",
];

// 출금 카테고리 배열
const expenseCategory = [
  "카테고리를 선택하세요",
  "식비",
  "교통비",
  "공과금",
  "유흥",
  "문화",
  "생활",
  "저축",
  "투자",
];

const history = reactive({
  name: "",
  amount: "0",
  date: "",
  category: "카테고리를 선택하세요",
  purchaseMethod: "card",
  isPeriodic: "false",
  memo: "",
});

// store에서 가져오기(객체)
const historyListStore = useHistoryListStore();
// 분할할당으로 변수 넘겨주기
const { addHistoryList } = historyListStore;

// addHistory 다음에 처리할 로직과 함께 정의
const addTodoHandler = () => {
  let { name, amount, date, category, purchaseMethod, isPeriodic, memo } =
    history;

  if (
    !name ||
    name.trim() === "" ||
    !amount ||
    amount.trim() === "" ||
    !isNaN(amount) ||
    !date ||
    date.trim() === "" ||
    category === "카테고리를 선택하세요"
  ) {
    alert("내용을 입력해주세요.");
    return;
  }

  history.date = history.date.replace(/-/g, "");
  addHistoryList({ ...history }, () => {
    router.push("/home");
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
