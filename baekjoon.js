var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = fs.readFileSync("./stdin").toString().split("\n");
let arr = [];
let numSet = new Set();
input.forEach((e) => arr.push(e.split(" ")));
const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(arr, i, j, 0, numSet, "");
  }
}

function dfs(arr2, x, y, dep, numSet, total) {
  let newTotal = total + arr2[x][y];
  dep++;
  if (dep === 6) {
    numSet.add(Number(newTotal));
    return;
  }
  for (let i = 0; i < 4; i++) {
    let nx = x + dx[i];
    let ny = y + dy[i];
    if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
    dfs(arr2, nx, ny, dep, numSet, newTotal);
  }
}
console.log(numSet.size);
