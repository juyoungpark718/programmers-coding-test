const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(e => +e);
const [tc, ...tp] = input[1].split(" ").map(e => +e);
let parties = input.slice(2, 2+M).map(e => e.split(" ").map(el => +el));
const parents = Array.from(Array(N+1), (_, i) => i);

const findGroup = (target) => {
  if(target === parents[target]) return target;
  parents[target] = findGroup(parents[target]);
  return parents[target];
}

const union = (x, y) => {
  const groupX = findGroup(x);
  const groupY = findGroup(y);
  parents[groupY] = groupX;
}

const sameGroup = (x, y) => {
  const groupX = findGroup(x);
  const groupY = findGroup(y);
  if(groupX === groupY) return true;
  return false;
}


for(let i=0 ; i<M ; i++){
  const [length, ...rest] = parties[i];
  const first = rest[0];
  for(let j=1 ; j<rest.length ; j++){
    const second = rest[j];
    union(first, second);
  }
}
let result = 0;
for(let i=0 ; i<M ; i++){
  const [c, ...rest] = parties[i];
  let flag = true;
  for(let j=0 ; j<rest.length ; j++){
    if(!flag) break;
    for(let k=0 ; k<tp.length ; k++){
      if(sameGroup(tp[k], rest[j])){
        flag = false;
        break;
      }
    }
  }
  if(flag){
    result++;
  }
}

log(result);