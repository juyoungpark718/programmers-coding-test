const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const N = +input[0];
const sessions = input.slice(1, N+1).map(str => str.split(" ").map(e => +e));
let answer = 0;
sessions.sort((a,b) => {
  if(a[1] === b[1]) return a[0]-b[0];
  return a[1]-b[1];
});

let prev = sessions[0];
for(let i=1 ; i<sessions.length ; i++){
  const [, prevE] = prev;
  const [start, end] = sessions[i];
  if(prevE <= start){
    answer++;
    prev = sessions[i];
  }
}

log(answer+1);