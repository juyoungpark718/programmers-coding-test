const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(e => +e);
const coins = input.slice(1).map(e => +e);

const dp = Array(k+1).fill(0);

dp[0] = 1;

for(let i=0 ; i<n ; i++){
    for(let j=1; j<k+1 ; j++){
        if(j-coins[i] >= 0){
            dp[j] += dp[j-coins[i]];
            console.log(dp);
        }
    }
}

console.log(dp[k]);
