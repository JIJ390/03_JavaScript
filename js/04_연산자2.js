/* 
  [템플릿 문자열]
  - ` (백틱)을 이용한 문자열 + 변수 작성법

  - 문자열 전체를 `(백틱)으로 감싸고 JS 값(변수, 연산, 값)을 ${} 형태로 작성
*/

/** 비교 연산자 확인 */
function check1(){
  const num1 =100;
  const num2 =100;
  const num3 =999;

  const str1 = "100";
  const str2 = "100";
  const str3 = "999";

  console.log("---동등 비교(==, !=)----");
  //console.log(num1 + " == " + num2 + " => " + (num1 == num2));
  console.log(`${num1} == ${num2} => ${num1 == num2}`);
  console.log(`${num1} == ${num3} => ${num1 == num3}`);
  console.log(`${num1} != ${num3} => ${num1 != num3}`);

  console.log("-동등 비교(숫자 == 문자열) 확인-");
  console.log(`${num1} == "${str1}" => ${num1 == str1}`);

  console.log("-문자열끼리 비교-");
  console.log(`"${str1}" == "${str2}" => ${str1 == str2}`);
  console.log(`"${str1}" == "${str3}" => ${str1 == str3}`);
  console.log(`"${str1}" != "${str3}" => ${str1 != str3}`);

  // 동일 비교를 주로 사용하는 추세
  console.log("---동일 비교(===, !==) 확인---");
  console.log(`${num1} === ${num2} => ${num1 === num2}`);
  console.log(`${num1} === ${num3} => ${num1 === num3}`);
  console.log(`${num1} !== ${num3} => ${num1 !== num3}`);

  console.log("-동일 비교(숫자 === 문자열) 확인-");
  console.log(`${num1} === "${str1}" => ${num1 === str1}`);

  console.log("---숫자 끼리 크기 비교(>, >=, <, <=)---")
  console.log(`${num1} > ${num2} => ${num1 > num2}`);
  console.log(`${num3} > ${num2} => ${num3 > num2}`);
  console.log(`${num1} >= ${num2} => ${num1 >= num2}`);

  console.log("{초과, 이상, 이하, 미만}");
  console.log(`${num1} < ${num2} => ${num1 < num2}`);
  console.log(`${num3} < ${num2} => ${num3 < num2}`);
  console.log(`${num1} <= ${num2} => ${num1 <= num2}`);

  /* 복합기호에서 등호(=)는 무조건 오른쪽!!! */
}


/** 홀/짝 판별 함수 */
function oddEvenCheck(){

  const input1 = document.getElementById('input1');
  // #input1 요소에 작성된 값을 얻어와 숫자로 변환 후 value 변수에 대입(저장)
  const value = Number(input1.value);

  // 2 로 나눴을 때 나머지가 0 === 짝수 (2 의 배수)
  // 2 로 나눴을 때 나머지가 1 이 아닌 경우 === 짝수
  // 2 로 나눴을 때 나머지가 1 === 홀수
  // 2 로 나눴을 때 나머지가 0 이 아닌 경우 === 홀수

  console.log(`${value} 은/는 짝수 : ${value % 2 === 0}` );
  console.log(`${value} 은/는 홀수 : ${value % 2 !== 0}` );
}


/** 배수 판별 함수 */
function multipleCheck(){
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const result2 = document.getElementById("result2");

  const num2 = Number(input2.value);
  const num3 = Number(input3.value);

  result2.innerText = (num2 % num3) === 0;
}


/** 복합 대입 연산자 확인 */
function compoundCheck(){
  let number = 100;
  console.log(`number : ${number}`);

  number += 20; // number = number + 20;
  console.log(`number += 20 : ${number}`); //120
  
  number -= 60; // number = number - 60;
  console.log(`number -= 60 : ${number}`); //60

  number *= 3;  // number = number * 3;
  console.log(`number *= 3 : ${number}`); //180

  number /= 10;  // number = number / 3;
  console.log(`number /= 10 : ${number}`); //18

  number %= 5;  // number = number % 5;
  console.log(`number %= 5 : ${number}`); //3
}


/** AND 연산자 확인 */
// AND(&&) : 둘 다 true 인 경우에만 true
function andCheck(){
  const bool1 = (104 >= 100) && (104 % 2 === 0);
  const bool2 = (50 <= 70) && (50 % 4 === 0);
  const bool3 = (13 >= 1) && (13 <= 10);

  // 104 는 100 이상의 숫자이면서 짝수인가?
  console.log(`104는 100 이상의 숫자이면서 짝수인가? ${bool1}`);
  // 50은 70 이하의 숫자이고 4의 배수가 맞는가?
  console.log(`50은 70 이하의 숫자이고 4의 배수가 맞는가? ${bool2}`);
  // 13은 1 부터 10 사이의 숫자가 맞는가?
  console.log(`13은 1 부터 10 사이의 숫자가 맞는가? ${bool3}`);
}


/** OR 연산자 확인 */
// OR(||) : 둘 다 false 인 경우에만 false
function orCheck(){
  const name = "김길동";
  const age = 20;
  const bool1 = (4 > 10) || (4 % 2 === 0);
  const bool2 = (age < 18) || (name === "김길동");

  // 4는 10을 초과하거나 짝수인가?
  console.log(`4는 10을 초과하거나 짝수인가? ${bool1}`);
  // 나이가 18세 미만이거나 이름이 '김길동' 인가?
  console.log(`나이가 18세 미만이거나 이름이 '김길동' 인가? ${bool2}`);
}



