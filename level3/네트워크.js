let visited = [];

function solution(n, computers) {
  var answer = 0;
  visited = Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    if (visited[i] === 0) {
      answer++;
      dfs(i, n, computers);
    }
  }

  return answer;
}

function dfs(idx, n, computers) {
  visited[idx] = 1;
  for (let i = idx; i < n; i++) {
    if (visited[i] === 0 && computers[idx][i] === 1) {
      dfs(i, n, computers);
    }
  }
}
