const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const every = (arr, kind) => {
  return arr.every(arr2 => arr2.every(e => e === kind));
}

const print = (arr) => arr.forEach(e => log(e.join("")));

const N = +input[0];
const papers = input.slice(1, N+1).map(e => e.split(" ").map(el => +el))

const count = [0,0];

const check = (papers, count) => {
  const one = every(papers, 1);
  const zero = every(papers, 0);
  if(one || zero){
    if(one) count[1]++;
    if(zero) count[0]++;
    return;
  }
  const len = papers.length;
  const half = len/2;
  const arr1 = papers.slice(0, half);
  const arr1Half1 = arr1.map(e => e.slice(0, half));
  const arr1Half2 = arr1.map(e => e.slice(half, len));
  const arr2 = papers.slice(half, len);
  const arr2Half1 = arr2.map(e => e.slice(0, half));
  const arr2Half2 = arr2.map(e => e.slice(half, len));
  check(arr1Half1,count);
  check(arr1Half2,count);
  check(arr2Half1,count);
  check(arr2Half2,count);
}

check(papers, count);

count.forEach(e => log(e));