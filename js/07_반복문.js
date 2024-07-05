//for([1]초기식 ; [2]조건식 ; [4]증감식){
//
//  [3]조건식이 true인 경우 반복 수행할 코드;
//}

function check1() {
  //num 1 부터 1씩 증가하여 num 값이 6 미만이 아닌 순간 반복을 종료
  for (let num = 1; num < 6; num++) {
    console.log(num);
  }
}

/** 1 부터 10까지 1씩 증가하며 출력하기 */
function check2() {
  //num 1 부터 1씩 증가하여 num 값이 11 미만이 아닌 순간 반복을 종료
  for (let num = 1; num < 11; num++) {
    console.log(num);
  }
}


function check3() {
  //num 5 부터 1씩 증가하여 num 값이 14 미만이 아닌 순간 반복을 종료
  for (let num = 5; num < 14; num++) {
    console.log(num);
  }
}

function check4() {

  let result =''; // 결과 저장용 변수에 빈칸(string)

  for (let num = 1; num < 6; num++) {
    result += num; // 문자열 + 숫자 => 문자열
  }
  console.log(result);
}

/** 1부터 10까지 1씩 증가한 숫자들의 합을 출력하기 */
function check5() {

  let sum = 0; // 더했을 때 영향이 없는 숫자 0을 대입
               // Alt + Shift + R 함수 내 변수 이름 변경
  for (let num = 1; num < 11; num++) {
    sum += num; 
  }
  console.log(sum);
}

/** 1 부터 10까지 2씩 증가하며 출력하기 */
function check6() {     //복합 대입 연산자 사용
  for (let num = 1; num < 11; num += 2) {
    console.log(num);
  }
}

/** 3 부터 30까지 3의 배수만 출력하기 */
function check7() {     
  for (let num = 3; num < 33; num += 3) {
    console.log(num);
  }
}

/**1 부터 20까지 4의 배수만 출력하고 합계도 구하기 */
function check8() {     
  let sum = 0; // 합계 저장용 변수;

  for (let num = 1; num < 21; num++) {
    // num 이 4의 배수인 경우
    if (num % 4 === 0) {
      console.log(num); // clg
      sum += num;
    }
  }
  console.log(sum); // clg
}

/** 입력 받은 범위 내 지정된 배수 출력 / 합계 구하기 */
function check9() {     
  // 기능 수행에 필요한 요소 가져오기
  const start    = document.getElementById('start9');
  const end      = document.getElementById('end9');
  const multiple = document.getElementById('multiple9');

  const s = Number(start.value);
  const e = Number(end.value);
  const m = Number(multiple.value);

  let sum = 0; // 합계 저장용 변수;

  for (let num = s; num <= e; num++) {
    // num 이 4의 배수인 경우
    if (num % m === 0) {
      console.log(num); // clg
      sum += num;
    }
  }
  console.log(sum); // clg
}


