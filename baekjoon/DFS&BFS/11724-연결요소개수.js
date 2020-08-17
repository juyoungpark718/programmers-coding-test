const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");
const [vertexLen, edgeLen] = input[0].split(" ").map((e) => +e);
const edges = input.slice(1).map((e) => e.split(" ").map((el) => +el));

const connected = Array(vertexLen + 1)
  .fill(0)
  .map((e) => Array());

edges.forEach((e) => {
  connected[e[0]].push(e[1]);
  connected[e[1]].push(e[0]);
});

const visited = Array(vertexLen + 1).fill(false);

let count = 0;
for (let i = 1; i < vertexLen + 1; i++) {
  if (visited[i] === true) continue;
  const queue = [i];
  while (queue.length) {
    const start = queue.pop();
    if (visited[start] === true) continue;
    visited[start] = true;
    queue.push(...connected[start]);
  }
  count++;
}

console.log(count);
