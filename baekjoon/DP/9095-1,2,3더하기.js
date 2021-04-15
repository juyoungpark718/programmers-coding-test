const log = console.log;
const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const T = +input[0];
const nums = input.slice(1, T+1).map(e => +e);
const dp = [0, 1, 2, 4];

for(let i=4 ; i < 11 ; i++){
  dp[i] = dp[i-3] + dp[i-2] + dp[i-1];
}

log(dp);

// const log = console.log;
// const fs = require("fs");
// // const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

// const T = +input[0];
// const nums = input.slice(1, T+1).map(e => +e);

// const dfs = (target, current) => {
//   const count = [0];
//   const counting = (target, current, count) => {
//     if(target < current) return;
//     if(target === current){
//       count[0]++;
//       return;
//     }
//     Array(3).fill(0).forEach((_, i) => counting(target, current+i+1, count));
//   }
//   counting(target, current, count);
//   return count[0];
// }

// nums.forEach(e => log(dfs(e, 0)));
