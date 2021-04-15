const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const splited = input[0].split(/(\d+)/).filter(e => e);
let total = +splited[0];
let flag = false; 
let temp = 0;
for(let i=1 ; i<splited.length ; i++){
  if(splited[i] === "-" && !flag){
    flag = true;
    continue;
  }
  if(splited[i] === "-" && flag){
    total -= temp;
    temp = 0;
    continue;
  }
  if(splited[i-1] === "-" && !flag){
    total -= Number(splited[i]);
    continue;
  }
  if(splited[i] !== "+" && flag){
    temp += Number(splited[i]);
    continue;
  }
  if(splited[i] !== "+" && !flag){
    total += Number(splited[i]);
    continue;
  }
}
if(flag) total -= temp;
log(total);