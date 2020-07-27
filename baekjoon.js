const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const testCaseCount = Number(input[0].trim());

const getTestCases = (inputs, testCaseCount) => {
  const cases = [];
  let index = 0;
  for (let count = 0; count < testCaseCount; count++) {
    const convenienceCount = Number(inputs[index].trim());
    let tempIndex = index;
    index += convenienceCount + 2 + 1;
    const testCase = {
      currentLocation: null,
      destination: null,
      convenience: [],
    };
    for (let location = tempIndex + 1; location < index; location++) {
      if (location === tempIndex + 1)
        testCase.currentLocation = inputs[location]
          .trim()
          .split(" ")
          .map((element) => Number(element));
      else if (location === index - 1)
        testCase.destination = inputs[index - 1]
          .trim()
          .split(" ")
          .map((element) => Number(element));
      else {
        testCase.convenience.push(
          inputs[location]
            .trim()
            .split(" ")
            .map((element) => Number(element))
        );
      }
    }
    cases.push(testCase);
  }
  return cases;
};

const testCases = getTestCases(input.slice(1, input.length), testCaseCount);

const executeBFS = () => {
  testCases.forEach((testCase) => {
    const { currentLocation, destination } = testCase;
    let convenience = testCase.convenience;
    const [endX, endY] = destination;
    convenience.push(destination);
    const queue = [currentLocation];
    while (queue.length) {
      const [startX, startY] = queue.shift();
      if (endX === startX && endY === startY) {
        console.log("happy");
        return;
      }

      let i = 0;
      while (i !== convenience.length) {
        const [nx, ny] = [Math.abs(startX - convenience[i][0]), Math.abs(startY - convenience[i][1])];
        if (nx + ny <= 1000) {
          queue.push([convenience[i][0], convenience[i][1]]);
          convenience = convenience.filter((_, id) => id !== i);
          i = 0;
          break;
        } else {
          i++;
        }
      }
    }
    console.log("sad");
  });
};

executeBFS();
