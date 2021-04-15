const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const N = +input[0];
const papers = input.slice(1, N+1).map(e => e.split(" ").map(el => +el));
const result = [0,0,0];

const check = (arr) => {
  if(arr.every(e => e.every(el => el === -1))) return 0;
  if(arr.every(e => e.every(el => el === 0))) return 1;
  if(arr.every(e => e.every(el => el === 1))) return 2;
  return null;
}

const divideCol = (arr) => {
  const len = arr[0].length / 3;
  const result = [];
  for(let i=1 ; i<=3 ; i++){
    let temp = [];
    for(let j=0 ; j<arr.length ; j++){
      temp.push(arr[j].slice(len*(i-1), len*i));
    }
    result.push(temp);
  }
  return result;
}

const divide = (arr) => {
  const len = arr.length / 3;
  const arr1 = arr.slice(0, len);
  const arr2 = arr.slice(len, len*2);
  const arr3 = arr.slice(len*2, len*3);
  return [...divideCol(arr1), ...divideCol(arr2), ...divideCol(arr3)];
}
const count = (arr, result) => {
  const idx = check(arr);
  if(idx !== null){
    result[idx]++;
    return;
  }
  divide(arr).forEach(e => count(e, result));
}

count(papers, result);
result.forEach(e => log(e));