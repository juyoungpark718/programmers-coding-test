const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(e => +e);
if(N === 1 && M === 1){
  log(1);
  process.exit(0);
}
const map = input.slice(1, N+1).map(e => [...e].map(el => +el));

const dx = [1,-1,0,0];
const dy = [0,0,1,-1];

const visited = [];

for(let i=0 ; i<N ; i++){
  const temp = [];
  for(let j=0 ; j<M ; j++){
    temp.push([false,false]);
  }
  visited.push(temp);
}

visited[0][0][0] = true;

const stack = [[0,0,1,1]];
let arrived = Infinity;
while(stack.length){
  let [x,y,b,cost] = stack.shift();
  if(x === M-1 && y === N-1){
    arrived = Math.min(arrived, cost);
    continue;
  }
  for(let i=0 ; i<4 ; i++){
    const nx = x + dx[i];
    const ny = y + dy[i];
    if(nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
    if(b === 1 && map[ny][nx] === 1){
      visited[ny][nx][b] = true;
      stack.push([nx,ny,b-1,cost+1]);
    }
    if(map[ny][nx] === 0 && visited[ny][nx][b] === false){
      visited[ny][nx][b] = true;
      stack.push([nx,ny,b,cost+1]);
    }
  }
}

log(arrived === Infinity ? -1 : arrived);