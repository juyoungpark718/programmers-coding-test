function solution(N) {
  var answer = 0;
  let dp = [0, 1, 2];
  if (N === 1) return 2;
  if (N === 2) return 8;
  answer += 10;
  for (let i = 3; i < N; i++) {
    dp.push(dp[i - 2] + dp[i - 1]);
    answer += dp[dp.length - 1] * 2;
  }
  return answer;
}
