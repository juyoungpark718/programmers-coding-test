function solution(dirs) {
  var answer = 0;
  let arr = Array(11).fill(0);
  arr = arr.map((e) => Array(11).fill(0));
  let start = [5, 5];
  for (let i = 0; i < dirs.length; i++) {
    let [dx, dy] = move(dirs[i]);
    if (
      start[0] + dx < 0 ||
      start[0] + dx >= 11 ||
      start[1] + dy < 0 ||
      start[1] + dy >= 11
    )
      continue;
    start[0] += dx;
    start[1] -= dy;
    if (dirs[i] === "U" || dirs[i] === "D") {
      if (!arr[start[1]][start[0]]) {
        arr[start[1]][start[0]] = 1;
        answer += 1;
      }
    } else {
      if (!arr[start[0]][start[1]]) {
        arr[start[0]][start[1]] = 1;
        answer += 1;
      }
    }
  }
  console.log(arr);
  return answer;
}

function move(command) {
  switch (command) {
    case "U":
      return [0, 1];
    case "D":
      return [0, -1];
    case "R":
      return [1, 0];
    case "L":
      return [-1, 0];
    default:
      return [0, 0];
  }
}
