const colorList = document.querySelectorAll('.color-input');
const boxList = document.querySelectorAll('.box');
// const opacityList = document.querySelectorAll('[name=opacity-btn]')

const changeBtn = document.querySelector('#changeButton');



changeBtn.addEventListener('click', function() {

  /* 
    checkBtn addEventListener 안에 작성하는 이유
    - 밖 : 페이지 로딩 시점에 체크된 요소 찾기 -> 없음 -> null 반환 고정 (변하지 않음)
    - 안 : checkBtn 클릭 시점에 체크된 요소 -> 있거나 없거나, 변함
  */

  // 상태 선택자 : checked -> 체크된 요소를 선택
  // 체크된 요소를 바로 가져온다 코드가 훨씬 간결해짐
  const checkBtn = document.querySelector('[name = opacity-btn]:checked');
  // 선택 안되면 null 반환

  let op;

  if (checkBtn === null) op = 1;  // 체크가 안된 경우
  else                   op = checkBtn.value;

  for(let i = 0; i < colorList.length; i++) {

    boxList[i].style.backgroundColor = `${colorList[i].value}`;
    boxList[i].style.opacity = `${op}`;
    // input 관련 요소에 작성된 값 -> value
    // 나머지 요소(div, p, span, ...) 에 작성된 내용 -> innerText 등
  }
});

/* changeBtn.addEventListener('click', function() {

  let opacityCheck = 3;

  for(let i = 0; i < opacityList.length; i++) {
    if(opacityList[i].checked) opacityCheck = i;  
  }

  for(let i = 0; i < colorList.length; i++) {
    boxList[i].style.opacity = `${opacityList[opacityCheck].value}`;
  }
}); */
