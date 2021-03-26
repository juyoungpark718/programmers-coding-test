const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");
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

const city = +input[0];
const bus = +input[1];

if(city === 1){
  console.log(0);
  return;
}
if(bus === 1){
  const [x, y, cost] = input[2].split(" ").map((e) => +e);
  console.log(cost);
  return;
}
let paths = [];
for (let i = 2; i < bus + 2; i++) {
  paths.push(input[i].split(" ").map((e) => +e));
}

const [startPoint, endPoint] = input[bus + 2].split(" ").map((e) => +e);

let adj = Array.from(Array(city + 1), () => Array());

paths.forEach(([start, end, cost]) => {
  adj[start].push([end, cost]);
});


let heap = new Heap();
let costs = Array(city+1).fill(Infinity);
costs[startPoint] = 0;
heap.add([startPoint, 0]);
while(heap.size()){
  const [s, c] = heap.pop();
  if(costs[s] !== c) continue;
  for(let i=0 ; i<adj[s].length ; i++){
    const [end, cost] = adj[s][i];
    if(costs[end] > cost + c){
      costs[end] = cost + c;
      heap.add([end, costs[end]]);
    }
  }
}

log(costs[endPoint]);