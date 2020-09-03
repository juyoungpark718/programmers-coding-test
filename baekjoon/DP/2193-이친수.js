const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const N = +input[0];

const dp = Array(N+1);
const DIVIDE = 1000000;

dp[0] = BigInt(0);
dp[1] = BigInt(1);
dp[2] = BigInt(1);

for(let i=3 ; i<N+1 ; i++){
    dp[i] = dp[i-2] + dp[i-1];
}

console.log(dp[N].toString());

