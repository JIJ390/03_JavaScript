/** break 확인 */
function check1() {
  // 1부터 10 까지 1씩 증가하는 반복문
  // 단 5를 출력한 후 멈춤

  for(let num = 1; num <= 10; num++) {
    console.log(num);
    if(num === 5) break;
  }

}

function check2() {
  let sum = 0;

  // while문은 () 내 조건식이 true일 때 반복을 수행
  // -> true라고 작성하면 조건식이 false가 되는 경우가 없음
  // -> 무한 반복

  // * 무한 반복하는 코드에는 break를 포함한 if문을 작성해서
  //   종료 조건을 만들어 두어야만 한다
  while (true) {
    const value = prompt("숫자 입력");
    if (value === null) break; // 취소 클릭시 종료
    sum += Number(value);
  }
  alert("합계 : "+ sum);     ///ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
}

/** continue 확인 */
function check3() {
  // 1 부터 20  까지 1씩 증가하는 반복문
  // 단 3의 배수는 건너뛰기

  for (let num = 0; num <= 20; num++) {
    if (num % 3 === 0) continue;
    console.log(num);
  }
}

/** continue + 중첩 반복문에서의 분기문확인 */
function check4() {
  

  // 123456789
  // 단 1번 줄에서는 1제외
  // 단 2번 줄에서는 2제외
  // 단 n번 줄에서는 n제외
  for(let row = 1; row <= 5; row++) {

    let str ='';

    for(let col = 1; col <= 9; col++){

      if (col === row) continue;  // 감싸고 있는 for문만 건너뜀
      str += col;

    }

    console.log(str);
  }
}


function startGame() {

  let numb = 10;
  //맞춰야 하는 난수 발생
  //0.0 ~ 1.0 사이 난수에 200 곱하고 소수점 버림 후 1 더함
  const answer = Math.floor(Math.random() * numb) + 1; 

  console.log(answer);

  let count = 0;
  let str = `1 부터 ${numb} 사이 숫자 입력`;

  while(1){
    let input = prompt(str +` (${count} 회 시도)`)

    if (input === null) {
      alert('GAME OVER');
      break;
    }

    const value = Number(input);

    if(value > numb || 0 > value){
      alert('잘못 입력하셨습니다');
      continue;
    }
    /* 잘못 입력한 경우 */
    // NaN (Not a Number)
    // isNaN : 값이 NaN 이면 true

    if(isNaN(value)){
      alert('숫자만 입력해 주세요');
      continue;
    }
    
    count++;
    
    if (value === answer) {
      alert(`정답! [${answer}] (총 ${count} 회 시도)`);
      break;
    }

    if (value > answer) str = `${value} DOWN!`;
    else str = `${value} UP!`;
  }
}