function createTable() {

  const startInput = document.getElementById('start');
  const endInput = document.getElementById('end');
  const theadRow = document.getElementById("thead-row");
  const tbody = document.getElementById("tbody");

  theadRow.innerHTML = '';
  tbody.innerHTML = '';


  const start = Number(startInput.value);
  const end = Number(endInput.value);


  for(let dan = start; dan <= end; dan++) {
    theadRow.innerHTML += `<th>${dan}단</th> `;
  }

  for(let num = 1; num <= 9; num++){
    let tr = ` <tr>`; // 한 줄을 저장할 변수
    
    //tbody.innerHTML += `<tr>`;  자동으로 </tr> 태그가 생성되어 이상한 느낌으로 작동?
    //                            이런 방식으로 모든 글을 한번에 받아 끝에서 출력하려면
    //                            전체 글을 한번에 저장한 변수를 만들어 마지막에  tbody.innerHTML 에 대입

    for(let dan = start; dan <= end; dan++){
      tr += `<td>${dan} X ${num} = ${dan * num}</td>`;
      //tbody.innerHTML += `<td>${dan} X ${num} = ${dan * num}</td>`;
    }

    tr += `</tr> `;
    //tbody.innerHTML += `</tr>`;       

    tbody.innerHTML += tr;
  }

}