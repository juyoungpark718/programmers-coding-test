function Node(data) {
  this.data = data;
  this.next = null;
}
function Queue() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}

Queue.prototype.peek = function () {
  return this.head.data;
};

Queue.prototype.enqueue = function (data) {
  var newNode = new Node(data);
  this.size += 1;
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
  } else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

Queue.prototype.dequeue = function () {
  var newNode;
  if (this.head !== null) {
    newNode = this.head.data;
    this.head = this.head.next;
    this.size -= 1;
  }
  return newNode;
};

function solution(gems) {
  var answer = [];
  let kinds = new Set();
  gems.forEach((e) => kinds.add(e));
  let check = new Map();
  let arr = new Queue();
  let start = 0;
  let startPoint = 0;
  let result = Infinity;
  for (let i = 0; i < gems.length; i++) {
    if (!check.has(gems[i])) check.set(gems[i], 1);
    else check.set(gems[i], check.get(gems[i]) + 1);
    arr.enqueue(gems[i]);
    startPoint = remove(arr, check, startPoint);
    if (check.size == kinds.size && result > arr.size) {
      result = arr.size;
      start = startPoint;
    }
  }
  return [start + 1, start + result];
}

function remove(arr, check, start) {
  while (true) {
    let el = arr.peek();
    if (check.get(el) > 1) {
      check.set(el, check.get(el) - 1);
      arr.dequeue();
      ++start;
    } else {
      break;
    }
  }
  return start;
}

// function solution(gems) {
//   const kinds = new Set(gems).size;

//   const check = new Map();
//   const result = [];
//   gems.forEach((gem, i) => {
//     check.delete(gem);
//     check.set(gem, i);
//     if (check.size === kinds) {
//       result.push([check.values().next().value + 1, i + 1]);
//     }
//   });

//   result.sort((a, b) => {
//     if (a[1] - a[0] === b[1] - b[0]) {
//       return a[0] - b[0];
//     }
//     return a[1] - a[0] - (b[1] - b[0]);
//   });

//   return result[0];
// }
