//for([1]초기식 ; [2]조건식 ; [4]증감식){
//
//  [3]조건식이 true인 경우 반복 수행할 코드;
//}

function check1() {
  //num 1 부터 1씩 증가하여 num 값이 6 미만이 아닌 순간 반복을 종료
  for(let num = 1; num < 6; num++) {
    console.log(num);
  }
}

/** 1 부터 10까지 1씩 증가하며 출력하기 */
function check2() {
  //num 1 부터 1씩 증가하여 num 값이 11 미만이 아닌 순간 반복을 종료
  for(let num = 1; num < 11; num++) {
    console.log(num);
  }
}


function check3() {
  //num 5 부터 1씩 증가하여 num 값이 14 미만이 아닌 순간 반복을 종료
  for(let num = 5; num < 14; num++) {
    console.log(num);
  }
}

function check4() {

  let result =''; // 결과 저장용 변수에 빈칸(string)

  for(let num = 1; num < 6; num++) {
    result += num; // 문자열 + 숫자 => 문자열
  }
  console.log(result);
}

/** 1부터 10까지 1씩 증가한 숫자들의 합을 출력하기 */
function check5() {

  let sum = 0; // 더했을 때 영향이 없는 숫자 0을 대입
               // Alt + Shift + R 함수 내 변수 이름 변경
  for(let num = 1; num < 11; num++) {
    sum += num; 
  }
  console.log(sum);
}

/** 1 부터 10까지 2씩 증가하며 출력하기 */
function check6() {     //복합 대입 연산자 사용
  for(let num = 1; num < 11; num += 2) {
    console.log(num);
  }
}

/** 3 부터 30까지 3의 배수만 출력하기 */
function check7() {     
  for(let num = 3; num < 33; num += 3) {
    console.log(num);
  }
}