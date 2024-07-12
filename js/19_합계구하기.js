/* 계산하기 */
const calc = document.querySelector('#calc');

calc.addEventListener('click', () => {
  // 계산 버튼 클릭 시점에 존재하는 .input-number 모두 얻어오기
  const numbers = document.querySelectorAll('.input-number');
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += Number(numbers[i].value);
  }

  alert(`합계 : ${sum}`);
});


/* 추가 */
const addBtn = document.querySelector('#add');
const container = document.querySelector('.container');

addBtn.addEventListener('click', () => {

  // 추가 버튼 클릭 시
  // div, input, span 요소를 생성해서 알맞게 조립 후
  // .container 의 마지막 자식으로 추가

  // 1) 요소 생성
  const div = document.createElement('div');
  const input = document.createElement('input');
  const span = document.createElement('span');

  // 2) 클래스, 타입, 내용 추가
  div.className = 'row';

  input.type = 'text';
  input.className = 'input-number';

  span.className = 'remove-row';
  span.innerHTML = '&times;'; //text 가 아닌 HTML 특수 문자

//**************************** */
  // 해당 요소 하나에 할당 배열이 아님
  span.addEventListener('click', () => {
    span.parentElement.remove();
  })      // span이 만들어 졌을때 같이 정의해줌  
          // 만들어진 span에 즉시 기능 할당 
//**************************** */


  // 3) 조립
  // 요소.append(A, B, C) 마지막 자식으로 추가
  div.append(input, span);
  
  // 4) container의 마지막 자식으로 추가
  container.append(div);

  /*******************************************/
  // span 이 만들어질 때 클릭 되었을 때 동작을 같이 정의해줌
});

/*   
const removeBtn = document.querySelectorAll('.remove-row');
  
for (let i = 0; i < removeBtn.length; i++) {
  removeBtn[i].addEventListener('click', () => {
    removeBtn[i].parentElement.remove();
  });
}     
*/
// 바깥에 적으면 페이지 로딩 시점에 존재하는 remove-row를 얻어옴
// 존재하는 remove-row 가 없어서 제대로 작동하지 않음



