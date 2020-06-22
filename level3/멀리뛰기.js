function solution(n) {
  var answer = 0;
  if (n === 1) return 1;
  let dp = Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
  }
  answer = dp[dp.length - 1];
  return answer;
}

/*
1 2 3 4 5
1 2 3 5 8
*/
