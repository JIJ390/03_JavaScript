const inputList = document.querySelectorAll('.color-input');
const changeButton = document.querySelector('#changeButton');

changeButton.addEventListener('click', () => {

  for (let i = 0; i < inputList.length; i++) {

    const box = inputList[i].previousElementSibling;
    box.style.backgroundColor = inputList[i].value;
  }
});

/* 같은 인덱스를 이용하는 방법은 한계
  (ex. 해당 요소가 하나 더 생기는 경우)가 존재하기 때문에
  대상 요소를 확실하게 선택한 후 탐색 코드를 이용해서
  찾아가 원하는 코드/기능을 적용 하는 것이 좋다!!!
*/