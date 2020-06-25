function solution(dirs) {
  var answer = 0;
  let arr = Array(11).fill(0);
  arr = arr.map((e) => Array(11).fill(0));
  let visited = new Set();
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
    let before = [start[0], start[1]];
    start[0] += dx;
    start[1] += dy;
    visited.add(`${before[0]}${before[1]}${start[0]}${start[1]}`);
    visited.add(`${start[0]}${start[1]}${before[0]}${before[1]}`);
  }
  answer = visited.size / 2;
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
