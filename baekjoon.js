const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const vertex = +input[0];
let edge = input.slice(1, vertex+1).map(e => e.split(" ").map(el => +el));
edge = edge.reduce((acc, val) => {
  const [index, ...rest] = val;
  acc[index-1] = val;
  return acc;
},[]);
const visited = Array(vertex).fill(false);
let d = 0;
let node = 1;

const dfs = (start, acc, visited) => {
  visited[start-1] = true;
  if(d < acc){
    d = acc;
    node = start;
  }
  for(let i=1 ; i<edge[start-1].length ; i += 2){
    if(edge[start-1][i] === -1) break;
    if(visited[edge[start-1][i]-1]) continue;
    dfs(edge[start-1][i], acc+edge[start-1][i+1], visited);
  }
}

dfs(1, 0, [...visited]);
dfs(node, 0, [...visited]);
log(d);