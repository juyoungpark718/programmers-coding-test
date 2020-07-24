const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
// const input = fs.readFileSync("./stdin").toString().trim().split(" ");

const [
  buildingFloor,
  currentFloor,
  targetFloor,
  up,
  down,
] = input.map((element) => Number(element));

const visited = Array(1000001).fill(-1);

const excuteBFS = () => {
  const queue = [currentFloor];
  visited[currentFloor] = 0;
  while (queue.length) {
    const currentFloor = queue.shift();
    if (
      currentFloor + up === targetFloor ||
      currentFloor - down === targetFloor
    ) {
      console.log(visited[currentFloor] + 1);
      return;
    }

    if (
      currentFloor + up <= buildingFloor &&
      visited[currentFloor + up] === -1
    ) {
      visited[currentFloor + up] = visited[currentFloor] + 1;
      queue.push(currentFloor + up);
    }

    if (currentFloor - down > 0 && visited[currentFloor - down] === -1) {
      visited[currentFloor - down] = visited[currentFloor] + 1;
      queue.push(currentFloor - down);
    }
  }
  console.log("use the stairs");
};

if (currentFloor === targetFloor) {
  console.log(0);
  process.exit(0);
}
excuteBFS();
