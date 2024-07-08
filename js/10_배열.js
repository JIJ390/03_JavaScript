/** 배열 선언 및 기초 사용법배열 선언 및 기초 사용법 */
function check1() {
  const arr1 = new Array();
  const arr2 = new Array(3);
  const arr3 = [];
  const arr4 = ['사과', '딸기', '바나나'];

  console.log(arr1, arr2, arr3, arr4);
  // 배열명.length
  console.log(arr1.length, arr2.length, arr3.length, arr4.length);

  // 배열의 각 요소 접근 방법 (index 이용)
  // 배열명[index] -> index 번째 요소에 저장된 값을 반환

  console.log('arr4[0] : ', arr4[0]);
  console.log('arr4[1] : ', arr4[1]);
  console.log('arr4[2] : ', arr4[2]);
  console.log('arr4[3] : ', arr4[3]);

  // 배열명[index] = 값; -> 해당 index 번째 요소에 값 대입
  arr2[0] = 123;
  arr2[1] = '덥다';
  arr2[2] = true;
  // (JS 배열은 여러 자료형 저장 가능)
  console.log('arr2 : ', arr2);

  //---------------------------------------------------
  /* JS 배열 특징 이용하기 */
  // 1. 길이 제한이 없다
  //    -> 원하는 만큼 배열 요소를 추가할 수 있다

  arr1[0] = '가나다';
  arr1[1] = '라마바';
  arr1[2] = '사아자';

  console.log('값이 대입된 arr1 : ', arr1);
  
  // 2. 원하는 index 에 값을 마음대로 추가할 수 있다
  //    -> 중간에 건너뛴 index 요소는 빈 칸(empty)으로 처리됨
  
  arr1[5] ='중간에 건너뜀';
  console.log('arr1 확인 : ', arr1);
}

/** 배열 X for 문 확인 1 */
function check2() {
  const weeks = ['월', '화', '수', '목', '금', '토', '일'];
  // weeks.length == 7
  // index => i         (7) 미만
  for (let i = 0; i < weeks.length; i++) {
    console.log(weeks[i]);
  }
}

/** 배열 X for 문 확인 2 */
function check3() {
  /* 배열 요소에 순차적으로 값 초기화하기 */
  const arr = [];

  // 0 부터 3 까지 1 씩 증가
  for (let i = 0; i < 4; i++) {
    arr[i] = prompt(`${i} 번째 인덱스 요소 값 입력`);
  }

  console.log(arr);

}

/** 배열 X for 문 확인 3 */
/* prompt 를 이용해서 숫자 5 개를 입력 받아 배열에 저장 후
   저장된 값, 합계, 평균을 console 에 출력 
   
   ex) 1,2,3,4,5 입력
  저장된 값 : [1,2,3,4,5]
  합계 : 15
  평균 : 3
   */
function check4() {
  const arr = new Array(5); // 5 칸 짜리 배열 생성
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    // 입력 받자 마자 number 타입으로 변환하여 배열 요소에 저장
    arr[i] = Number(prompt(`${i} 번째 요소에 저장할 숫자 입력`));
    sum += arr[i];  // 합계 누적
  }
  console.log('저장된 값 : ', arr);
  console.log('합계 : ', sum);
  console.log('평균 : ', sum / arr.length);
}


/** 배열 X for 문 확인 4 */
// 배열에 0 부터 배열 길이 미만의 난수 저장하기
function check5() {

  //length는 사용 경우가 많아 변수로는 축약어 leng을 주로 사용한다
  const leng = Number(prompt('생성할 난수 범위 지정')); 
  const arr = [];

  for (let i = 0; i < leng; i++) {
    const randomNumber = Math.floor(Math.random() * leng);
    arr[i] = randomNumber; 
  }
  console.log('결과 : ', arr);
}

