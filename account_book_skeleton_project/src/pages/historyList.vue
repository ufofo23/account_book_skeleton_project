<template>
  <div class="container" style="margin-top: 130px">
    <div class="container bg-secondary p-5 rounded">
      <div class="row">
        <div class="col-md-4"></div>
        <div class="container my-0">
          <h1 class="text-center mb-5"></h1>
          <div class="row justify-content-center">
            <div class="row">
              <div class="col-md-4">
                <div class="card bg-danger text-white">
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <i class="fas fa-arrow-down fa-2x"></i>
                      </div>
                      <div class="text-right">
                        <h4>월 지출</h4>
                        <h3></h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-info text-white">
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <i class="fas fa-arrow-up fa-2x"></i>
                      </div>
                      <div class="text-right">
                        <h4>월 수입</h4>
                        <h3>{{}}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card bg-warning text-white">
                  <div class="card-body">
                    <div
                      class="d-flex justify-content-between align-items-center"
                    >
                      <div>
                        <i class="fas fa-wallet fa-2x"></i>
                      </div>
                      <div class="text-right">
                        <h4>잔액</h4>
                        <h3>{{}}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-2 d-flex justify-content-end">
      <div
        class="d-inline-block border border-primary border-1 me-3"
        style="width: 120px; height: 30px"
      >
        asdf
      </div>
      <div
        class="d-inline-block border border-primary border-1"
        style="width: 120px; height: 30px"
      >
        asdf
      </div>
    </div>

    <div class="mt-5">
      <History />
    </div>
  </div>
</template>
<script setup>
import History from '@/components/History.vue';
</script>
<style></style>
