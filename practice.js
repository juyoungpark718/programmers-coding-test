const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const input = fs.readFileSync("./stdin").toString().trim().split(" ");

let data = input;
const N = parseInt(data[0]); // 수빈
const K = parseInt(data[1]); // 동생

if (N == K) {
  console.log(0);
  process.exit(0);
}

chk = [];
for (let i = 0; i < 100101; i++) {
  chk[i] = -1;

  const queue = [N];
  chk[N] = 0;

  while (queue.length > 0) {
    const x = queue.shift();

    if (x + 1 == K || x - 1 == K || 2 * x == K) {
      console.log(chk[x] + 1);
      process.exit(0);
    }

    if (x + 1 <= 100000 && chk[x + 1] == -1) {
      chk[x + 1] = chk[x] + 1;
      queue.push(x + 1);
    }
    if (x - 1 >= 0 && chk[x - 1] == -1) {
      chk[x - 1] = chk[x] + 1;
      queue.push(x - 1);
    }
    if (2 * x <= 100000 && chk[2 * x] == -1) {
      chk[2 * x] = chk[x] + 1;
      queue.push(2 * x);
    }
  }
}
