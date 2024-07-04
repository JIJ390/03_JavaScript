/** if 예시 - 양수인지 검사 */
function check1() {
  const input1 = document.getElementById('input1');
  //input1.value : input1 요소에 입력된 값 (string)
  const value = Number(input1.value);
  
  // 입력받은 값이 0보다 큰 경우 true(라는 조건식 작성)
  if (value > 0) {
    alert(`${value} 은/는 양수 입니다.`)
  }
  // 입력받은 값이 0 이하인 경우
  // 양수가 아닌 경우
  if (value <= 0) {
    alert(`${value} 은/는 양수가 아닙니다.`)
  }
}


/* if ~ else 예제 */
/** 0 ~ 99 난수 발생 홀/짝 판별 */
function check2() {
  // 난수 발생 : Math.random()
  //            범위 0.00 <= 난수 < 1.00

  // 내림 처리 : Math.floor(실수)
  //             소수점 첫째 자리에 내림 처리 -> 정수 형태로 변환
  const randomNumber = Math.floor(Math.random() * 100);

  if (randomNumber % 2 === 0) {
    alert(`${randomNumber} 은/는 짝수 입니다.`)
  }
  else {
    alert(`${randomNumber} 은/는 홀수 입니다.`)
  }
}


//if / else if 예제
/** 양수, 음수, 0 판별 */
function check3(){
  const input3 = document.getElementById('input3');
  const value3 = Number(input3.value);

  let result; // 결과를 저장할 변수
  if (value3 > 0) {
    result = '양수';
  }
  else if (value3 < 0) {
    result = '음수';
  }
  else {
    result = '0';
  }

  alert(`${value3} 은/는 ${result} 입니다.`);
}


/** 연습 예제 나이 판별*/
function ageCheck() {
  const inputAge = document.getElementById('inputAge');
  const age = Number(inputAge.value);
  let result;

  if (age >= 0 && age <= 13) {
    result = '어린이';
  }
  else if (age >= 14 && age <= 19) {
    result = '청소년';
  }
  else if (age >= 20 && age <= 120) {
    result = '성인';
  }
  else {
    result = '잘못 입력 하셨습니다.';
  }

  if (result.length <= 3) {     // 길이 확인 
    alert(`${result} 입니다.`);
  }
  else {
    alert(`${result}`);
  }
}


/** 연습예제 나이 판별 ver.2 */
function ageCheck2() {
  const inputAge = document.getElementById('inputAge');
  const age = Number(inputAge.value);
  let result;

  if (age < 0 || age > 120) result = '잘못 입력 하셨습니다.'
  else if (age < 14)        result = '어린이';
  else if (age < 20)        result = '청소년';
  else                      result = '성인';
  
  alert(result);
}


/** 입력 받은 수가 3의 배수가 맞는지 검사 */
function check4() {
  const input4 = document.getElementById('input4');
  const value = Number(input4.value);

      // 문자열.length == 문자열의 길이를 반환
  if (input4.value.length === 0) {  
    alert("값을 입력해 주세요.");

  }else {
      // 편의를 위해 0도 양수로 취급
    if (value >= 0){

      if (value % 3 === 0) {
        alert("YES.")
      }else {
        alert("NO.")
      }
    }else{
      alert("양수만 입력해 주세요.");
    }
  }
}

/** 두 수 A, B 를 입력받아 A 가 B 의 배수가 맞는지 확인 */
function check5() {
  const a = document.getElementById("input5a");
  const b = document.getElementById("input5b");

  // 1) A 와 B 중 하나라도 입력되지 않을 경우
  //    -> 입력되지 않은 값이 존재합니다. 
  if (a.value.length === 0 || b.value.length === 0) {
    alert("입력되지 않은 값이 존재합니다.");
    return; // Early Return : 함수를 여기서 일찍 끝냄
  } 
  
  const valueA = Number(a.value); // 둘 다 입력이 없으면 수행되지 않는 코드이기 때문에
  const valueB = Number(b.value); // 효율을 위해 뒤에 배치

  // 2) A 가 B 보다 작으면
  //    -> A 가 B 보다 작습니다.
  if (valueA < valueB) {
    alert("A 가 B 보다 작습니다.");
    return;
  } 
  // 여기까지 온 경우 A 가 B 보다 크거나 같다
  // 3) 1, 2 번 조건이 모두 false 이면 배수 판별 진행
  if (valueA % valueB === 0) {
    alert("배수 맞음");
    return;
  }

  alert("배수 아님");

}

/* 
  - if ~ else if ~ else 에서 
    앞선 if의 조건이 false 가 되면 해당 범위는 이후 범위에서 제외된다!!
    
  - if, else if, else, for, while  등
    {} 내부에 코드가 한 줄만 존재하는 경우
    {} 생략 가능 !!!

  - 문자열.length == 문자열의 길이를 반환

  - Ctrl + shift + f : 코드 정렬
*/


// 매개 변수 (Parameter)
// - 함수 호출 시 전달된 값(전달 인자, Arguments)을
//   자장하는 변수

// switch문 연습
/** switch문을 이용한 계산기 만들기 
 * @param op : 전달 받은 연산 기호
*/
function calc(op) {
  const number1 = document.getElementById("number1");
  const number2 = document.getElementById("number2");

  const value1 = Number(number1.value);
  const value2 = Number(number2.value);

  console.log(value1, value2, op);

  let result; // 결과 저장

  // op 값에 따라 알맞은 case 실행

  /* break : 현재 case 까지만 해석하고 switch문을 멈춤 
      -> break 미작성 시 현재 case 수행 후 멈추지 않고
         break가 존재하는 case 문까지 계속 수행
         -> 중간에 break가 없으면 default 까지 수행*/
  switch(op) {
    case '+' : result = value1 + value2; break;
    case '-' : result = value1 - value2; break;
    case '*' : result = value1 * value2; break;
    case '/' : result = value1 / value2; break;
    case '%' : result = value1 % value2; break;

    // 알맞은 case가 없으면 default 실행
    default : result = "잘못된 연산자.";
  }

  // 아이디가 "calcResult"인 요소를 얻어와
  // 내용(innerText)으로 result를 대입
  document.getElementById("calcResult").innerText = result;
}


function check6() {
  const input6 = document.getElementById("input6");
  const value = Number(input6.value);

  let result;
  switch (value) {
    case 3 :
    case 4 :
    case 5 : result = "봄"; break;
    case 6 :
    case 7 :
    case 8 : result = "여름"; break;
    case 9 :
    case 10 :
    case 11 : result = "가을"; break;
    case 12 :
    case 1 :
    case 2 : result = "겨울"; break;
    default : result = "잘못 입력";
  }
  alert(result);
}