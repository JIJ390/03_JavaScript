const btns = document.querySelectorAll('.btn');

// 기준이 되는 박스
const standard = document.querySelector('#standard');

let count = 1; // 1 씩 증가하면서 요소 내용으로 추가

for (let i = 0; i < btns.length; i++) {
  // 모든 버튼에 클릭 이벤트 추가
  btns[i].addEventListener('click', () => {
    const str = btns[i].innerText; // 작성된 버튼 내용 가져오기

    switch (str) {
      case 'prepend' : 
        const span1 = document.createElement('span'); //요소 생성
        span1.innerText = count; // span 내용으로 count 추가
        span1.style.backgroundColor = 'skyblue';
        standard.prepend(span1); // #spandard 요소 첫 번째 자식으로 span1 추가
      break;

      case 'append' : 
        const span2 = document.createElement('span'); 
        span2.innerText = count;
        span2.style.backgroundColor = 'yellowgreen';
        standard.append(span2); // 마지막 자식으로 추가
      break;

      case 'before' :
        const div1 = document.createElement('div'); //div 요소 생성
        div1.innerText = count;
        div1.style.backgroundColor = 'orangered';
        div1.className = 'box';   // box 클래스 추가
        standard.before(div1);
      break;

      case 'after' :
        const div2 = document.createElement('div');
        div2.innerText = count;
        div2.style.backgroundColor = 'gray';
        div2.className = 'box';
        standard.after(div2);
      break;

      case 'remove' :
        // .container 요소 제거
        document.querySelector('.container').firstChild.remove();
      break;
    }
    count++; // switch 한번 끝날 때 카운트 1 증가
  });
}