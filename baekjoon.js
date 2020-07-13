var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().trim();
var input = fs.readFileSync("./stdin").toString().trim();

var nums = input.split("").sort((a, b) => b / 1 - a / 1);
var sum = nums.reduce((a, b) => a / 1 + b / 1);

var answer = -1;
if (nums[nums.length - 1] == "0" && sum % 3 == 0) {
  answer = nums.join("");
}
console.log(answer);

// let n = [...input];
// let total = 0;
// n.forEach((e) => (total += Number(e)));

// if (!n.includes("0") || total % 3 !== 0) {
//   console.log(-1);
//   process.exit(0);
// }

// n.sort((a, b) => Number(b) - Number(a));
// console.log(n.join(""));
