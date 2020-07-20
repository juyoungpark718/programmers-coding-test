const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const aptsLength = Number(input[0]);

const getApts = (inputs) => {
  const arr = [];
  inputs.forEach((rowInput, rowIndex) => {
    rowInput
      .trim()
      .split("")
      .forEach((element, elementIndex) =>
        Number(element) === 1 ? arr.push([elementIndex, rowIndex]) : null
      );
  });
  return arr;
};

const getAptArr = (inputs) => {
  const arr = [];
  inputs.forEach((rowInput) => {
    const row = rowInput
      .trim()
      .split("")
      .map((element) => Number(element));
    arr.push(row);
  });
  return arr;
};

const aptArr = getAptArr(input.slice(1, input.length));
const apts = getApts(input.slice(1, input.length));
const visitedArr = Array.from(Array(aptsLength), () =>
  Array(aptsLength).fill(false)
);

const excuteBFS = () => {
  const complex = [];
  const queue = [apts[0]];
  let apt = 0;
  for (let aptIndex = 1; aptIndex < apts.length; ) {
    let [startX, startY] = [-1, -1];
    if (queue.length === 0) {
      [startX, startY] = apts[aptIndex];
      aptIndex++;
      if (visitedArr[startY][startX]) continue;
      complex.push(apt);
      apt = 1;
    } else {
      [startX, startY] = queue.shift();
      apt++;
    }
    visitedArr[startY][startX] = true;

    //상하좌우
    for (let i = 0; i < 4; i++) {
      const nx = startX + dx[i];
      const ny = startY + dy[i];

      if (nx < 0 || ny < 0 || nx >= aptsLength || ny >= aptsLength) continue;
      if (visitedArr[ny][nx] || aptArr[ny][nx] === 0) continue;
      visitedArr[ny][nx] = true;
      queue.push([nx, ny]);
    }
  }
  complex.push(apt);
  return complex;
};

const complex = excuteBFS();
console.log(complex.length);
complex.sort((a, b) => a - b);
complex.forEach((element) => console.log(element));
