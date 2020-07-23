const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// const input = fs.readFileSync("./stdin").toString().trim().split(" ");

const dx = [1, -1];
const [subinPosition, brothoerPosition] = input.map((position) =>
  Number(position)
);
if (subinPosition === brothoerPosition) {
  console.log(0);
  process.exit(0);
}

const visited = Array(100001).fill(-1);

const excuteBFS = () => {
  const queue = [];
  queue.push(subinPosition);
  visited[subinPosition] = 0;
  while (queue.length !== 0) {
    const position = queue.shift();
    for (let i = 0; i < 3; i++) {
      let nx = 0;
      if (i === 2) nx = position * 2;
      else nx = position + dx[i];
      if (nx === brothoerPosition) {
        console.log(visited[position] + 1);
        return;
      }
      if (nx < 0 || nx > 100001) continue;
      if (visited[nx] !== -1) continue;
      visited[nx] = visited[position] + 1;
      queue.push(nx);
    }
  }
};

excuteBFS();

/*
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

const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("./stdin").toString().trim().split(" ");

const dx = [1, -1];
const [subinPosition, brothoerPosition] = input.map((position) =>
  Number(position)
);

const visited = Array(100001).fill(false);

const excuteBFS = () => {
  const queue = new Queue();
  queue.insert([subinPosition, 0]);
  visited[subinPosition] = true;
  while (queue.length !== 0) {
    const [position, time] = queue.shift().value;
    if (position === brothoerPosition) {
      console.log(time);
      return;
    }
    for (let i = 0; i < 3; i++) {
      let nx = 0;
      if (i === 2) nx = position * 2;
      else nx = position + dx[i];
      if (nx < 0 || nx > 100001) continue;
      if (visited[nx]) continue;
      visited[nx] = true;
      queue.insert([nx, time + 1]);
    }
  }
};

excuteBFS();
*/

/*
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

const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("./stdin").toString().trim().split(" ");

const [subinPosition, brothoerPosition] = input.map((position) =>
  Number(position)
);
if (subinPosition === brothoerPosition) {
  console.log(0);
  process.exit(0);
}

const visited = Array(100001).fill(-1);

const excuteBFS = () => {
  const queue = new Queue();
  queue.insert(subinPosition);
  visited[subinPosition] = 0;
  while (queue.length !== 0) {
    const position = queue.shift().value;
    if (
      position + 1 === brothoerPosition ||
      position - 1 === brothoerPosition ||
      position * 2 === brothoerPosition
    ) {
      console.log(visited[position] + 1);
      return;
    }
    if (position + 1 <= 100000 && visited[position + 1] === -1) {
      visited[position + 1] = visited[position] + 1;
      queue.insert(position + 1);
    }
    if (position - 1 >= 0 && visited[position - 1] === -1) {
      visited[position - 1] = visited[position] + 1;
      queue.insert(position - 1);
    }
    if (position * 2 <= 100000 && visited[position * 2] === -1) {
      visited[position * 2] = visited[position] + 1;
      queue.insert(position * 2);
    }
  }
};

excuteBFS();

*/
