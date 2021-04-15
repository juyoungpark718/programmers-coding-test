const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const pre = (input) => {
  const color = [];
  input.slice(1).map(value => color.push(value.split(" ").map(e => +e)));
  return [+input[0], color];
}

const log = console.log;
const curry = f => (a,...bs) => bs.length ? f(a,...bs) : (...bs) => f(a, ...bs);

const _reduce = curry(function(f,iter,acc){
  if(arguments.length === 2){
    iter = iter[Symbol.iterator]();
    acc = iter.next().value;
  }
  for(const a of iter){
    acc = f(acc, a);
  }
  return acc;
});

const _go = (a, ...bs) => _reduce((a,f) => f(a),bs, a)

const check = (m,sec,color,base) => {
  let [x,y] = base;
  x += sec[0]*m;
  y += sec[1]*m;
  const temp = color[y][x];
  for(let j=0 ; j<m ; j++){
    for(let i=0 ; i<m ; i++){
      const dx = x+i;
      const dy = y+j;
      if(color[dy][dx] !== temp) return [false,[x, y]];
    }
  }
  return [temp,];
}

const divideAndConquer = ([N, color]) => {
  const answer = [0,0];
  const sections = [[0,0],[0,1],[1,0],[1,1]];
  (function recur(N,color,answer,base){
    const dividedN = N / 2;
    if(dividedN < 1) return;
    sections.map(sec => {
      const [paper, rebase] = check(dividedN,sec,color,base);
      typeof paper === "number" ? ++answer[paper] : recur(dividedN,color,answer,rebase);
    })
  })(N,color,answer,[0,0]);
  return answer;
}
 
_go(
  input,
  pre,
  divideAndConquer,
  arr => log(arr.join("\n").trim())
)