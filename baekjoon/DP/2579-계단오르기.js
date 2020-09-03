var fs = require("fs");
var input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((e) => parseInt(e));
// var input = fs
//   .readFileSync("./stdin")
//   .toString()
//   .split("\n")
//   .map((e) => parseInt(e));
let n = input[0];
let cost = input.filter((e, id) => id !== 0);
let dp = Array(n).fill(0);
dp[0] = cost[0];
dp[1] = cost[0] + cost[1];
dp[2] = Math.max(cost[0] + cost[2], cost[1] + cost[2]);

for (let i = 3; i < n; i++) {
  dp[i] = Math.max(dp[i - 3] + cost[i - 1] + cost[i], dp[i - 2] + cost[i]);
}

console.log(dp[n - 1]);
