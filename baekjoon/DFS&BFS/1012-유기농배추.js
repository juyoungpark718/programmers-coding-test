const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

// testCase = {row,column,vertexs,land}
const getTestCases = (input, count) => {
  let nextTestCaseIndex = 0;
  const testCases = [];
  for (let i = 0; i < count; i++) {
    const [row, column, vertexsLength] = input[nextTestCaseIndex]
      .split(" ")
      .map((element) => Number(element));
    const vertexsInput = input.slice(
      nextTestCaseIndex + 1,
      nextTestCaseIndex + vertexsLength + 1
    );
    const vertexs = [];
    vertexsInput.forEach((input) => {
      const [x, y] = input.split(" ").map((element) => Number(element));
      vertexs.push([x, y]);
    });

    const land = Array.from(Array(row), () => Array(column).fill(0));
    const visitedLand = Array.from(Array(row), () => Array(column).fill(false));
    vertexs.forEach((edge) => (land[edge[0]][edge[1]] = 1));

    const testCase = {
      row,
      column,
      vertexs,
      land,
      visitedLand,
    };
    testCases.push(testCase);
    nextTestCaseIndex += vertexsLength + 1;
  }
  return testCases;
};

const searchGroup = (testCases) => {
  const earthWorm = [];
  testCases.forEach((testCase) => {
    const { row, column, vertexs, land, visitedLand } = testCase;
    const group = [];
    let groupId = 1;
    let queue = [];
    while (vertexs.length !== 0) {
      let [vertexX, vertexY] = [null, null];
      if (queue.length === 0) {
        [vertexX, vertexY] = vertexs.pop();
        if (!visitedLand[vertexX][vertexY]) {
          group.push(groupId);
          groupId++;
        }
      } else {
        [vertexX, vertexY] = queue.pop();
      }

      if (visitedLand[vertexX][vertexY]) continue;
      visitedLand[vertexX][vertexY] = true;
      //상하좌우
      for (let i = 0; i < 4; i++) {
        let nx = vertexX + dx[i];
        let ny = vertexY + dy[i];
        if (nx < 0 || ny < 0 || nx >= row || ny >= column || land[nx][ny] === 0)
          continue;
        queue.push([nx, ny]);
      }
    }
    earthWorm.push(group.length);
  });
  return earthWorm;
};

const testCaseCount = Number(input[0]);
const testCases = getTestCases(input.slice(1, input.length), testCaseCount);
const answer = searchGroup(testCases);
answer.forEach((element) => console.log(element));
