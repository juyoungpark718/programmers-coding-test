const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const dx = [1, -1, 0, 0, 0, 0];
const dy = [0, 0, 1, -1, 0, 0];
const dz = [0, 0, 0, 0, 1, -1];

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insert(value) {
    const node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  }

  shift() {
    const tempNode = this.head;
    this.head = this.head.next;
    this.length--;
    return tempNode;
  }
}

const [columnSize, rowSize, heightSize] = input[0]
  .trim()
  .split(" ")
  .map((element) => Number(element));
let totalTomato = 0;

const getTomatoBoxes = (inputs) => {
  const boxes = [];
  const existTomatoes = new Queue();
  for (let boxIndex = 0; boxIndex < inputs.length / rowSize; boxIndex++) {
    const box = [];
    for (let row = boxIndex * rowSize; row < (boxIndex + 1) * rowSize; row++) {
      const tomatoes = inputs[row]
        .trim()
        .split(" ")
        .map((tomato) => Number(tomato));
      tomatoes.forEach((tomato, column) => {
        if (tomato === 1)
          existTomatoes.insert([
            column,
            row - rowSize * boxIndex >= 0 ? row - rowSize * boxIndex : row,
            boxIndex,
            0,
          ]);
        if (tomato === 0) totalTomato++;
      });
      box.push(tomatoes);
    }
    boxes.push(box);
  }
  return [boxes, existTomatoes];
};

const [tomatoBoxes, existTomatoes] = getTomatoBoxes(
  input.slice(1, input.length)
);

const visited = Array.from(Array(heightSize), () =>
  Array.from(Array(rowSize), () => Array(columnSize).fill(false))
);

// 모든 토마토가 익은 것을 확인하기위한 변수
let tempTomato = 0;
let maxDay = 0;

const excuteBFS = () => {
  const queue = existTomatoes;
  while (queue.length !== 0) {
    const [x, y, z, day] = queue.shift().value;
    if (visited[z][y][x]) continue;
    maxDay = Math.max(maxDay, day);
    if (tomatoBoxes[z][y][x] === 0) tempTomato++;
    tomatoBoxes[z][y][x] = 1;
    visited[z][y][x] = true;
    //상하좌우 + z값
    for (let i = 0; i < 6; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      const nz = z + dz[i];
      if (
        nx < 0 ||
        ny < 0 ||
        nz < 0 ||
        nx >= columnSize ||
        ny >= rowSize ||
        nz >= heightSize
      )
        continue;
      if (tomatoBoxes[nz][ny][nx] !== 0 || visited[nz][ny][nx]) continue;
      queue.insert([nx, ny, nz, day + 1]);
    }
  }
};

excuteBFS();

if (totalTomato === tempTomato) {
  console.log(maxDay);
} else {
  console.log(-1);
}
