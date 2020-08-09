var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
var input = fs.readFileSync("../../stdin").toString().trim().split("\n");
const [vertexs, edgesLen] = input[0].split(" ").map((e) => +e);
const start = +input[1];
const edges = input.slice(2).map((e) => e.split(" ").map((el) => +el));

class Heap {
  constructor() {
    this.arr = [0];
  }

  add(value) {
    this.arr.push(value);
    this._heapify();
  }

  pop() {
    if (this.size() === 0) return -1;
    const temp = this.arr.pop();
    const returnValue = this.arr[1];
    if (this.size() === 0) return temp;
    this.arr[1] = temp;
    this._heapify2();
    return returnValue;
  }

  size() {
    return this.arr.length - 1;
  }

  _heapify() {
    const heap = this.arr;
    let child = heap.length - 1;
    let parent = Math.floor(child / 2);
    while (parent !== 0) {
      if (heap[parent][1] <= heap[child][1]) break;
      const temp = heap[parent];
      heap[parent] = heap[child];
      heap[child] = temp;
      child = parent;
      parent = Math.floor(child / 2);
    }
  }
  _heapify2() {
    const heap = this.arr;
    let parent = 1;
    let left = parent * 2;
    let right = parent * 2 + 1;

    while (heap[left] !== undefined || heap[right] !== undefined) {
      if (heap[right] === undefined) {
        if (heap[left][1] > heap[parent][1]) break;
        this._change(left, parent, heap);
        break;
      }
      if (heap[left][1] <= heap[right][1]) {
        if (heap[left][1] > heap[parent][1]) break;
        [parent, left, right] = this._change(left, parent, heap);
      } else {
        if (heap[right][1] > heap[parent]) break;
        [parent, left, right] = this._change(right, parent, heap);
      }
    }
  }

  _change(child, parent, heap) {
    const temp = heap[parent];
    heap[parent] = heap[child];
    heap[child] = temp;
    parent = child;
    const left = parent * 2;
    const right = parent * 2 + 1;
    return [parent, left, right];
  }
}

const setArray = (n, fillValue) => Array(n + 1).fill(fillValue);

const dijkstraHeap = (vertexs, edges, start) => {
  const adj = Array(vertexs + 1);
  edges.forEach((edge) => {
    if (!adj[edge[0]]) adj[edge[0]] = [];
    adj[edge[0]].push([edge[1], edge[2]]);
  });
  const distance = setArray(vertexs, Infinity);

  const heap = new Heap();
  let startVertex = [start, 0];
  heap.add(startVertex);
  distance[start] = 0;

  while (heap.size()) {
    const [index, value] = heap.pop();
    if (!adj[index]) continue;
    if (distance[index] < value) continue;
    adj[index].forEach((edge) => {
      const [vertex, value] = edge;
      if (distance[vertex] <= distance[index] + value) return;
      distance[vertex] = distance[index] + value;
      heap.add([vertex, distance[vertex]]);
    });
  }
  return distance;
};

const result = dijkstraHeap(vertexs, edges, start);
result.forEach((e, id) => {
  if (id === 0) return;
  e === Infinity ? console.log("INF") : console.log(e);
});
