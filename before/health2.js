function solution(n, lost, reserve) {
  var answer = n - lost.length;
  var already = [];
  lost.map((e) => {
    if (reserve.some((el) => e === el)) {
      already.push(e);
      answer++;
    }
  });
  for (var i = 0; i < lost.length; i++) {
    if (!already.some((e) => e === lost[i])) {
      for (var j = 0; j < reserve.length; j++) {
        if (
          (reserve[j] === lost[i] + 1 || reserve[j] === lost[i] - 1) &&
          !already.some((e) => e === reserve[j])
        ) {
          already.push(lost[i]);
          answer++;
          already.push(reserve[j]);
          break;
        }
      }
    }
  }
  return answer;
}

solution(10, [2, 3, 5, 7], [4, 8]);
