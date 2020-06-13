function solution(routes) {
  var answer = 1;
  routes.sort((a, b) => b[0] - a[0]);
  let start = routes.pop();
  while (routes.length !== 0) {
    let newStart = [0, 0];
    let next = routes[routes.length - 1];
    if (next[0] >= start[0] && next[0] <= start[1]) {
      newStart[0] = next[0];
      if (next[1] >= start[1]) {
        newStart[1] = start[1];
      } else {
        newStart[1] = next[1];
      }
      start = [...newStart];
      routes.pop();
    } else {
      answer++;
      start = routes.pop();
      continue;
    }
  }
  return answer;
}
