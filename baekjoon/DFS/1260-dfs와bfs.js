const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [vertexsLength, _, START] = input[0]
  .trim()
  .split(" ")
  .map((element) => Number(element));

const getEdges = (input) => {
  const edges = [];
  input.forEach((edge) => {
    const [start, end] = edge.split(" ").map((element) => Number(element));
    edges.push([start, end]);
  });
  return edges;
};

const excuteDFS = (edges, start, vertexsLength) => {
  const visited = Array(vertexsLength + 1).fill(false);
  const stack = [start];
  const dfs = [];
  while (stack.length !== 0) {
    let startEdge = stack.pop();
    if (!visited[startEdge]) dfs.push(startEdge);
    visited[startEdge] = true;
    let connectEdges = [];
    edges.forEach((edge) => {
      if (edge[0] === startEdge && !visited[edge[1]]) {
        connectEdges.push(edge[1]);
      } else if (edge[1] === startEdge && !visited[edge[0]]) {
        connectEdges.push(edge[0]);
      }
    });
    connectEdges.sort((a, b) => b - a);
    stack.push(...connectEdges);
  }
  return dfs;
};

const excuteBFS = (edges, start, vertexsLength) => {
  const visited = Array(vertexsLength + 1).fill(false);
  const queue = [start];
  const bfs = [];
  while (queue.length !== 0) {
    let startEdge = queue.shift();
    if (!visited[startEdge]) bfs.push(startEdge);
    visited[startEdge] = true;
    let connectEdges = [];
    edges.forEach((edge) => {
      if (edge[0] === startEdge && !visited[edge[1]]) {
        connectEdges.push(edge[1]);
      } else if (edge[1] === startEdge && !visited[edge[0]]) {
        connectEdges.push(edge[0]);
      }
    });
    connectEdges.sort((a, b) => a - b);
    queue.push(...connectEdges);
  }
  return bfs;
};

const print = (result) => {
  let resultString = "";
  result.forEach((element) => {
    resultString += `${element} `;
  });
  console.log(resultString);
};

const edges = getEdges(input.slice(1, input.length));
const resultDFS = excuteDFS(edges, START, vertexsLength);
const resultBFS = excuteBFS(edges, START, vertexsLength);

print(resultDFS);
print(resultBFS);