/** 입력 받은 단(2~9) 의 구구단 출력하기 */
function check10() {
  const input = document.getElementById('dan10');
  const dan = Number(input.value);

  // 단이 입력되지 않은 경우
  if (input.value.length === 0) {
    alert("단을 입력해 주세요.");
    return;
  }

  // 단이 2 ~ 9 사이가 아닌 경우
  if (dan < 2 || dan > 9) {
    alert("2 ~ 9 사이 숫자를 입력해 주세요.");
    return;
  }

  for (let num = 1; num < 10; num++) {
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}

/** 10 부터 1까지 1씩 감소하며 출력하기 */
function check11() {
  for (let num = 10; num > 0; num--) {
    console.log(num);
  }
}


/** 입력 받은 단(2~9) 의 구구단 거꾸로 출력하기 */
function check12() {
  const input = document.getElementById('dan12');
  const dan = Number(input.value);

  if (input.value.length === 0) {
    alert("단을 입력해 주세요.");
    return;
  }

  if (dan < 2 || dan > 9) {
    alert("2 ~ 9 사이 숫자를 입력해 주세요.");
    return;
  }

  for (let num = 9; num > 0; num--) {
    console.log(`${dan} X ${num} = ${dan * num}`);
  }
}


/** 특정 배수 마다 지정된 모양으로 출력하기 */
function check13() {
  const input  = document.getElementById('input13');
  const output = document.getElementById('output13');
  const result = document.getElementById('result13');

  let str = '';

  // 배수
  const multiple = Number(input.value);
  // 출력 모양
  const shape = output.value;

  for (let num = 1; num < 21; num++) {
    if (num % multiple === 0) { 
      str += `${shape} `;
    } 
    else str += `${num} `;

    if (num === 10) str += '<br>' ; // 한 줄인 경우 {} 생략 가능
    
  }
  result.innerHTML = str;
}


function check14() {
  // 행은 3번 반복
  // 1행 마다 4번 반복

  for (let row = 0; row < 3; row++) {
    let str ='';  // 한 행에 출력된 문자열을 저장할 변수 
                  // 한 번 반복할 때마다 만들어지기 때문에 초기화 필요 없음
    for (let col = 1; col < 5; col++) {
      str += col;   // str이 문자열 형태라 따로 바꿀 필요 없음
    }

    console.log(str);
    console.log('----');
  }
}


function check15() {
        // i 행
  for (let row = 0; row < 4; row++) {
    let str ='';  
          // j 열
    for (let col = 0; col < 5; col++) {
      str += col + 1;   
    }
    console.log(str);
    console.log('-----');
  }
}

function check16() {
        
  for (let row = 0; row < 3; row++) {

    let str ='';        
    
    for (let col = 6; col > 0; col--) {
      str += col;   
    }
    console.log(str);
    console.log('------');
  }
}

function check17() {
        
  for (let row = 2; row < 6; row++) {
    
    let str ='';        
    
    for (let col = 1; col < row; col++) {
      str += col;   
    }
    console.log(str);
  }
}

function check18() {
        
  for (let row = 1; row <= 4; row++) {
    
    let str ='';        
    
    for (let col = 1; col <= row; col++) {
      str += '*';   
    }
    console.log(str);
  }
}


function check19() {
        
  for (let row = 5; row >= 1; row--) {   //1 행에서 row 값이 크고 갈수록 낮아져야함
                                        //그래야 아래로 갈수록 반복이 적어짐
    let str ='';        
    
    for (let col = 1; col <= row; col++) {
      str += col;   
    }
    console.log(str);
  }
}

/** 1 부터 30 사이의 정수 중 4 의 배수의 개수 구하기 */
function check20() {
  let count = 0;
  for (let num = 1; num < 31; num++) {
    if (num % 4 === 0) count++;
  }
  alert(`count : ${count}`);
}


function check21() {
  const input = document.getElementById('input21')
  const value = Number(input.value)

  let count = 0;
  
  for (let num = 1; num < 101; num++) {
    if (num % value === 0) count++;
  }
  alert(`count : ${count}`);
}

function check22() {

  let count = 1;
  
  //3행 4열 2중 for문
  for (let row = 1; row <= 3; row++) {
    let str ='';
    for (let col = 1; col <= 4; col++) {
      str += `${count++} `;
    }
    console.log(str);
  }
}


/* while */
/** 0이 입력될 때 까지 입력된 값 누적하기 */
function check23() {
  let sum = 0;

  let value;
  //입력된 숫자가 0이 아니면 반복
  while((value = Number(prompt('숫자 입력'))) != 0) {
    sum += value;
  }

  alert(`합계 : ${sum}`);
}

function check24() {

  // 메뉴 가격을 저장한 변수 선언
  const gimbap = 4000;
  const ramen = 4500;
  const donkkas = 9000;

  let gimbapCount = 0;
  let ramenCount = 0;
  let donkkasCount = 0;

  // prompt에 입력된 값을 저장할 변수
  let input; // 선언만 한 경우 undefined

  // input이 undefined 이기 때문에 첫 반복 수행됨
  while(input !== null){
    input = prompt('메뉴 번호를 입력하세요');
    // prompt -> 확인 : 작성한 값 반환
    // prompt -> 취소 : null
    //      -> 취소 선택 시 
    //        while문 다음 반복 수행 X
    
    switch (input) {
      case '1' : gimbapCount++; break;
      case '2' : ramenCount++; break;
      case '3' : donkkasCount++; break;
      case null : alert("주문 완료!"); break;
      default : alert("메뉴에 작성된 번호만 입력해주세요.")
    }
  }   // while end

  let html = ''; // 화면에 출력될 html 코드를 저장할 변수

  if(gimbapCount > 0){
    html += `<li>김밥 (${gimbapCount} 개) : ${gimbapCount * gimbap} 원.</li>`;
  }
  if(ramenCount > 0){
    html += `<li>라면 (${ramenCount} 개) : ${ramenCount * ramen} 원.</li>`;
  }
  if(donkkasCount > 0){
    html += `<li>돈까스 (${donkkasCount} 개) : ${donkkasCount * donkkas} 원.</li>`;
  }

  const sum = (gimbapCount * gimbap) + (ramenCount * ramen) + (donkkasCount * donkkas);

  html += `<li>합계 : ${sum} 원</li>`;

  // id가 "result24"인 요소에 내용으로 html 변수 값 추가
  // + HTML 태그 해석
  document.getElementById('result24').innerHTML = html;

}