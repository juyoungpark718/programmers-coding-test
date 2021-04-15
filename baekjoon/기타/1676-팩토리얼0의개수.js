const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");
const N = +input[0];
const num = String(Array(N).fill(0).map((_,i) => BigInt(i+1)).reduce((a,b) => a*b, BigInt(1)));

let count = 0;
for(let i=num.length-1 ; i>=0 ; i--){
  if(num[i] !== "0") break;
  count++;
}

log(count);

