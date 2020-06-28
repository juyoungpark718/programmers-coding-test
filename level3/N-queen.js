function solution(n) {
  let answer = 0;
  let cols = Array(n).fill(0);
  let arr = [];
  answer = dfs(n, cols, 0, answer);
  return answer;
}

function dfs(n, cols, row, answer) {
  if (n === row) return ++answer;
  for (let i = 0; i < n; i++) {
    cols[row] = i;
    if (isPromising(row, i, cols)) {
      answer = dfs(n, cols, row + 1, answer);
    }
  }
  return answer;
}

function isPromising(x, y, cols) {
  for (let i = 0; i < x; i++) {
    if (cols[i] === y || Math.abs(x - i) === Math.abs(y - cols[i]))
      return false;
  }
  return true;
}
