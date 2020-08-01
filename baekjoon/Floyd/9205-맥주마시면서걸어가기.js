const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const testCaseCount = Number(input[0].trim());

const transformStrToArr = (str, splitOption = " ") => {
  return str
    .trim()
    .split(splitOption)
    .map((element) => Number(element));
};

const getTestCases = (inputs, testCaseCount) => {
  const cases = [];
  let index = 0;
  for (let count = 0; count < testCaseCount; count++) {
    const convenienceCount = Number(inputs[index].trim());
    let tempIndex = index;
    index += convenienceCount + 2 + 1;
    const testCase = {
      vertex: [],
    };
    for (let location = tempIndex + 1; location < index; location++) {
      testCase.vertex.push([...transformStrToArr(inputs[location])]);
    }
    cases.push(testCase);
  }
  return cases;
};

const testCases = getTestCases(input.slice(1, input.length), testCaseCount);

const make2Arr = (testCase) => {
  const { vertex } = testCase;
  const n = vertex.length;
  const connected = Array.from(Array(n), () => Array(n).fill(Infinity));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      const [x, y] = vertex[i];
      const [x2, y2] = vertex[j];
      const distance = Math.abs(x - x2) + Math.abs(y - y2);
      if (distance <= 1000) {
        connected[i][j] = 1;
      }
    }
  }
  return connected;
};

testCases.forEach((testCase) => {
  const connected = make2Arr(testCase);
  const n = connected.length;
  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (connected[i][j] > connected[i][k] + connected[k][j]) {
          connected[i][j] = connected[i][k] + connected[k][j];
        }
      }
    }
  }
  connected[0][n - 1] !== Infinity ? console.log("happy") : console.log("sad");
});
