const log = console.log;
const curry = f => (a,...bs) => bs.length ? f(a,...bs) : (...bs) => f(a,...bs);

const _reduce = (f, iter, acc) => {
  for(const a of iter){
    acc = f(acc,a);
  }
  return acc;
}

const _sort = curry((f, iter) => {
  const copy = [...iter]; 
  copy.sort(f);
  return copy;
});

const _join = curry((char,iter) => iter.join(char).trim());
const _count = (iter) => {
  const obj = {};
  for(const a of iter) obj[a] ? obj[a]++ : obj[a] = 1;  
  return obj;
};
const _duplicate = curry((count,obj) => {
  const res = [];
  for(const [key,value] of Object.entries(obj)){
    if(value >= count) res.push(key);
  }
  return res;
});
const _go = (a,...fs) => _reduce((a,f) => f(a), fs, a);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [N,M] = input[0].split(" ").map(e => +e);

_go(
  input.slice(1),
  _count,
  _duplicate(2),
  _sort((a,b) => a.localeCompare(b)),
  (iter) => log(`${iter.length}\n${_join("\n",iter)}`)
)