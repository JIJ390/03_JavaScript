// 준비한 이미지 파일명을 저장할 배열
const images = ['q.jpg', 'w.jpg', 'e.jpg', 'r.jpg'];

const key = document.querySelectorAll('.container > div');

document.addEventListener('keydown', function(e){
  // e     : 이벤트 객체
  // e.key : 입력한 키
  let index; // 인덱스를 저장할 변수
    // undefined

  // 문자열.toUpperCase() : 문자열을 대문자로 변환
  // 문자열.toLowerCase() : 문자열을 소문자로 변환

  switch (e.key.toLowerCase()) {
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default  : return;
  }

  // key[index].style.backgroundColor = 'skyblue';
  key[index].style.backgroundImage = `url('../images/13_입력된키확인/${images[index]}')`;
  key[index].style.color = 'rgba(0, 0, 0, 0)';
  // 글자색 투명으로 변경
  // - rgba (red, green, blue, alpha)
  // - rgb 값은 0 ~ 255 / alpha (투명도) 0(투명) ~ 1(불투명)
  
  //--------------------------------
  // if 로 쓰는 경우
  // if (e.key === 'q') key[0].style.backgroundColor = 'skyblue';
});

document.addEventListener('keyup', function(e){
  let index;  // 선언하지 않아도 전역변수로 자동 선언됨(index) JS 자체 기능 
              // 헷갈려서 사용하지는 않는 기능
  switch (e.key.toLowerCase()) {
    case 'q' : index = 0; break;
    case 'w' : index = 1; break;
    case 'e' : index = 2; break;
    case 'r' : index = 3; break;
    default  : return;
  }

  //key[index].style.backgroundColor = '#00ff0000';
  key[index].style.backgroundImage = 'none';
  key[index].style.color = 'black';
});

/* 이미지가 마우스 따라 다니게 하기 */
const cursorImage = document.querySelector('#cursorImage');

// 문서 전체에 'mousemove'(마우스 움직일때) 감지 추가
document.addEventListener('mousemove', function(e){
  // console.log(e);
  // e.pageX : 가로 방향 마우스 위치(왼쪽에서 떨어진 px)
  // e.pageY : 세로 방향 마우스 위치(왼쪽에서 떨어진 px)
  // 이미지에 따라 위치 조정
  cursorImage.style.left = `${e.pageX - 5}px`;
  cursorImage.style.top  = `${e.pageY - 5}px`;
});
