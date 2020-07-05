const dx = [-1, 0, 1, 0];
const dy = [0, -1, 0, 1];
function Point(x, y, direction, cost) {
  let obj = { x, y, dir: direction, cost };
  return obj;
}

function solution(board) {
  var answer = 0;
  const len = board.length;
  let queue = [];
  let arr = [];

  for (let i = 0; i < len; i++) {
    let temp2 = [];
    for (let j = 0; j < len; j++) {
      let temp = [];
      for (let k = 0; k < 4; k++) {
        temp.push(Infinity);
      }
      temp2.push(temp);
    }
    arr.push(temp2);
  }

  for (let i = 0; i < 4; i++) arr[0][0][i] = 0;

  queue.push(Point(0, 0, 0, 0));
  queue.push(Point(0, 0, 1, 0));
  queue.push(Point(0, 0, 2, 0));
  queue.push(Point(0, 0, 3, 0));

  while (queue.length) {
    let point = queue.shift();
    let { x, y, dir, cost } = point;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (Math.abs(dir - i) === 2) continue;
      if (nx < 0 || ny < 0 || nx >= len || ny >= len || board[nx][ny] === 1)
        continue;
      let cost2 = dir === i ? 100 : 600;
      let next = cost + cost2;
      if (arr[nx][ny][i] > next) {
        arr[nx][ny][i] = next;
        queue.push(Point(nx, ny, i, arr[nx][ny][i]));
        queue.sort((a, b) => a.cost - b.cost);
      }
    }
  }
  arr[len - 1][len - 1].sort((a, b) => a - b);
  return arr[len - 1][len - 1][0];
}
