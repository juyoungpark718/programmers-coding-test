const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const n = +input[0];
const triangle = [];
input.slice(1, 1 + n).forEach((e) => triangle.push(e.split(" ").map((e) => +e)));

for (let i = triangle.length - 1; i >= 1; i--) {
  for (let j = 0; j < triangle[i].length - 1; j++) {
    triangle[i - 1][j] = Math.max(
      triangle[i - 1][j] + triangle[i][j + 1],
      triangle[i - 1][j] + triangle[i][j]
    );
  }
}

log(triangle[0][0]);
