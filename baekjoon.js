var fs = require("fs");
// var s = fs.readFileSync('/dev/stdin').toString().split('');
var s = fs.readFileSync("./stdin").toString().split("");
s.sort((a, b) => a - b);
let visited = Array(11).fill(false);
let current = Array(11).fill("");
const al = duplicate(s);
let result = 0;
for (let i = 0; i < s.length; i++) {
  visited[i] = true;
  backtracking(i, 0);
  visited[i] = false;
}
al.forEach((e) => {
  if (e > 1) {
    result /= fac(e);
  }
});
console.log(result);

function backtracking(idx, d) {
  current[d] = s[idx];
  if (d === s.length - 1) {
    if (isPromising(current)) ++result;
    return;
  }
  for (let i = 0; i < s.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      backtracking(i, d + 1);
      visited[i] = false;
    }
  }
}

function isPromising(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return false;
  }
  return true;
}

function fac(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function duplicate(s) {
  let al = Array(26).fill(0);
  s.forEach((e) => {
    ++al[e.charCodeAt(0) - "a".charCodeAt(0)];
  });
  return al;
}
