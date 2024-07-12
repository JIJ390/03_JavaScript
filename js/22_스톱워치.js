/* 스톱 워치 관련 요소 모두 얻어오기 */
const display         = document.querySelector('#display');
const startBtn        = document.querySelector('#startBtn');
const recordBtn       = document.querySelector('#recordBtn');
const resetBtn        = document.querySelector('#resetBtn');
const recordContainer = document.querySelector('#recordContainer');

// [0] 분 , [1] 초 , [2] 10ms
const timeList = document.querySelectorAll('#display > span');

let count = 0; // 1 / 100 초 마다 1씩 증가한 값을 저장할 변수

// 스타트 버튼을 눌렀을 때 반복되는 setInterval을 저장할 변수
let currentInterval;

// 스타트 버튼 클릭시 10ms 마다 count 1 wmdrk
startBtn.addEventListener('click', () => {
  
  //  if (currentInterval !== undefined) {
  // 이전에 start 버튼이 클릭된 적이 있을 경우
  // -> 버튼에 작성 내용이 
  if (startBtn.innerText === 'PAUSE') {
    clearInterval(currentInterval); //이전 인터벌을 멈춤
    startBtn.innerText = 'START';

    recordBtn.disabled = true;

    return;   // 일시 정지 상태가 유지되어야 하기 때문에 
              // 이벤트 핸들러를 여기서 종료시켜
              // 아래 setInterval을 수행 못하게 함
  }
  currentInterval = setInterval(() => {
    count++;
    output();
  }, 10);

  // 스타트 버튼 클릭 시 내용을 PAUSE 로 변화
  startBtn.innerText = 'PAUSE';

  // 레코드 버튼 비활성화 -> 활성화로 변경
  recordBtn.disabled = false;

});

/* 시계 출력 함수 */
const output = () => {
  // 화면에 출력될 시간을 저장할 변수
  let minute = Math.floor(count / 100 / 60);
  let second = Math.floor(count / 100 % 60);
  let ms     = count % 100;

  /* 0 을 붙이는 함수 호출 */
  minute = attachZero(minute);
  second = attachZero(second);
  ms     = attachZero(ms);
  
  // minute 에 저장된 값과 화면에 출력된 '분'이 다른 경우
  // -> 1 분 증가 실행 효율 증가
  if (minute != timeList[0].innerText) {
    timeList[0].innerText = minute;
  }
  if (second != timeList[1].innerText) {
    timeList[1].innerText = second;
  }
  timeList[2].innerText = ms;
};

/* 전달 받은 수가 10 미만인 경우 앞에 0을 붙여서 반환 */
const attachZero = num => {

  if (num < 10) return '0' + num;
  return num;

};


/* 리셋 버튼이 클릭 되었을 때 
  - 0.01 초 마다 반복되는 setInterval() 을 멈춤
  - 화면에 출력된 시간은 00:00.00 으로 초기화
*/
resetBtn.addEventListener('click', () => {
  /* [window.]clearInterval(setInterval() 이 저장된 변수) 
  - 전달인자에 작성된 setInterval 을 멈춤(지움)
  */ 
  clearInterval(currentInterval);
  count = 0;
  output();

  startBtn.innerText = 'START'; //리셋 했을 때 초기화면(START)으로 돌아감

  recordContainer.innerHTML = '';
  recordBtn.disabled = true;

});

/* RECORD 버튼 클릭 시 
  현재 출력되는 시간을 얻어와
  li 태크로 만들어 #recordContainer의 첫번째 자식으로 추가
*/
recordBtn.addEventListener('click', () => {
  //#display 에 작성된 내용 얻어오기
  //console.log(display.innerHTML);   // HTML 문서에 작성된 내용 그대로 얻어옴
  //console.log(display.innerText);   // Text(내용)만 얻어옴, 태그 주석 무시
  //console.log(display.textContent); // Text + (공백 문자를 포함) 얻어옴

  /* li 태그 생성 */
  const li = document.createElement('li');
  li.innerText = display.innerText;   // 현재 출력 시간 대입

  // #recordContainer 의 첫번째 자식으로 추가
  recordContainer.prepend(li);
});