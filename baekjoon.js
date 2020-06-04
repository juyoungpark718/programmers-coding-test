let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split("\n");
let input = fs.readFileSync("./stdin").toString().split("\n");
let len = input.shift();
let glasses = input.map((e) => Number(e));

permutation(glasses, [], 0).map((e) => console.log(e));

// 6 10 13 9 8 1

function permutation(arr, total, seq) {
  return arr.reduce((acc, val, idx) => {
    let newArr = [...arr];
    let result = [];
    if (idx === 0) newArr.splice(idx, 1);
    else newArr.splice(0, idx + 1);
    if (seq < 2) {
      total.push(val);
      seq++;
      result = permutation(newArr, [...total], seq);
      seq--;
    } else {
      seq = 0;
      result = permutation(newArr, [...total], seq);
    }
    total.pop();
    if (result.length === 0)
      result.push([...total].reduce((acc, val) => acc + val, 0));
    acc.push(...result);
    return acc;
  }, []);
}
