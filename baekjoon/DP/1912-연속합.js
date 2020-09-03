const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const len = +input[0];
const arr = input[1].split(" ").map((e) => +e);

const dp = Array(len);
dp[0] = arr[0];
for (let i = 1; i < len; i++) {
  dp[i] = Math.max(arr[i], arr[i] + dp[i - 1]);
}

console.log(Math.max(...dp));
