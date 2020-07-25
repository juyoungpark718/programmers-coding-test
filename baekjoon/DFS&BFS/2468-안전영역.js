const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];
// N*N 2차원배열
const N = Number(input[0]);

const getSafeArea = (inputs) => {
  const area = [];
  inputs.forEach((input) => {
    area.push(
      input
        .trim()
        .split(" ")
        .map((element) => Number(element))
    );
  });
  return area;
};

const safetyAreas = getSafeArea(input.slice(1, input.length));

const excuteBFS = () => {
  let maxSafety = 0;
  let height = 0;
  while (height <= 100) {
    let count = 0;
    let tempGroup = 0;
    let visited = Array.from(Array(N), () => Array(N).fill(false));
    while (count !== Math.pow(N, 2)) {
      let x = count % N;
      let y = Math.floor(count / N);
      let queue = [[x, y]];
      if (visited[y][x] || safetyAreas[y][x] <= height) {
        count++;
        continue;
      }
      visited[y][x] = true;
      while (queue.length !== 0) {
        const [currentX, currentY] = queue.shift();
        // 상하좌우
        for (let i = 0; i < 4; i++) {
          const nx = currentX + dx[i];
          const ny = currentY + dy[i];
          if (
            nx < 0 ||
            ny < 0 ||
            nx >= N ||
            ny >= N ||
            visited[ny][nx] ||
            safetyAreas[ny][nx] <= height
          )
            continue;
          visited[ny][nx] = true;
          queue.push([nx, ny]);
        }
      }
      tempGroup++;
      count++;
    }
    maxSafety = Math.max(tempGroup, maxSafety);
    height++;
  }
  return maxSafety;
};

console.log(excuteBFS());
