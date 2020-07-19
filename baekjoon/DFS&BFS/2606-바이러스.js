const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const computers = Number(input[0]);
const edgesLength = Number(input[1]);

const getEdges = (edgesInputs) => {
  const edgesArr = [];
  edgesInputs.forEach((edgeInput) => {
    const edge = edgeInput
      .trim()
      .split(" ")
      .map((element) => Number(element));
    edgesArr.push(edge);
  });
  return edgesArr;
};

const edges = getEdges(input.slice(2, input.length));

const excuteBFS = (edges, edgesLength) => {
  const queue = [1];
  const visited = Array(computers + 1).fill(false);

  while (queue.length) {
    const startComputer = queue.shift();
    for (let index = 0; index < edgesLength; index++) {
      const [computer1, computer2] = edges[index];
      if (computer1 === startComputer && !visited[computer2]) {
        queue.push(computer2);
        visited[computer2] = true;
      }
      if (computer2 === startComputer && !visited[computer1]) {
        queue.push(computer1);
        visited[computer1] = true;
      }
    }
  }
  return visited;
};
const result = excuteBFS(edges, edgesLength);
let computerCount = 0;
result.forEach((element) => {
  if (element) computerCount++;
});
console.log(computerCount - 1);
