const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const [rowSize, columnSize] = input[0]
  .trim()
  .split(" ")
  .map((element) => Number(element));

const print = (arr) => {
  arr.forEach((els) => {
    let str = "";
    els.forEach((e) => (str += e));
    console.log(str);
  });
};

const getGlacierLand = (inputs) => {
  const graciersLand = [];
  const graciers = [];
  inputs.forEach((input, row) => {
    graciersLand.push(
      input
        .trim()
        .split(" ")
        .map((gracier, column) => {
          if (gracier > 0) graciers.push([column, row]);
          return Number(gracier);
        })
    );
  });
  return [graciersLand, graciers];
};

const [gracierLand, graciers] = getGlacierLand(input.slice(1, input.length));

const meltGracier = (land, graciers) => {
  const tempLand = land.map((element) => [...element]);
  graciers.forEach((gracier) => {
    const [x, y] = gracier;
    // 상하좌우
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= columnSize ||
        ny >= rowSize ||
        land[ny][nx] !== 0
      )
        continue;
      tempLand[y][x] === 0 ? (tempLand[y][x] = 0) : tempLand[y][x]--;
    }
  });
  return tempLand;
};

const countSection = (land, graciers) => {
  const visited = Array.from(Array(rowSize), () => Array(columnSize));
  let section = 0;
  graciers.forEach((gracier) => {
    const queue = [gracier];
    if (visited[gracier[1]][gracier[0]] || land[gracier[1]][gracier[0]] === 0)
      return;
    visited[gracier[1]][gracier[0]] = true;
    while (queue.length) {
      const [x, y] = queue.shift();
      //상하좌우
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx < 0 ||
          ny < 0 ||
          nx >= columnSize ||
          ny >= rowSize ||
          visited[ny][nx] ||
          land[ny][nx] === 0
        )
          continue;
        visited[ny][nx] = true;
        queue.push([nx, ny]);
      }
    }
    section++;
  });
  return section;
};

const excuteBFS = () => {
  let land = gracierLand.map((element) => [...element]);
  let tempLand = land.map((element) => [...element]);
  let section = countSection(land, graciers);
  let time = 0;
  while (section < 2) {
    tempLand = meltGracier(tempLand, graciers);
    time++;
    section = countSection(tempLand, graciers);
    if (section === 0) break;
  }
  return section === 0 ? 0 : time;
};

const result = excuteBFS();
console.log(result);
