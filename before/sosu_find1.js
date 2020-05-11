function solution(n) {
  var answer = 0;
  for (var i = 2; i <= n; i++) {
    var flag = true;
    for (var j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        flag = false;
        break;
      }
    }
    if (flag) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(1000));
