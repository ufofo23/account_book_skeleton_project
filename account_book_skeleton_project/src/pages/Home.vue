<template>
  <div style="margin-top: 130px" class="container bg-custom10 p-5 rounded">
    <div class="row">
      <div class="col-md-4"></div>
      <div class="container my-0">
        <div class="row justify-content-between">
          <div class="row">
            <div class="col-md-4">
              <div class="border card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center">
                    <h4>월 지출: {{ totalMonthOutcome(202406) }}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center">
                    <h4>월 수입: {{ totalMonthIncome(202406) }}</h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center">
                    <h4>잔액: 1,000,000</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container bg-custom3 p-4 rounded my-5">
    <div class="row">
      <div class="col-md-2">
        <div class="card text-center p-1 m-1" style="background-color: #d2b48c">
          <p class="mb-0">2024년 6월 13일</p>
        </div>
      </div>
      <div class="col-md-2 offset-md-8">
        <div
          class="card text-center p-1 mb-1"
          style="background-color: #deb887"
        >
          <div class="fw-bold">
            <i class="fa-solid fa-arrow-up text-danger fs-4"></i>
            : {{ totalMonthIncome(202406) }}
          </div>
          <div class="fw-bold">
            <i class="fa-solid fa-arrow-down text-primary fs-4"></i>
            : {{ totalMonthOutcome(202406) }}
          </div>
        </div>
      </div>
    </div>
    <!-- 임시로 -->
    <div class="row p-0 mt-5">
      <div class="col-md-8 p-8 offset-md-2">
        <div class="card">
          <div class="container my-5">
            <div class="row align-items-center">
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="날짜" />
              </div>
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="항목" />
              </div>
              <div class="col-md-4">
                <input type="number" class="form-control" placeholder="금액" />
              </div>
              <br />
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="날짜" />
              </div>
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="항목" />
              </div>
              <div class="col-md-4">
                <input type="number" class="form-control" placeholder="금액" />
              </div>
              <br />
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="날짜" />
              </div>
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="항목" />
              </div>
              <div class="col-md-4">
                <input type="number" class="form-control" placeholder="금액" />
              </div>
              <br />
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="날짜" />
              </div>
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="항목" />
              </div>
              <div class="col-md-4">
                <input type="number" class="form-control" placeholder="금액" />
              </div>
              <br />
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="날짜" />
              </div>
              <div class="col-md-4">
                <input type="text" class="form-control" placeholder="항목" />
              </div>
              <div class="col-md-4">
                <input type="number" class="form-control" placeholder="금액" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 임시로 -->
  </div>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { reactive } from 'vue';
import { useHistoryListStore } from '@/stores/counter';
const router = useRoute();
const historyListStore = useHistoryListStore();
  fetchHistoryList,
  fetchMemberList,
  getMonthList,
  totalMonthIncome,
  totalMonthOutcome,
  memberList,
  memberListBalance,
  todayHistory,
} = historyListStore;
</script>

<style>
.p-8 {
  width: 1rem;
  font-size: 2rem;
}
.bg-custom1 {
  background-color: #d2b48c;
}
.bg-custom2 {
  background-color: #ffdab9;
}
.bg-custom3 {
  background-color: #ffe4c4;
}
.bg-custom4 {
  background-color: #daa520;
}
.bg-custom5 {
  background-color: #ffd700;
}
.bg-custom6 {
  background-color: #eee8aa;
}
.bg-custom7 {
  background-color: #f0e68c;
}
.bg-custom8 {
  background-color: #bdb76b;
}
.bg-custom9 {
  background-color: #deb887;
}
.bg-custom10 {
  background-color: #fafad2;
}
</style>
