const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [M, N] = input[0].split(" ").map(e => +e);
const space = Array.from(Array(M), () => Array(N).fill(0));
const cheeses = [];
let count = 0;
const dx = [1,-1,0,0];
const dy = [0,0,1,-1];
input.slice(1, M+1).map((e, y) => e.split(" ").map((el, x) => {
  el = Number(el);
  if(el === 1){
    count++;
    space[y][x] = 1
    cheeses.push([y, x]);
  }
}));

const markAir = () => {
  const queue = [[0,0]];
  const visited = Array.from(Array(M), () => Array(N).fill(false));
  while(queue.length){
    const [y, x] = queue.pop();
    for(let i=0 ; i<4 ; i++){
      const nx = x + dx[i];
      const ny = y + dy[i];
      if(nx < 0 || ny < 0 || nx >= N || ny >= M || visited[ny][nx] || space[ny][nx] === 1) continue;
      visited[ny][nx] = true;
      space[ny][nx] = -1;
      queue.push([ny, nx]);
    }
  }
}

const meltingCheese = (y, x) => {
  let air = 0;
  for(let i=0 ; i<4 ; i++){
    const ny = y + dy[i];
    const nx = x + dx[i];
    if(ny < 0 || nx < 0 || ny >= M || nx >= N || space[ny][nx] === 1 || space[ny][nx] === 0) continue;
    air++;
  }
  return air >= 2 ? true : false;
}

let time = 0;

while(count){
  markAir();
  let meltedCheese = [];
  for(let i=0 ; i<cheeses.length ; i++){
    const [y, x] = cheeses[i];
    if(space[y][x] === -1) continue;
    if(meltingCheese(y, x)){
      meltedCheese.push([y, x]);
      count--;
      continue;
    }
  }
  meltedCheese.forEach(([y, x]) => space[y][x] = -1);
  time++;
}

log(time);