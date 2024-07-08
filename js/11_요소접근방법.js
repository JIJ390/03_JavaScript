/** class 를 이용한 요소(DOM 객체) 접근 방법 */
function classTest() {
  /* 유사 배열이란?
     배열처럼 index, length를 가지고 있으나
     배열 전용 기능(메서드)를 제공하지 않음
  */

  // 클래스가 cls-test인 요소를 모두 얻어와
  // HTML Collection (유사 배열)형태로 얻어옴
  const divs = document.getElementsByClassName('cls-test');
  // html 문서에서 위에서 부터 순서대로 얻어옴

  // 유사배열도 length 사용 가능
  for (let i = 0; i < divs.length; i++) {
    // 요소.innerText = "값"  // 요소 내용으로 "값" 대입
    // 요소.innerText;        // 요소 내용 얻어오기
    console.log(divs[i].innerText); //작성된 내용(색상)

    // i 번째 요소의 배경색을 작성된 내용으로 변경
    divs[i].style.backgroundColor = divs[i].innerText;
  }
}


/** input 에 입력된 숫자 모두 얻어와 합계 구하기 */
function classTest2() {
  /* 
    input 요소에 입력된 값 얻어오는 방법
    -> input요소.value

    HTML 요소에서 얻어온 값의 자료형
    -> 모두 string (문자열)

    합계 구하는 방법
    -> let sum = 0;

    HTML 문서에서 class 속성값이 일치하는 요소 모두 얻어오기
    -> documanet.getElementsByClassName('class속성값)
    -> HTMLCollection (유사배열) 형태로 반환
  */

  // 클래스가 cls-test2 인 요소를 모두 얻어옴
  const numbers = document.getElementsByClassName('cls-test2');
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    // numbers[i] == input 요소 하나
    sum += Number(numbers[i].value);
  }
  
  alert(`합계 : ${sum}`);
}


/** 태그명 접근 */
function tagNameTest() {
  //document.getElementsByTagName('')
  const tagList = document.getElementsByTagName("li");

  for (let i = 0; i < tagList.length; i++) {
    // 글자색 변경
    tagList[i].style.color = tagList[i].innerText;
    tagList[i].style.border = `3px solid ${tagList[i].innerText}`;
  }
}


/** name 으로 요소 접근하기 (취미 선택)*/
function nameTest() {
  /*
     document.getElementsByName('name 속성값');
     -> NodeList (유사 배열) 반환
  */

  // name 속성 값이 'hobby' 인 요소를 모두 얻어와 저장
  const hobbyList = document.getElementsByName('hobby');
  let str = ''; // check된 input의 value 를 누적
  let count = 0;  // 체크된 input 개수 세기  


  // i == 0 ~ 5
  for (let i = 0; i < hobbyList.length; i++) {
    if (hobbyList[i].checked === true) {
      // checktype, radio 타입 전용 속성 [요소.checked]
      // 요소.checked = ture; ->  해당 요소 체크
      // 요소.checked = false; -> 해당 요소 체크 해제
      // 요소.checked; 체크 여부 반환
      // boolean 형태 / [true, false]
      str += `${hobbyList[i].value} `;
      count++;
    }
  }

  const div = document.getElementsByClassName('name-div')[0];
  // 요소가 하나 뿐이라도 배열형태로 반환된다 ElementssssSSSS!!!!!
  // 0번 인텍스만 존재하므로 div에 0번 인덱스를 요소를 저장
  div.innerHTML = `${str} <br><br>선택된 취미 개수는 ${count} 개 입니다.`;
}


/** CSS 선택자로 요소 접근 */
function cssTest1() {
  // target-div 속성값이 css-div 인 요소 하나 선택
  const container = document.querySelector('[target-div = css-div]');

  container.style.width = '200px';
  container.style.height = '200px';
  container.style.border = '10px solid orangered';

  // target-div 속성값이 css-div 인 요소의 
  // 자식 중 div 요소를 모두 선택해 얻어옴
  const divs = document.querySelectorAll('[target-div = css-div] > div');

  

  for (let i = 0; i < divs.length; i++) {
    divs[i].style.height = '50%';
    divs[i].style.display = "flex";
    divs[i].style.justifyContent = "center";
    divs[i].style.alignItems = "center";
  }

  divs[0].style.backgroundColor = 'pink';
  divs[1].style.backgroundColor = 'skyblue';

  // divs 사용하지 말고 'test1' 이 작성된 요소를 선택해 
  // fontSize = 30px 로 변경

  const test1 = document.querySelector('[target-div = css-div] > div');
  test1.style.fontSize = '30px';
}