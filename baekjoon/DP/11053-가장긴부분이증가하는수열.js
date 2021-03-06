const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const len = +input[0];
const arr = input[1].split(" ").map((e) => +e);

const dp = Array(len);

dp[0] = 1;
for (let i = 1; i < len; i++) {
  let max = 0;
  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) {
      max = Math.max(dp[j] + 1, max);
    }
  }
  dp[i] = max ? max : 1;
}

console.log(Math.max(...dp));
// console.log(dp);
