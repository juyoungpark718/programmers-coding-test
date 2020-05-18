function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    let total = 0;
    for (let j = i; j <= n; j++) {
      if (total === n) answer++;
      if (total > n) break;
      total += j;
    }
  }
  answer = answer + 1;
  return answer;
}
