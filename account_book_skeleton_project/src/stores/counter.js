import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

const BASEURI_MEMBERS = '/api/members';
const BASEURI_budget = '/api/budget';
const BASEURI_periodicExpense = '/api/periodicExpense';

// Date 인스턴스
const today = new Date();

// 금일 년, 월, 일 데이터
const year = today.getFullYear();
const month = ('0' + (today.getMonth() + 1)).slice(-2);
const day = ('0' + today.getDate()).slice(-2);

// 금일 날짜 문장열 (ex)"20240612")
const dateString = year + month + day;

// 입금 카테고리 배열
const incomeCategory = ['월급', '용돈', '성과금', '환급금', '더치페이'];

// 출금 카테고리 배열
const expenseCategory = [
  '식비',
  '교통비',
  '공과금',
  '유흥',
  '문화',
  '생활',
  '저축',
  '투자',
];

// 결제 방법 배열
const purchaseMethod = ['현금', '신용카드', '체크카드', '계좌이체'];

export const useHistoryListStore = defineStore('historyList', () => {
  /* 반응형 상태 */
  // 상태 저장 배열
  const state = reactive({
    memberList: [],
    historyList: [],
    periodicExpenseList: [],
  });

  // axios로 json에서 members 패치 함수 선언
  const fetchMemberList = async () => {
    try {
      const res = await axios.get(BASEURI_MEMBERS);
      if (res.status === 200) {
        state.memberList = res.data;
      } else {
        alert('데이터 조회 실패');
      }
    } catch (e) {
      alert(e);
    }
  };

  // axios로 json에서 budget 패치 함수 선언
  const fetchHistoryList = async () => {
    try {
      const res = await axios.get(BASEURI_budget);
      if (res.status === 200) {
        state.historyList = res.data;
      } else {
        alert('데이터 조회 실패');
      }
    } catch (e) {
      alert(e);
    }
  };

  // axios로 json에서 periodicExpense 패치 함수 선언
  const fetchPeriodicList = async () => {
    try {
      const res = await axios.get(BASEURI_periodicExpense);
      if (res.status === 200) {
        state.periodicExpenseList = res.data;
      } else {
        alert('데이터 조회 실패');
      }
    } catch (e) {
      alert(e);
    }
  };

  // 패치 함수 실행
  fetchMemberList();
  fetchHistoryList();
  fetchPeriodicList();

  /* 계산된 속성 */
  // 회원 정보 가져오기
  const memberList = computed(() => state.memberList);

  // 입출금 내역 가져오기
  const historyList = computed(() => state.historyList);

  // 정기 지출 목록 가져오기
  const periodicExpenseList = computed(() => state.periodicExpenseList);

  // 수입 내역 가져오기
  const historyIncome = computed(() => {
    return state.historyList.filter((history) => Number(history.amount) >= 0);
  });
  // 지출 내역 가져오기
  const historyExpense = computed(() => {
    return state.historyList.filter((history) => Number(history.amount) < 0);
  });

  //카테고리 별 내역 가져오기(금월기준)
  const getHistoryByCategory = (cat) => {
    return computed(() => {
      return state.historyList.filter((history) => {
        if (
          history.category === cat &&
          history.date.slice(0, 6) === dateString.slice(0, 6)
        ) {
          return true;
        }
        return false;
      });
    });
  };

  // 금일 입출금 내역 가져오기
  const todayHistory = computed(() => {
    return state.historyList.filter((history) => history.date === dateString);
  });

  // 금월 입출금 내역 가져오기
  const thisMonthHistory = computed(() => {
    return state.historyList.filter(
      (history) => history.date.slice(0, 6) === dateString.slice(0, 6)
    );
  });

  // 금주 입출금 내역 가져오기
  const thisWeekHistory = computed(() => {
    const sunday = Number(dateString) - today.getDay();
    return state.historyList.filter((history) => {
      if (Number(history.date) >= sunday && Number(history.date) < sunday + 7) {
        return true;
      }
      return false;
    });
  });

  // 금월 카테고리 별 지출 금액 순 데이터 목록
  const expenseOrder = computed(() => {
    let order = [];
    let sum;

    // 카테고리 별 합계 가져오기
    for (let cat of expenseCategory) {
      sum = 0;
      let curCategory = getHistoryByCategory(cat).value;
      for (let i = 0; i < curCategory.length; ++i) {
        sum += Number(curCategory[i].amount);
      }
      order.push([cat, sum]);
    }
    // order 오름차순 정렬하기
    order.sort((a, b) => {
      return a[1] - b[1];
    });

    return order;
  });

  // 월 수입 합계 가져오기(재유님)

  // 월 지출 합계 가져오기(재유님)

  // id로 내역 가져오기
  const getHistoryById = (id) => {
    return computed(() => {
      return state.historyList.filter((history) => {
        if (history.id === id) {
          return true;
        }
        return false;
      });
    });
  };

  //

  //

  /* actions */

  // axios로 json에 historyList를 생성할 함수 선언
  const addHistoryList = async (
    { name, amount, date, category, purchaseMethod, isPeriodic, memo },
    successCallback
  ) => {
    try {
      const payload = {
        id: today.getTime(),
        name,
        amount,
        date,
        category,
        purchaseMethod,
        isPeriodic,
        memo,
      };
      let res;
      if (payload.isPeriodic === 'false') {
        res = await axios.post(BASEURI_budget, payload);
      } else {
        res = await axios.post(BASEURI_periodicExpense, payload);
      }

      if (res.status === 201) {
        state.historyList.push({ ...res.data });
        successCallback();
      } else {
        console.log(res.status);
        alert('내역 추가 실패');
      }
    } catch (e) {
      alert(e);
    }
  };

  // json server로 데이터 업데이트

  // json server로 데이터 삭제

  return {
    memberList,
    historyList,
    periodicExpenseList,
    historyIncome,
    historyExpense,
    getHistoryByCategory,
    todayHistory,
    thisMonthHistory,
    thisWeekHistory,
    expenseOrder,
    addHistoryList,
    getHistoryById,
  };
});
