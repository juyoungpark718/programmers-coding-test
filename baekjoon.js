var fs = require("fs");
// var s = fs.readFileSync('/dev/stdin').toString().split('');
var target = fs.readFileSync("./stdin").toString();
target = Number(target);
let total = 64;
let bars = [64];

while (target !== total) {
  if (total > target) {
    let cut = bars.pop() / 2;
    bars.push(cut);
    if (bars.reduce((a, b) => a + b, 0) < target) {
      bars.push(cut);
    }
  }
  total = bars.reduce((a, b) => a + b, 0);
}

console.log(bars.length);
