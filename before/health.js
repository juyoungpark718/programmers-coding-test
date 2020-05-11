function solution(n, lost, reserve) {
  var answer = 0;
  var check = [];
  answer = n - lost.length;
  lost.map((e) => {
    var temp = reserve.findIndex((el) => e === el);
    if (temp >= 0) {
      reserve.splice(temp, 1);
      check.push(e);
      answer++;
    }
  });

  for (var i = 0; i < lost.length; i++) {
    if (!check.some((e) => lost[i] === e)) {
      for (var j = 0; j < reserve.length; j++) {
        if (reserve[j] - 1 === lost[i]) {
          reserve.splice(j, 1);
          answer++;
          break;
        }
        if (reserve[j] + 1 === lost[i]) {
          reserve.splice(j, 1);
          answer++;
          break;
        }
      }
    }
  }
  console.log(answer);
  return answer;
}