/** 로또 번호 생성 */
// 1 ~ 45 사이 난수 6개 생성
// 단 중복 X, 오름차순 정렬
function check6() {

  const lotto = []; // 난수 저장할 배열 생성

  for (let i = 0; i < 6; i++) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;

    // 일단 배열에 난수 대입
    lotto[i] = randomNumber;

    // 앞에 중복되는 숫자 있는지 확인
    for (let x = 0; x < i; x++) {
      // 중복 검사, i 번째 저장하려는 값이 x 번째에 존재하는가? 
      if (lotto[x] === lotto[i]) {
        i--;
        break; //불필요한 중복 검사 멈춤! (효율 UP)
      // i 값을 1 감소
      // -> 바깥쪽 for 문 증감 i++에 의해 다시 1 증가
      // => 중복값 없으면 다음 index로 이동
      // => 중복값 있으면 현재 index에 머물기
      }
    }

  }
  // 기본 sort는 앞 자리만 보고 정렬함
  // 배열 내 숫자 정렬 방법
  lotto.sort(function(a, b) {return a - b;});
  console.log(lotto);


  document.getElementById('result6').innerText = lotto;
}

/** 점심 메뉴 뽑기 */
function selectMenu() {
  // 점심 메뉴로 초기화된 배열 생성
  const menus = ['라면 + 김밥', '제육볶음'
                , '치즈 돈까스', '샐러드', '맘스 터치'
                , '알탕', '닭갈비', '냉면', '콩국수', '쭈꾸미'
                , '초밥', '김치찌개', '백반'];

  // menus 배열에서 랜덤으로 하나 뽑아서
  // 화면 #menuResult 에 출력하기       0 <= x < 13
  const randomNumber = Math.floor(Math.random() * menus.length);

  document.getElementById('menuResult').innerText = menus[randomNumber];
}

/** 2 차원 배열 확인 ! */
function check7() {
  // 2차원 배열 선언 및 초기화
  const arr = [
    [10, 20, 30, 40], // 0 행 arr[0]
    [50, 60, 70, 80], // 1 행 arr[1]
    [90, 100]         // 2 행 arr[2]
  ];

  console.log('2 차원 배열 arr 의 길이(행의 개수) : ', arr.length);
  console.log('arr 의 0 번째 인덱스 길이 : ', arr[0].length); // 4
  console.log('arr 의 1 번째 인덱스 길이 : ', arr[1].length); // 4
  console.log('arr 의 2 번째 인덱스 길이 : ', arr[2].length); // 2

  for (let i = 0; i < arr.length; i++) {
    //console.log(arr[i]);

    let str = '';

    // arr[i] 요소에 저장된 배열의 모든 요소 접근
    for (let j = 0; j < arr[i].length; j++){
      // arr[i].length : i번째 요소(배열)의 길이 
      // -> 4,4,2 순서
      str += `(${arr[i][j]}), `;
    }
    console.log(str);
  }
}

/** 2 차원 배열 확인 2 */
function check8() {
  // 4행 4열 짜리 2차원 배열에 0 ~ 99 사이 난수 배치
  const arr = [];

  for (let row = 0; row < 4; row++) {
    arr[row] = []; // 행 생성
    for (let col = 0; col < 4; col++) {
      const randomNumber = Math.floor(Math.random() * 100);
      // 2차원 배열에 대입
      arr[row][col] = randomNumber;
    }
    console.log(arr[row]);
  }

  // 콘솔창 출력용 
/*   for (let row = 0; row < arr.length; row++) {
    let str = '';
    for (let col = 0; col < arr[row].length; col++) {
      str +=`${arr[row][col]}, `;
    }
    console.log(str);
  } */

  const search = Number(prompt('찾으려는 값 입력'));

  for (let row = 0; row < arr.length; row++) {
    for (let col = 0; col < arr[row].length; col++) {
      if (arr[row][col] === search){
        console.log(`${search} 는 ${row} 행 ${col} 열에 있습니다.`);
      }
    }
  }
}
