var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = fs.readFileSync("./stdin").toString().split("\n");
var info = input[0].split(" ").map((e) => e / 1);
var link = [];
for (var k = 1; k < input.length; k++) {
  link.push(input[k].split(" ").map((e) => e / 1));
}
link = link.sort((a, b) => a[2] - b[2]);

var edge = [];

var cycleTable = new Array(info[0] + 1);
for (var i = 0; i < cycleTable.length; i++) {
  cycleTable[i] = i;
}
console.log("cycleTable(before): ", cycleTable);
var answer = 0;
while (true) {
  var current = link.shift();
  if (cycleTable[current[1]] !== cycleTable[current[0]]) {
    cycleTable[current[1]] = cycleTable[current[0]];
    edge.push(current[2]);
  } else {
    continue;
  }
  console.log("edge ", edge, info[0]);
  if (edge.length === info[0] - 1) {
    answer = edge.reduce((a, b) => a + b);
    break;
  }
}
console.log("cycleTable(after): ", cycleTable);
console.log("edge: ", edge);
// var answer = edge.reduce((a,b)=>a+b)
console.log("answer", answer);
