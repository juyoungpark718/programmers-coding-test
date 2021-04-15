const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(e => +e);
const paths = input.slice(1, M+1).map(e => e.split(" ").map(el => +el));
const visited = Array(N+1).fill(Infinity);
visited[1] = 0;

for(let i=1 ; i<=N ; i++){
  for(let j=0 ; j<paths.length ; j++){
    const [start, end, cost] = paths[j];
    if(visited[start] === Infinity) continue;
    const d = visited[start] + cost;
    if(visited[end] > d) visited[end] = d;
  }
}

for(let i=0 ; i<paths.length ; i++){
  const [start, end, cost] = paths[i];
  if(visited[start] === Infinity) continue;
  const d = visited[start] + cost;
  if(visited[end] > d){
    log(-1);
    return;
  }
}

for(let i=2 ; i<visited.length ; i++){
  visited[i] !== Infinity ? log(visited[i]) : log(-1);
}