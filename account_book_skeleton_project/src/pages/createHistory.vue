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
          />
          <!--v-model="name" 추가 필요-->
        </div>
        <div class="form-group">
          <label for="amount">금액</label>
          <input
            type="text"
            class="form-control"
            id="amount"
            placeholder="금액을 입력해주세요"
          />
          <!--v-model="amount" 추가 필요-->
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
          >
            <!--v-for로 변경 필요-->
            <option>카테고리를 선택하세요</option>
            <option value="foods">식비</option>
            <option value="playing">유흥</option>
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
<script setup></script>
<style>
.form-group {
  margin: 20px auto;
}
label {
  margin-bottom: 10px;
}
</style>
