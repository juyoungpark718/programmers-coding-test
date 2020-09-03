var fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var input = fs.readFileSync("./stdin").toString().split("\n");
input = input.map((e) => e.split(" "));
const hor = Array.from(Array(9), () => Array(10).fill(false));
const ver = Array.from(Array(9), () => Array(10).fill(false));
const rec = Array.from(Array(9), () => Array(10).fill(false));
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (input[i][j] !== "0") {
      hor[i][input[i][j]] = true;
      ver[j][input[i][j]] = true;
      rec[Math.floor(i / 3) * 3 + Math.floor(j / 3)][input[i][j]] = true;
    }
  }
}

dfs(0);

function dfs(count) {
  let x = Math.floor(count / 9);
  let y = count % 9;

  if (count === 81) {
    input.forEach((e) => {
      let total = "";
      e.forEach((el, idx) => {
        if (idx === 0) total += el;
        else total += ` ${el}`;
      });
      console.log(total);
    });
    process.exit(0);
  }

  if (input[x][y] === "0") {
    for (let i = 1; i <= 9; i++) {
      if (
        hor[x][i] === false &&
        ver[y][i] === false &&
        rec[Math.floor(x / 3) * 3 + Math.floor(y / 3)][i] === false
      ) {
        input[x][y] = String(i);
        hor[x][i] = true;
        ver[y][i] = true;
        rec[Math.floor(x / 3) * 3 + Math.floor(y / 3)][i] = true;
        dfs(count + 1);
        input[x][y] = "0";
        hor[x][i] = false;
        ver[y][i] = false;
        rec[Math.floor(x / 3) * 3 + Math.floor(y / 3)][i] = false;
      }
    }
  } else {
    dfs(count + 1);
  }
}
