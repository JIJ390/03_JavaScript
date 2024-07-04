/* 전역 변수 (JS 전체에서 공용으로 사용할 변수) */

// 잔액이 출력되는 span 요소
const output = document.getElementById("output");
// 금액이 입력되는 input 요소
const amount =document.getElementById("amount");

let balance = 10000;          // 잔액
let password = '1234';      // 비밀번호 ,let 으로 두면 비밀번호 변경 기능 가능


//========================================
// 함수 내부에 작성되지 않은 코드
// -> HTML 페이지 로딩(랜더링) 시 자동으로 해석되어 수행된다!
output.innerText = balance;

// 아이디가 amount인 input 요소에 작성된 값을 삭제
amount.value = '';  // 빈 칸을 만들기 위해

function test(){
  // prompt 연습
  // prompt("내용") 
  // -alert() 처럼 알림창이 브라우저에 열리면서
  //  추가적으로 문자열 입력칸 + 확인 + 취소 버튼이 구성된 형태

  // - 확인 : 입력한 내용 반환
  // - 취소 : null 반환

  const pw = prompt("비밀 번호를 입력하세요");

  console.log("password : " , pw);

  if (pw == null) {   // 취소를 누른 경우
    alert("비밀번호 입력 취소됨");
    return;
  }
  // 입력값(pw)가 비밀번호(전역변수 : password)가 같지 않을 경우
  if (pw !== password) { 
    alert("비밀번호 불일치");
    return;
  }
  // 입력값(pw)가 비밀번호(전역변수 : password)가 일치한 경우
  alert('출금 기능 수행');
}


/** 입금 */
function deposit() {
  balance += Number(amount.value);
  output.innerText = balance;
  amount.value = '';
}

/** 출금 */
function withdrawal() {
  const pw = prompt("비밀 번호를 입력하세요.");
  console.log("password : " , pw);

  if (pw === null) {   
    alert("비밀번호 입력 취소됨.");
    return;
  }
  if (pw !== password) { 
    alert("비밀번호 불일치.");
    return;
  }

  alert("비밀번호 일치.")

  if (Number(amount.value) > balance) {
    alert("출금 금액이 잔액보다 클 수 없습니다.")
    return;
  }

  balance -= Number(amount.value);
  output.innerText = balance;
  alert(`${amount.value} 원이 출금 되었습니다. 남은 잔액 : ${balance} 원.`);
  amount.value = '';
}

/** 비밀번호 변경 */
function pwChange() {
  let pwPre = prompt("현재 비밀 번호를 입력하세요.");
  let pwNew;

  if (pwPre === null) {   
    alert("비밀번호 입력 취소됨.");
    return;
  }
  if (pwPre !== password) {
    alert("비밀번호 불일치.");
    return;
  }
  
  alert("비밀번호가 확인 되었습니다.");
  pwNew = prompt("바꾸려는 비밀번호를 입력하세요.");

  if (pwNew === null) {   
    alert("비밀번호 입력 취소됨.");
    return;
  }

  alert("변경 되었습니다.");

  password = pwNew;
}