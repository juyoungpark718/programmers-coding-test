function solution(dartResult) {
  var answer = 0;
  let resultNum = [];
  let num = 0;
  while (dartResult.length) {
    let e = dartResult.unshift();
    if (!Number(e).isNaN) {
      if (num === 0) {
        num = e;
      } else {
        resultNum.push(num);
        num = 0;
      }
    }
    if ("SDT".includes(e)) {
      if (e === "S") num = Math.pow(num, 1);
      if (e === "D") num = Math.pow(num, 2);
      if (e === "T") num = Math.pow(num, 3);
    }
  }

  return answer;
}

/*
dartResult가 0이 될때까지 숫자를 뽑음.
if(숫자면){
    숫자
}
if(S,D,T){
    숫자^1or2or3
}
if(*,#){
    현재 숫자 * 2 or -1
    if(전에 숫자 존재){
        전에 숫자 * 2 or -1
    }
}
*/
