const in1 = document.getElementById('input1');
const in2 = document.getElementById('input2');
const result = document.getElementById('result');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');

function plus(){
  var v1 = Number(in1.value);
  var v2 = Number(in2.value);

  result.innerText = v1 + v2;
  return v1 + v2;
}

function  plus2(){
  var v2 = Number(in2.value);

  const aaa = plus();


  result2.innerText = aaa + v2;
}

function  plus3(){
  var v2 = Number(in2.value);

  const aaa = plus2();
  
  result3.innerText = aaa + v2;
}

