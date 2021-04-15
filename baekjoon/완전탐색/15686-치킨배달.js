const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(e => +e);
const chickens = [];
const houses = [];
const map = input.slice(1, N+1).map((e, row) => e.split(" ").map((el, col) => {
  if(+el === 1) houses.push([row, col]);
  if(+el === 2) chickens.push([row, col]);
  return +el
}));

const getDistance = (point1, point2) => Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
const selected = [];
let result = Infinity;
const dfs = (index, count) => {
  if(count === M){
    result = Math.min(result, houses.map(hou => Math.min(...selected.map(chic => getDistance(chic, hou)))).reduce((a,b) => a+b, 0));
    return;
  }

  for(let i=index ; i<chickens.length ; i++){
    selected.push(chickens[i]);
    dfs(i+1, count+1);
    selected.pop();
  }
}
dfs(0, 0);
log(result);
