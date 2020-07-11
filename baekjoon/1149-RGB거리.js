var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
var input = fs.readFileSync("./stdin").toString().trim().split("\n");
let n = Number(input[0]);
let paint = [];

for (let i = 1; i < input.length; i++) {
  paint.push(input[i].split(" ").map((e) => Number(e)));
}
for (let i = 1; i < paint.length; i++) {
  paint[i][0] = Math.min(paint[i - 1][1], paint[i - 1][2]) + paint[i][0];
  paint[i][1] = Math.min(paint[i - 1][0], paint[i - 1][2]) + paint[i][1];
  paint[i][2] = Math.min(paint[i - 1][0], paint[i - 1][1]) + paint[i][2];
}

console.log(Math.min(...paint[paint.length - 1]));
