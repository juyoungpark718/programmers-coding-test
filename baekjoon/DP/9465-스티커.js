const log = console.log;
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const T = +input[0];
const len = T*3;
const testCases = [];
for(let i=1 ; i<len ; i += 3){
  const N = +input[i];
  const stickers = input.slice(i+1, i+3).map(e => e.split(" ").map(el => +el) );
  testCases.push({ N, stickers });
}

testCases.map(testCase => {
  const { N, stickers } = testCase;
  for(let i=1 ; i<N ; i++){
    const up = stickers[0][i];
    const down = stickers[1][i];
    if(i-1 >= 0){
      stickers[0][i] = stickers[1][i-1]+up;
      stickers[1][i] = stickers[0][i-1]+down;
    }
    if(i-2 >= 0){
      stickers[0][i] = Math.max(stickers[0][i], stickers[0][i-2] + up, stickers[1][i-2] + up);
      stickers[1][i] = Math.max(stickers[1][i], stickers[0][i-2] + down, stickers[1][i-2] + down);
    }
  }
  log(Math.max(stickers[0][N-1], stickers[1][N-1]));
});