const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const N = +input[0];
const M = +input[1];
let brokens = Array(10).fill(false);
if(M !== 0){
  for(const a of input[2].split(" ").map(e => +e)){
    brokens[a] = true;
  }
}


const counting = (number) => {
  if(number === 0){
    if(brokens[0]) return 0;
    return 1;
  }
  let count = 0;
  while(number > 0){
    if(brokens[number % 10]) return 0;
    number = parseInt(number / 10);
    count++;
  }
  return count;
}

let result = Math.abs(N - 100);

for(let i=0 ; i<=1000000 ; i++){
  const count = counting(i);
  if(count > 0) result = Math.min(result, count + Math.abs(N - i));
}

log(result);