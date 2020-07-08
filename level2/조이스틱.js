const alpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

function solution(name) {
  var answer = 0;
  let arr = [...name];

  arr.forEach((e) => {
    answer += getDiff(e);
  });

  let min = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    let idx = i + 1;
    if (name[idx] === "A") {
      while (idx < arr.length && arr[idx] === "A") {
        idx++;
      }
      let move = 2 * i + name.length - idx;
      min = Math.min(min, move);
    }
  }
  answer += min;
  return answer;
}
function getDiff(ch) {
  let idx = alpha.findIndex((e) => ch === e);
  if (idx > 13) return 26 - idx;
  else return idx;
}
