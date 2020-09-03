const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const target = +input[0];

const dp = Array(target + 1);
dp[0] = 0;
dp[1] = 0;
dp[2] = 1;
for (let i = 3; i <= target; i++) {
  dp[i] = dp[i - 1] + 1;
  if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
  if (i % 3 === 0) dp[i] = Math.min(dp[i / 3] + 1, dp[i]);
}

console.log(dp[target]);
