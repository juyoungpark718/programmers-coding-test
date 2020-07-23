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
