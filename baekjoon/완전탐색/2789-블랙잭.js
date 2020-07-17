const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("./stdin").toString().trim().split("\n");

const [N, limit] = input[0].trim().split(" ");
const cards = input[1]
  .trim()
  .split(" ")
  .map((card) => Number(card));

const totals = [];

for (let firstCardIndex = 0; firstCardIndex < N; firstCardIndex++) {
  for (
    let secondCardIndex = firstCardIndex + 1;
    secondCardIndex < N;
    secondCardIndex++
  ) {
    for (
      let thirdCardIndex = secondCardIndex + 1;
      thirdCardIndex < N;
      thirdCardIndex++
    ) {
      let total =
        cards[firstCardIndex] + cards[secondCardIndex] + cards[thirdCardIndex];

      if (total <= limit) totals.push(total);
    }
  }
}

totals.sort((a, b) => a - b);

console.log(totals.pop());
